import {
    Vector3,
    Euler,
    ImageLoader,
    Vector2
} from 'three';

const _euler = new Euler(0,0,0,'YXZ');
const _touchCoords = new Vector2(0,0);
const _prevTouchCoords = new Vector2(0,0);

class TouchAccessControls {

    constructor(camera, domElement) {

        this.camera = camera;
        this.domElement = domElement;

        this.enabled = false;
        this.isLocked = false;

        this.curTime, this.tapLen;
        this.lastTap = 0;
        this.timeout;

        this.cameraHeight = 0, this.prevCameraHeight = 0;

        this.moveForwardEnabled = false;
        this.tabularMovement = false;

        this.navigator = window.navigator;

        this.touchIdentifier;
        this.touchSpeed = 0.003;
        this.forwardSpeed = 0.08;

        this.minPolarAngle = 0;
        this.maxPolarAngle = Math.PI;

        this._onTouchStart = this.onTouchStart.bind( this );
        this._onTouchMove = this.onTouchMove.bind( this );
        this._onTouchEnd = this.onTouchEnd.bind( this );
        this._onHitBoxEnd = this.onHitBoxEnd.bind( this );
        this._onContextMenu = this.onContextMenu.bind( this );
        // this._onDoubleTap = this.onDoubleTap.bind( this );

        this.domElement.ownerDocument.addEventListener( 'touchstart', this._onTouchStart );
        this.domElement.ownerDocument.addEventListener( 'contextmenu', this._onContextMenu )
        // this.domElement.ownerDocument.addEventListener('touchend', this.onDoubleTap, { passive: false });
        this.divideScreen();

    }

    divideScreen() {

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

      const direction = new Vector3();
      this.camera.getWorldDirection( direction );


        
        //detect vertical zero crossing for vibration feedback
        this.cameraHeight = direction.y 


        if((this.cameraHeight > 0 && this.prevCameraHeight < 0) 
          || (this.cameraHeight < 0 && this.prevCameraHeight > 0)) {
            console.log("vibrate")
            navigator.vibrate(75)
          }

        // set previous
        this.prevCameraHeight = this.cameraHeight;


        if(this.moveForwardEnabled) {


          this.moveForward(this.forwardSpeed)


      }
        
    }

    onTouchStart(event) {

      console.log("touchstart")


          //if in hitbox
          if(event.target.id == "hitbox" ) {

            this.domElement.ownerDocument.addEventListener( 'touchend', this._onHitBoxEnd );

            this.moveForwardEnabled = true;

           } else {

              //set init touch for first finger only
              _prevTouchCoords.y = event.changedTouches[0].clientY
              _prevTouchCoords.x = event.changedTouches[0].clientX
              this.touchIdentifier = event.changedTouches[0].identifier;
              this.domElement.ownerDocument.addEventListener( 'touchmove', this._onTouchMove );
              this.domElement.ownerDocument.addEventListener( 'touchend', this._onTouchEnd );

              
          }
    

    };
    
    onTouchEnd(event) {

        _prevTouchCoords.y = undefined;
        _touchCoords.x = 0;
        _touchCoords.y = 0;
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
                _touchCoords.x = touch.clientX - _prevTouchCoords.x;
                _prevTouchCoords.x = touch.clientX;
                _touchCoords.y = touch.clientY - _prevTouchCoords.y;
                _prevTouchCoords.y = touch.clientY;

            } 
        }

        _euler.setFromQuaternion( this.camera.quaternion );
        _euler.y += _touchCoords.x * this.touchSpeed;
        _euler.x += _touchCoords.y * this.touchSpeed * 0.5;
        _euler.x = Math.max( Math.PI/2 - this.maxPolarAngle, Math.min( Math.PI/2 - this.minPolarAngle, _euler.x ) );
  
        this.camera.quaternion.setFromEuler( _euler ); 
    }
    
    onHitBoxEnd(event) {

      this.moveForwardEnabled = false;
      this.domElement.ownerDocument.removeEventListener( 'touchend', this._onHitBoxEnd );

    }
    
    // setDoubleTap(callback, hitboxCallback) {

    //   this.domElement.ownerDocument.addEventListener('touchend', 
    //     (e) => this.onDoubleTap(e, callback, hitboxCallback),
    //     { passive: false }
    //   );
    //   this.domElement.ownerDocument.addEventListener('contextmenu', 
    //     (e) => this.onContextMenu(e, callback, hitboxCallback),
    //     { passive: false }
    //   );  
    //   this.tabularMovement = true;

    // }

    // /* Based on this http://jsfiddle.net/brettwp/J4djY/*/
    // onDoubleTap (e, callback, hitboxCallback) {

 
    //   this.curTime = new Date().getTime();
    //   this.tapLen = this.curTime - this.lastTap;

    //   if (this.tapLen < 500 && this.tapLen > 0) {

    //     if(e.target.id =="hitbox") {
    //       hitboxCallback();
    //     } else {
    //       callback();
    //     }

    //     e.preventDefault();

    //   } else {

    //     this.timeout = setTimeout(() => {
    //       clearTimeout(this.timeout);
    //     }, 500);

    //   }

    //   this.lastTap = this.curTime;
    
    //  }


    //  onContextMenu(e, callback, hitboxCallback) {
    //   if(e.target.id =="hitbox") {
    //     hitboxCallback();
    //   } else {
    //     callback();
    //   }
    //   e.preventDefault();
    //  }

     moveForward(distance) {
      //afaik the best algorithm is cross product
      const _direction = new Vector3();
      _direction.setFromMatrixColumn( this.camera.matrix, 0 );
      _direction.crossVectors( this.camera.up, _direction );

      this.camera.position.addScaledVector( _direction, distance );
     }
  

}


export { TouchAccessControls };