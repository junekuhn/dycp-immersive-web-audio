import {
	Euler,
	EventDispatcher,
	Vector3,
	Controls,
	Vector2
} from 'three';

const _euler = new Euler( 0, 0, 0, 'YXZ' );
const _vector = new Vector3();

const _changeEvent = { type: 'change' };
const _lockEvent = { type: 'lock' };
const _unlockEvent = { type: 'unlock' };

const _PI_2 = Math.PI / 2;

const _touchCoords = new Vector2(0,0);
const _prevTouchCoords = new Vector2(0,0);

class PointerControls extends Controls {

	constructor( camera, domElement ) {

		super();

		this.camera = camera;
		this.domElement = domElement;

		this.isLocked = false;


		this._pointers = [];
		this._pointerPositions = {};

		// Set to constrain the pitch of the camera
		// Range is 0 to Math.PI radians
		this.minPolarAngle = 0; // radians
		this.maxPolarAngle = Math.PI; // radians

		this.pointerSpeed = 1.0;

        this.movementEnabled = true;
		this.moveForwardEnabled = false;
        this.movingForward = false;
        this.distance = 0.05;

		this.touchIdentifier;
        this.touchSpeed = 0.003;
        this.forwardSpeed = 0.08;

		this._onPointerMove = onPointerMove.bind( this );
		this._onPointerlockChange = onPointerlockChange.bind( this );
		this._onPointerlockError = onPointerlockError.bind( this );
        this._onPointerDown = onPointerDown.bind( this );
        this._onPointerUp = onPointerUp.bind( this );

		this._onTouchStart = onTouchStart.bind( this );
        this._onTouchMove = onTouchMove.bind( this );
		this._onMouseMove = onMouseMove.bind( this );
		this._onMouseDown = onMouseDown.bind( this );
        this._onHitBoxEnd = this.onHitBoxEnd.bind( this );

		this.connect();

	}

	divideScreen() {

        const hitbox = this.domElement.ownerDocument.createElement('div');
        hitbox.id = "hitbox";
        this.domElement.ownerDocument.body.appendChild(hitbox);

    }

	connect() {

		this.domElement.ownerDocument.addEventListener( 'pointermove', this._onPointerMove );
		this.domElement.ownerDocument.addEventListener( 'pointerlockchange', this._onPointerlockChange );
		this.domElement.ownerDocument.addEventListener( 'pointerlockerror', this._onPointerlockError );
        this.domElement.ownerDocument.addEventListener( 'pointerdown' , this._onPointerDown );
        this.domElement.ownerDocument.addEventListener( 'pointerup', this._onPointerUp );
        this.domElement.ownerDocument.addEventListener( 'pointercancel', this._onPointerUp );

	}

	disconnect() {

		this.domElement.ownerDocument.removeEventListener( 'pointermove', this._onPointerMove );
		this.domElement.ownerDocument.removeEventListener( 'pointerlockchange', this._onPointerlockChange );
		this.domElement.ownerDocument.removeEventListener( 'pointerlockerror', this._onPointerlockError );
        this.domElement.ownerDocument.removeEventListener( 'pointerdown', this._onPointerDown );
        this.domElement.ownerDocument.removeEventListener( 'pointerup', this._onPointerUp );

	}

	dispose() {

		this.disconnect();

	}

	getObject() { // retaining this method for backward compatibility

		return this.camera;

	}

	getDirection( v ) {

		return v.set( 0, 0, - 1 ).applyQuaternion( this.camera.quaternion );

	}

	moveForward( distance ) {

		// move forward parallel to the xz-plane
		// assumes camera.up is y-up

		_vector.setFromMatrixColumn( this.camera.matrix, 0 );
		_vector.crossVectors( this.camera.up, _vector );

		this.camera.position.addScaledVector( _vector, distance );

	}



	lock() {

		this.domElement.requestPointerLock();

	}

	unlock() {

		this.domElement.ownerDocument.exitPointerLock();

	}

