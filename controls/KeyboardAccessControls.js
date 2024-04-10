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
        this.moveForward = false;
        this.moveLeft = false;
        this.moveRight = false;
        this.moveUp = false;

        this.tabularMovement = false;
        this.discretePositions = [];
        this.tabIndex = 0;


        this.onKeyDown = function ( event ) {

            switch(event.code) {

                case 'ArrowUp':
                case 'KeyW': this.moveUp = true; break;

                case 'ArrowLeft':
                case 'KeyA': this.moveLeft = true; break;

                case 'ArrowDown':
                case 'KeyS': this.moveDown = true; break;

                case 'ArrowRight':
                case 'KeyD': this.moveRight = true; break;

                case 'Space': this.moveForward = true; break;

                case 'Tab': this.nextPosition(event); break;
                  

			    }

        }

        this.onKeyUp = function ( event ) {

            switch(event.code) {

                case 'ArrowUp':
                case 'KeyW': this.moveUp = false; break;

                case 'ArrowLeft':
                case 'KeyA': this.moveLeft = false; break;

                case 'ArrowDown':
                case 'KeyS': this.moveDown = false; break;

                case 'ArrowRight':
                case 'KeyD': this.moveRight = false; break;

                case 'Space': this.moveForward = false; break;

			}

        }

        this.update = function () {

            _euler.setFromQuaternion( camera.quaternion );

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

            camera.quaternion.setFromEuler( _euler ); 

            if(this.moveForward) {

              const direction = new Vector3();
              this.camera.getWorldDirection( direction );

              //neutralize y
              direction.y = 0;

              camera.position.add( direction.multiplyScalar( this.moveSpeed ) );

            }

        }

        this.setDiscretePositions = function( positions ) {

          //takes an array of Vector3's 

          this.tabularMovement = true;
          this.discretePositions = positions;

        }

        this.nextPosition = function(event) {

          if(this.tabularMovement) {

            event.preventDefault();

            this.tabIndex++;

            if (this.tabIndex > this.discretePositions.length-1) {
                this.tabIndex = 0;
            }
      
            camera.position.copy ( this.discretePositions[ this.tabIndex ] );

          } else {
            console.error("Set Discrete Positions First")
          }
        }

        this.dispose = function () {

          window.removeEventListener( 'keydown', _onKeyDown );
          window.removeEventListener( 'keyup', _onKeyUp );

        };

        const _onKeyDown = this.onKeyDown.bind( this );
		    const _onKeyUp = this.onKeyUp.bind( this );

        window.addEventListener( 'keydown', _onKeyDown );
		    window.addEventListener( 'keyup', _onKeyUp );


    }
}

export { KeyboardAccessControls };