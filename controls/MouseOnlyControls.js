import {
	Euler,
	EventDispatcher,
	Vector3,
	Controls
} from 'three';

const _euler = new Euler( 0, 0, 0, 'YXZ' );
const _vector = new Vector3();

const _changeEvent = { type: 'change' };
const _lockEvent = { type: 'lock' };
const _unlockEvent = { type: 'unlock' };

const _PI_2 = Math.PI / 2;

class MouseOnlyControls extends Controls {

	constructor( camera, domElement ) {

		super();

		this.camera = camera;
		this.domElement = domElement;

		this.isLocked = false;

		// Set to constrain the pitch of the camera
		// Range is 0 to Math.PI radians
		this.minPolarAngle = 0; // radians
		this.maxPolarAngle = Math.PI; // radians

		this.rotationSpeed = 1.0;

        this.movementEnabled = true;
        this.movingForward = false;
        this.distance = 0.02;

		this.domElement.ownerDocument.addEventListener( 'mousemove', this.onMouseMove.bind(this) );
		this.domElement.ownerDocument.addEventListener( 'pointerlockchange', this.onPointerlockChange.bind(this) );
		this.domElement.ownerDocument.addEventListener( 'pointerlockerror', this.onPointerlockError.bind(this) );
        this.domElement.ownerDocument.addEventListener( 'mousedown' , this.onMouseDown.bind(this) );
        this.domElement.ownerDocument.addEventListener( 'mouseup', this.onMouseUp.bind(this) );

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

	setDblClick(callback) {
		window.addEventListener( 'dblclick' , (e) => this.onDblClick(e, callback));
	}

	lock() {

		this.domElement.requestPointerLock();

	}

	unlock() {

		this.domElement.ownerDocument.exitPointerLock();

	}

    update() {

        if(this.movingForward && this.movementEnabled) {

            this.moveForward( this.distance );

        }
    }

	onDblClick (e, callback) {
		if (this.isLocked) {
			e.preventDefault;
			callback();
		}
	}

	// event listeners

onMouseDown() {

    if (this.isLocked === false) return;

    this.movingForward = true;

    this.dispatchEvent( _changeEvent );

}

onMouseUp() {

    if (this.isLocked === false ) return;

    this.movingForward = false;

    this.dispatchEvent( _changeEvent );
}

onMouseMove( event ) {

	if ( this.isLocked === false ) return;

	const movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
	const movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

	// const camera = this.camera;
	_euler.setFromQuaternion( this.camera.quaternion );

	_euler.y -= movementX * 0.002 * this.rotationSpeed;
	_euler.x -= movementY * 0.002 * this.rotationSpeed;

	_euler.x = Math.max( _PI_2 - this.maxPolarAngle, Math.min( _PI_2 - this.minPolarAngle, _euler.x ) );

	this.camera.quaternion.setFromEuler( _euler );

	this.dispatchEvent( _changeEvent );

}

onPointerlockChange() {

	if ( this.domElement.ownerDocument.pointerLockElement === this.domElement ) {

		this.dispatchEvent( _lockEvent );

		this.isLocked = true;

	} else {

		this.dispatchEvent( _unlockEvent );

		this.isLocked = false;

	}

}

onPointerlockError() {

	console.error( 'THREE.MouseOnlyControls: Unable to use Pointer Lock API' );

}



  onContextMenu(event) {

	if(this.isLocked === true) {
		this.unlock();
	}

  }

}



export { MouseOnlyControls };