	onHitBoxEnd(event) {

		this.moveForwardEnabled = false;
		this.domElement.ownerDocument.removeEventListener( 'touchend', this._onHitBoxEnd );
  
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

	  _addPointer( event ) {

		this._pointers.push( event.pointerId );

	}

	_removePointer( event ) {

		delete this._pointerPositions[ event.pointerId ];

		for ( let i = 0; i < this._pointers.length; i ++ ) {

			if ( this._pointers[ i ] == event.pointerId ) {

				this._pointers.splice( i, 1 );
				return;

			}

		}

	}

}

// event listeners

function onPointerDown(event) {

    if (this.isLocked === false) return;

    this.movingForward = true;

    this.dispatchEvent( _changeEvent );

	this._addPointer( event );

	if ( event.pointerType === 'touch' ) {

		this._onTouchStart( event );

	} else {

		this._onMouseDown( event );

	}

}

function onPointerUp() {

    if (this.isLocked === false ) return;

    this.movingForward = false;

    this.dispatchEvent( _changeEvent );
	
}

// function onPointerUp( event ) {

// 	this._removePointer( event );

// 	switch ( this._pointers.length ) {

// 		case 0:

// 			// this.domElement.releasePointerCapture( event.pointerId );

// 			this.domElement.removeEventListener( 'pointermove', this._onPointerMove );
// 			this.domElement.removeEventListener( 'pointerup', this._onPointerUp );

// 			this.dispatchEvent( _endEvent );

// 			// this.state = _STATE.NONE;

// 			break;

// 		case 1:

// 			const pointerId = this._pointers[ 0 ];
// 			const position = this._pointerPositions[ pointerId ];

// 			// minimal placeholder event - allows state correction on pointer-up
// 			this._onTouchStart( { pointerId: pointerId, pageX: position.x, pageY: position.y } );

// 			break;

// 	}

// }

function onPointerMove( event ) {

	// if ( this.isLocked === false ) return;

	this.dispatchEvent( _changeEvent );

	if ( event.pointerType === 'touch' ) {

		this._onTouchMove( event );

	} else {

		this._onMouseMove( event );

	}

}

function onPointerlockChange() {

	if ( this.domElement.ownerDocument.pointerLockElement === this.domElement ) {

		this.dispatchEvent( _lockEvent );

		this.isLocked = true;

	} else {

		this.dispatchEvent( _unlockEvent );

		this.isLocked = false;

	}

}

function onPointerlockError() {

	console.error( 'THREE.MouseOnlyControls: Unable to use Pointer Lock API' );

}

function onMouseDown( event ) {

}

function onMouseMove ( event ) {

	const movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
	const movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

	_euler.setFromQuaternion( this.camera.quaternion );

	_euler.y -= movementX * 0.002 * this.pointerSpeed;
	_euler.x -= movementY * 0.002 * this.pointerSpeed;

	_euler.x = Math.max( _PI_2 - this.maxPolarAngle, Math.min( _PI_2 - this.minPolarAngle, _euler.x ) );

	this.camera.quaternion.setFromEuler( _euler );

}

function onTouchStart ( event) {

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

}

function onTouchMove (event) {


	// event.preventDefault(); // avoid scrolling whilst dragging
	_touchCoords.x = event.clientX - _prevTouchCoords.x;
	_prevTouchCoords.x = event.clientX;
	_touchCoords.y = event.clientY - _prevTouchCoords.y;
	_prevTouchCoords.y = event.clientY;


	_euler.setFromQuaternion( this.camera.quaternion );
	_euler.y += _touchCoords.x * this.touchSpeed;
	_euler.x += _touchCoords.y * this.touchSpeed * 0.5;
	_euler.x = Math.max( Math.PI/2 - this.maxPolarAngle, Math.min( Math.PI/2 - this.minPolarAngle, _euler.x ) );

	this.camera.quaternion.setFromEuler( _euler ); 

}


function moveForward(distance) {
	//afaik the best algorithm is cross product
	const _direction = new Vector3();
	_direction.setFromMatrixColumn( this.camera.matrix, 0 );
	_direction.crossVectors( this.camera.up, _direction );

	this.camera.position.addScaledVector( _direction, distance );
}





export { PointerControls };
