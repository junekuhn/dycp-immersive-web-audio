import {
    Vector3,
    Euler,
    ImageLoader,
    Vector2
} from 'three';

const _euler = new Euler(0,0,0,'YXZ');
const _rotTouchCoords = new Vector2(0,0);
const _prevRotTouchCoords = new Vector2(0,0);

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

        this.navigator = window.navigator;

        this.rotationTouches = [];
        this.moveTouches = [];
        this.rotationNeedsUpdate = false;
        this.touchSpeed = 0.003;
        this.forwardSpeed = 0.08;

        this.minPolarAngle = 0;
        this.maxPolarAngle = Math.PI;

        this.domElement.ownerDocument.addEventListener( 'touchstart', this.onTouchStart.bind(this) );
        this.domElement.ownerDocument.addEventListener( 'touchmove', this.onTouchMove.bind(this) );
        this.domElement.ownerDocument.addEventListener( 'touchend', this.onTouchEnd.bind(this) );
        this.domElement.ownerDocument.addEventListener( 'touchcancel', this.onTouchEnd.bind(this) );
        this.divideScreen();

    }

    divideScreen() {

        const hitbox = this.domElement.ownerDocument.createElement('div');
        hitbox.id = "hitbox";
        this.domElement.ownerDocument.body.appendChild(hitbox);

    }

    dispose() {

        // this.domElement.ownerDocument.removeEventListener( 'touchstart', this._onTouchStart );
        // this.domElement.ownerDocument.removeEventListener( 'touchmove', this._onTouchMove );
        // this.domElement.ownerDocument.removeEventListener( 'touchend', this._onTouchEnd );

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

        // update() => if this.moveTouches.length > 0, move forward
        if(this.moveTouches.length > 0) {

          this.moveForward(this.forwardSpeed)

      }

      _euler.setFromQuaternion( this.camera.quaternion );
      _euler.y += _rotTouchCoords.x * this.touchSpeed;
      _euler.x += _rotTouchCoords.y * this.touchSpeed * 0.5;
      _euler.x = Math.max( Math.PI/2 - this.maxPolarAngle, Math.min( Math.PI/2 - this.minPolarAngle, _euler.x ) );

      this.camera.quaternion.setFromEuler( _euler ); 


        
    }

    onTouchStart(event) {
      let itemIndex = 0;

      while(event.changedTouches.item(itemIndex) != null) {
        let touch = event.changedTouches.item(itemIndex);
        // console.log(touch)
        // console.log(touch.identifier)
        // console.log(touch.target)

        if(touch.target.id == "hitbox") {
          
          this.moveTouches.push(touch.identifier)

        } else if(touch.target.id == "canvas") {

          //limit rotationtouches to length 1
          if(this.rotationTouches.length == 0) {
            this.rotationTouches.push(touch.identifier)
          }

          //set init touch for first finger only
          _prevRotTouchCoords.y = touch.clientY
          _prevRotTouchCoords.x = touch.clientX

        }

        itemIndex++;
      }
    


    };
    
    onTouchEnd(event) {

        // _prevRotTouchCoords.y = 0;
        // _prevRotTouchCoords.x = 0;
        


        let itemIndex = 0;

        while(event.changedTouches.item(itemIndex) != null) {
          let touch = event.changedTouches.item(itemIndex);

          //stop rotation
          if(touch.identifier == this.rotationTouches[0]) {
            _rotTouchCoords.x = 0;
            _rotTouchCoords.y = 0;
          }

          //filter out touches with id
          this.moveTouches = this.moveTouches.filter(moveTouch => touch.identifier != moveTouch);
          this.rotationTouches = this.rotationTouches.filter(rotationTouch => touch.identifier != rotationTouch);
          
          itemIndex++;
        }


    }

    onTouchMove(event) {

      
      let itemIndex = 0;

      
      let touch = event.changedTouches.item(itemIndex);

      this.rotationTouches.map((rotationTouch, i) => {

        console.log(i)

        //limit to first touch
        if (rotationTouch == touch.identifier && i == 0)
          {
              // event.preventDefault(); // avoid scrolling whilst dragging
              _rotTouchCoords.x = touch.clientX - _prevRotTouchCoords.x;
              _prevRotTouchCoords.x = touch.clientX;
              _rotTouchCoords.y = touch.clientY - _prevRotTouchCoords.y;
              _prevRotTouchCoords.y = touch.clientY;

          } 


      })


    }
    
    onHitBoxEnd(event) {

      this.moveForwardEnabled = false;
      this.domElement.ownerDocument.removeEventListener( 'touchend', this._onHitBoxEnd );

    } 

     moveForward(distance) {
      //afaik the best algorithm is cross product
      const _direction = new Vector3();
      _direction.setFromMatrixColumn( this.camera.matrix, 0 );
      _direction.crossVectors( this.camera.up, _direction );

      this.camera.position.addScaledVector( _direction, distance );
     }
  

}


export { TouchAccessControls };