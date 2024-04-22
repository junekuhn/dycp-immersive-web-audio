import {
    Vector3,
    Euler,
    ImageLoader
} from 'three';

const _euler = new Euler(0,0,0,'YXZ');

class TouchAccessControls {

    constructor(camera, domElement) {

        this.camera = camera;
        this.domElement = domElement;

        this.enabled = false;
        this.isLocked = false;

        this.forwardMovementEnabled = false;

        this.touchX = 0;
        this.touchY = 0;
        this.previousTouchX = 0;
        this.previousTouchY = 0;
        this.touchIdentifier;
        this.moveForward = false;
        this.touchSpeed = 0.004;
        this.forwardSpeed = 0.08;

        this.minPolarAngle = 0;
        this.maxPolarAngle = Math.PI;

        this._onTouchStart = this.onTouchStart.bind( this );
        this._onTouchMove = this.onTouchMove.bind( this );
        this._onTouchEnd = this.onTouchEnd.bind( this );
        this._onHitBoxEnd = this.onHitBoxEnd.bind( this );

        this.domElement.ownerDocument.addEventListener( 'touchstart', this._onTouchStart );

        if(this.enabled && this.forwardMovementEnabled) {
            this.createHitBox();
        }



    }

    createHitBox() {

        const hitbox = this.domElement.ownerDocument.createElement('div');

        hitbox.id = "hitbox";
        this.domElement.ownerDocument.body.appendChild(hitbox);

    }

    dispose() {

        this.domElement.ownerDocument.removeEventListener( 'touchstart', this._onTouchStart );
        this.domElement.ownerDocument.removeEventListener( 'touchmove', this._onTouchMove );
        this.domElement.ownerDocument.removeEventListener( 'touchend', this._onTouchEnd );

    }


    update() {

        if(this.moveForward && this.forwardMovementEnabled) {
            const direction = new Vector3();
            this.camera.getWorldDirection( direction );
      
            //neutralize y
            direction.y = 0;
      
            this.camera.position.add( direction.multiplyScalar( this.forwardSpeed ) );
        }
    }

    onTouchStart(event) {

        if(this.isLocked) {

          //if in hitbox
          if(event.target.id == "hitbox") {

            this.domElement.ownerDocument.addEventListener( 'touchend', this._onHitBoxEnd );

            this.moveForward = true;

          } else {

              //set init touch for first finger only
              this.previousTouchY = event.changedTouches[0].clientY
              this.previousTouchX = event.changedTouches[0].clientX
              this.touchIdentifier = event.changedTouches[0].identifier;
              this.domElement.ownerDocument.addEventListener( 'touchmove', this._onTouchMove );
              this.domElement.ownerDocument.addEventListener( 'touchend', this._onTouchEnd );
              
          }
    
        //   event.preventDefault();
        }
    };
    
    onTouchEnd(event) {

        this.previousTouchY = undefined;
        this.touchX = 0;
        this.touchY = 0;
        this.domElement.ownerDocument.removeEventListener( 'touchmove', this._onTouchMove );
        this.domElement.ownerDocument.removeEventListener( 'touchend', this._onTouchEnd );
        // event.preventDefault(); 

    }

    onTouchMove(event) {

        for (const touch of event.changedTouches)
        {
            if (touch.identifier == this.touchIdentifier)
            {
                // event.preventDefault(); // avoid scrolling whilst dragging
                this.touchX = touch.clientX - this.previousTouchX;
                this.previousTouchX = touch.clientX;
                this.touchY = touch.clientY - this.previousTouchY;
                this.previousTouchY = touch.clientY;

            } 
            else 
            {
    
            }
        }

        _euler.setFromQuaternion( this.camera.quaternion );
        _euler.y += this.touchX * this.touchSpeed;
        _euler.x += this.touchY * this.touchSpeed;
        _euler.x = Math.max( Math.PI/2 - this.maxPolarAngle, Math.min( Math.PI/2 - this.minPolarAngle, _euler.x ) );
  
        this.camera.quaternion.setFromEuler( _euler ); 
    }
    
    onHitBoxEnd(event) {

      this.moveForward = false;
      this.domElement.ownerDocument.removeEventListener( 'touchend', this._onHitBoxEnd );

    }

}


export { TouchAccessControls };