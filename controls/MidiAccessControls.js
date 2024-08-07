import {
    Vector3,
    Vector2,
    Euler
} from 'three';

//to map
// up down left right
// teleport, move forward

const _euler = new Euler(0,0,0,'YXZ');

class MIDIAccessControls {
    constructor(camera, domElement) {

        this.midiAccess = null;
        this.inputs = [];
        this.outputs = [];

        this.camera = camera;
        this.domElement = domElement;
        this.lookSpeed = 0.03;
        this.moveSpeed = 0.02;
        this.cameraHeight  = 0;
        this.prevCameraHeight = 0;

        this.move = new Vector2(0,0);

        this.forwardMovementEnabled = false;
        this.moveForward = false;

        this.minPolarAngle = 0;
        this.maxPolarAngle = Math.PI;
    }

    // Initialize the MIDI system
    async init() {
        if (navigator.requestMIDIAccess) {
            try {
                this.midiAccess = await navigator.requestMIDIAccess();
                this._onMIDISuccess(this.midiAccess);

            } catch (error) {
                this._onMIDIFailure(error);
            }
        } else {
            console.error("Web MIDI API is not supported in this browser.");
        }


    }

    // Handle successful MIDI access
    _onMIDISuccess(midiAccess) {
        console.log("MIDI ready!");
        this.inputs = Array.from(midiAccess.inputs.values());
        this.outputs = Array.from(midiAccess.outputs.values());
        this._logDevices();

        const inputDevices = this.getInputDeviceNames();
        if (inputDevices.length > 0) {
            this.addInputListener(inputDevices[0], (message) => this.onMidiMessage(message));
        }
    }

    // Handle MIDI access failure
    _onMIDIFailure(error) {
        console.error("Failed to get MIDI access - " + error);
    }

    // Log MIDI devices
    _logDevices() {
        console.log("MIDI Inputs:");
        this.inputs.forEach(input => {
            console.log(input.name);
        });

        console.log("MIDI Outputs:");
        this.outputs.forEach(output => {
            console.log(output.name);
        });
    }

    // Get a list of input device names
    getInputDeviceNames() {
        return this.inputs.map(input => input.name);
    }

    // Get a list of output device names
    getOutputDeviceNames() {
        return this.outputs.map(output => output.name);
    }

    // Add an event listener to a MIDI input
    addInputListener(deviceName, callback) {
        const input = this.inputs.find(input => input.name === deviceName);
        if (input) {
            input.onmidimessage = callback;
        } else {
            console.warn(`No input device found with name ${deviceName}`);
        }
    }

    update() {

        //lookspeed has to be calculated here
        _euler.setFromQuaternion( this.camera.quaternion );
        _euler.y += this.move.x * this.moveSpeed;
        _euler.x += this.move.y * this.moveSpeed * 0.5;
        _euler.x = Math.max( Math.PI/2 - this.maxPolarAngle, Math.min( Math.PI/2 - this.minPolarAngle, _euler.x ) );

  
        this.camera.quaternion.setFromEuler( _euler ); 

    
        const direction = new Vector3();
        this.camera.getWorldDirection( direction );


        
        //detect vertical zero crossing for vibration feedback
        this.cameraHeight = direction.y 

        // set previous
        this.prevCameraHeight = this.cameraHeight;


        if(this.moveForward && this.forwardMovementEnabled) {


          //neutralize y
          direction.y = 0;
    
          this.camera.position.add( direction.multiplyScalar( this.forwardSpeed ) );
      }
    }

    onMidiMessage(message) {

        // mappings\        // Add an event listener to a specific input device (if available)
            // looking for cc value
            if(message.data[0] == 176) {
                switch (message.data[1]) {
                    case 111:
                        //up
                        this.move.y = parseFloat(message.data[2]) / 128
                        break;
                    case 112:
                        // up right
                        this.move.y = parseFloat(message.data[2]) / 128
                        this.move.x = -parseFloat(message.data[2]) / 128
                        break;
                    case 113:
                        // right
                        this.move.x = -parseFloat(message.data[2]) / 128
                        break;
                    case 114:
                        // down right
                        this.move.y = -parseFloat(message.data[2]) / 128
                        this.move.x = -parseFloat(message.data[2]) / 128
                    case 115:
                        //down 
                        this.move.y = -parseFloat(message.data[2]) / 128;
                        break;
                    case 116:
                        // down left
                        this.move.y = -parseFloat(message.data[2]) / 128;
                        this.move.x = -parseFloat(message.data[2]) / 128;
                    case 117:
                        //left
                        this.move.x = parseFloat(message.data[2]) / 128;
                        break;
                    case 118:
                        // up left 
                        this.move.y = parseFloat(message.data[2]) / 128;
                        this.move.x = parseFloat(message.data[2]) / 128;
                        break;
                    case 21:
                        // left button - move
                        this.moveForward = !this.moveForward;
                    case 22:
                        // right button - next position

                    default:
                        break;
    
                }

            }
    }



    onTab(e, callback) {
        //for setting remotely
    }

    
}

export { MIDIAccessControls };