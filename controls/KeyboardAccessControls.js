import {
	MathUtils,
	Spherical,
	Vector3,
  Euler
} from 'three';

const _lookDirection = new Vector3();
const _spherical = new Spherical();
const _target = new Vector3();
const _euler = new Euler( 0, 0, 0, 'YXZ' );
const _vector = new Vector3();

class KeyboardAccessControls {

    constructor(camera, domElement) {

        this.camera = camera;
        this.domElement = domElement;
        this.lookSpeed = 0.01;
        this.moveSpeed = 0.01;

        // api
        this.minPolarAngle = 0;
        this.maxPolarAngle = Math.PI;
        this.moveDown = false;
        this.moveForwardEnabled = false;
        this.moveLeft = false;
        this.moveRight = false;
        this.moveUp = false;

        this.tabularMovement = false;
        this.sceneActive = false;
        this.elevationControls = true;
 




        window.addEventListener( 'keydown', this.onKeyDown.bind(this) );
		    window.addEventListener( 'keyup', this.onKeyUp.bind(this) );


    }

    onKeyDown(event) {

      switch(event.code) {

          case 'ArrowUp':
          case 'KeyW': 
          if(this.elevationControls) this.moveUp = true; 
          break;

          case 'ArrowLeft':
          case 'KeyA': this.moveLeft = true; break;

          case 'ArrowDown':
          case 'KeyS': 
          if (this.elevationControls) this.moveDown = true; 
          break;

          case 'ArrowRight':
          case 'KeyD': this.moveRight = true; break;

          case 'Space': this.moveForwardEnabled = true; break;
            

    }

  }

  onKeyUp(event) {

    switch(event.code) {

        case 'ArrowUp':
        case 'KeyW': 
        if(this.elevationControls) this.moveUp = false; 
        break;

        case 'ArrowLeft':
        case 'KeyA': this.moveLeft = false; break;

        case 'ArrowDown':
        case 'KeyS': 
        if (this.elevationControls) this.moveDown = false; 
        break;

        case 'ArrowRight':
        case 'KeyD': this.moveRight = false; break;

        case 'Space': this.moveForwardEnabled = false; break;
    }
  }



    dispose() {

      window.removeEventListener( 'keydown', this.onKeyDown );
      window.removeEventListener( 'keyup', this.onKeyUp );

    };

    setTab(callback) {

      window.addEventListener( 'keydown' , (e) => this.onTab(e, callback));

    }

    onTab(e, callback) {

      if(this.sceneActive) {
        e.preventDefault();

        switch(e.code) {
          case 'Tab': callback(e); break;
        }
  
      }

    }

    getDirection( v ) {

      return v.set( 0, 0, - 1 ).applyQuaternion( this.camera.quaternion );
  
    }
    
    update() {

      _euler.setFromQuaternion( this.camera.quaternion );

      if(this.moveUp) {
        _euler.x += this.lookSpeed;
        _euler.x = Math.max( Math.PI/2 - this.maxPolarAngle, Math.min( Math.PI/2 - this.minPolarAngle, _euler.x ) );
      } else if(this.moveDown) {
        _euler.x -= this.lookSpeed;
        _euler.x = Math.max( Math.PI/2 - this.maxPolarAngle, Math.min( Math.PI/2 - this.minPolarAngle, _euler.x ) );
      }

      if(this.moveLeft) {
        _euler.y += this.lookSpeed; 
      } else if (this.moveRight) {
        _euler.y -= this.lookSpeed;
      }

      this.camera.quaternion.setFromEuler( _euler ); 

      if(this.moveForwardEnabled) {

        this.moveForward(this.moveSpeed);

      }

  }

    moveForward(distance) {
      //afaik the best algorithm is cross product
      const _direction = new Vector3();
      _direction.setFromMatrixColumn( this.camera.matrix, 0 );
      _direction.crossVectors( this.camera.up, _direction );

      this.camera.position.addScaledVector( _direction, distance );
    }
}

export { KeyboardAccessControls };