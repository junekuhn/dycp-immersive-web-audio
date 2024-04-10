/* notes
Multi Channel Audio Elements not supported still as of 2024, must use buffersource

*/


import {
    Euler,
    Vector3,
    Audio
} from 'three'
import * as ambisonics from 'ambisonics';

const _euler = new Euler( 0, 0, 0, 'YXZ' );

class AmbisonicAudio extends Audio {

    constructor(listener, camera) {

        super(listener);

        this.listener = listener;
        this.camera = camera;
        this.context = this.listener.context;

        this.encoder = new ambisonics.monoEncoder(this.context, 1);

        //set what filter is doing updates with camera
        this.panner = "Encoder"
        
        console.log(this.gain)

    }

    update() {
        if(this.panner === "Encoder") {
            this.encoder.azim = -_euler.y * 180 / Math.PI;
            this.encoder.elev = _euler.x * 180 / Math.PI;
            this.encoder.updateGains();
        } else if (this.panner === "Rotator") {
            this.rotator.yaw = -angleXY[0];
            this.rotator.pitch = angleXY[1];
            this.rotator.updateRotMtx();
        }
    }

}

export { AmbisonicAudio };