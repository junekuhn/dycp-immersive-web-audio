import {
    Vector3,
    Vector2,
    Euler
} from 'three';

const _euler = new Euler( 0, 0, 0, 'YXZ' );
const _direction = new Vector3();

class GamepadAccessControls {
    constructor(camera) {
        this.supported = (navigator.webkitGetGamepads && navigator.webkitGetGamepads()) ||
          !!navigator.webkitGamepads || !!navigator.mozGamepads ||
          !!navigator.msGamepads || !!navigator.gamepads ||
          (navigator.getGamepads && navigator.getGamepads());

        this.camera = camera;
        this.gamepadSpeed = 0.015;
        this.ticking = false;

        this.cameraHeight = 0, this.prevCameraHeight = 0;

        this.minPolarAngle = Math.PI*1/4;
        this.maxPolarAngle = Math.PI*3/4;

        this.state = 0;
        //can be left or right
        this.joystickSelect = "left"
        
        this.left = new Vector2(0,0);
        this.right = new Vector2(0,0);
    
        // Recommended deadzones for Xbox One controller
        this.RIGHT_AXIS_THRESHOLD   = 7849 / 32767.0;
        this.LEFT_AXIS_THRESHOLD    = 8689 / 32767.0;
        this.TRIGGER_AXIS_THRESHOLD = 30   / 32767.0;
        this.SPACEMOUSE_THRESHOLD = 5 / 32767.0;
    
        this.gamepads = [];
        this.prevRawGamepadTypes = [];
        this.prevTimestamps = [];

        this.buttons = new Array(17).fill({pressed: false});
        this.buttonsUp = [];

        this.bButton;
        this.xButton;
        this.startButton;
        this.previousB = 0;
        this.previousX = 0;
        this.previousStart = 0;

        this.aButtonValue = 0;
        this.bButtonValue = 1;
        this.xButtonValue = 2;
        this.startButtonValue = 9;

        this.forwardMovementEnabled = false;
        this.forwardSpeed = 0.01;
        
        this.needsUpdate = false;
    
        this.init();
      }

      init() {
        if (this.supported) {
          // Older Firefox 
          window.addEventListener('MozGamepadConnected', (e) => this.onGamepadConnect(e), false);
          window.addEventListener('MozGamepadDisconnected', (e) => this.onGamepadDisconnect(e), false);
    
          //W3C Specification
          window.addEventListener('gamepadconnected', (e) => this.onGamepadConnect(e), false);
          window.addEventListener('gamepaddisconnected', (e) => this.onGamepadDisconnect(e), false);
    
          // Chrome
          if (navigator.webkitGetGamepads && navigator.webkitGetGamepads()) {
            this.startPolling();
          }
    
        } else {
          console.error('Gamepad API not supported or not detected!');
        }
      }

      startPolling() {
        console.log('Controller Connected!');



        if (!this.ticking) {
          this.ticking = true;
          this.update();
        }
      }
      
      stopPolling() {
        console.log('Controller Disconnected!');
        this.ticking = false;
      }
      
      // Called externally
      update() {
        this.pollStatus();

        this.camera.getWorldDirection(_direction)
        this.cameraHeight = _direction.y;

        if (this.ticking) {
          this.pollJoysticks();
          this.pollButtons();
          //requestAnimationFrame(() => this.tick());
          _euler.setFromQuaternion( this.camera.quaternion );
        
          if(this.joystickSelect === "left") {
            _euler.y -= this.left.x * this.gamepadSpeed;
            _euler.x -= this.left.y * this.gamepadSpeed * 0.5;
            _euler.x = Math.max( Math.PI/2 - this.maxPolarAngle, Math.min( Math.PI/2 - this.minPolarAngle, _euler.x ) );
          } else if (this.joystickSelect === "right") {
            _euler.y -= this.right.x * this.gamepadSpeed;
            _euler.x -= this.right.y * this.gamepadSpeed * 0.5;
            _euler.x = Math.max( Math.PI/2 - this.maxPolarAngle, Math.min( Math.PI/2 - this.minPolarAngle, _euler.x ) );
          }


          //detect zero crossing for vibration
          if((this.cameraHeight > 0 && this.prevCameraHeight < 0) 
            || (this.cameraHeight < 0 && this.prevCameraHeight > 0)) {
              console.log("vibrate")
              console.log(this.gamepads[0].vibrationActuator)
              this.gamepads[0].vibrationActuator.playEffect("dual-rumble", {
                startDelay: 0,
                duration: 100,
                weakMagnitude: 1.0,
                strongMagnitude: 1.0,
              });
            }
          this.camera.quaternion.setFromEuler( _euler ); 
          this.prevCameraHeight = this.cameraHeight;
      
        }
      }
      
      pollStatus() {
        this.pollGamepads();
        for (let i in this.gamepads) {
          let gamepad = this.gamepads[i];
          if (gamepad.timestamp && (gamepad.timestamp === this.prevTimestamps[i])) {
            continue;
          }
          this.prevTimestamps[i] = gamepad.timestamp;
        }
      }
      
      pollGamepads() {
        let rawGamepads = (navigator.webkitGetGamepads && navigator.webkitGetGamepads()) ||
            navigator.webkitGamepads || navigator.mozGamepads ||
            navigator.msGamepads || navigator.gamepads || 
            (navigator.getGamepads && navigator.getGamepads());
        if (rawGamepads) {
          this.gamepads = [];
          for (let i = 0, max = rawGamepads.length; i < max; i++) {
            if (typeof rawGamepads[i] !== this.prevRawGamepadTypes[i]) {
              this.prevRawGamepadTypes[i] = typeof rawGamepads[i];
            }
            if (rawGamepads[i]) {
              this.gamepads.push(rawGamepads[i]);
            }
          }
        }
      }
      
      pollJoysticks() {
        let pad = 0;
        
        // Reset all input to 0
        this.left = new Vector2(0,0);
        this.right = new Vector2(0,0);
        
        if (this.gamepads[pad]) {
          
          let leftX  = this.gamepads[pad].axes[0];
          let leftY  = this.gamepads[pad].axes[1]; 
          let rightX  = this.gamepads[pad].axes[2]; 
          
          let rightY = this.gamepads[pad].axes[3]; 
          
          if (leftX < -this.SPACEMOUSE_THRESHOLD ||
              leftX > this.SPACEMOUSE_THRESHOLD) {
            this.left.x = leftX;
          }
          
          if (leftY < -this.SPACEMOUSE_THRESHOLD ||
              leftY > this.SPACEMOUSE_THRESHOLD) {
            this.left.y = leftY;
          }
    
          if (rightX < -this.SPACEMOUSE_THRESHOLD ||
              rightX > this.SPACEMOUSE_THRESHOLD) {
            this.right.x = rightX;
          }
    
          if (rightY < -this.SPACEMOUSE_THRESHOLD ||
              rightY > this.SPACEMOUSE_THRESHOLD) {
            this.right.y = rightY;
          }

        }
      }

      pollButtons() {
        const buttonPressedArray = this.gamepads[0].buttons
        const dPadUp = 12, dPadDown = 13, dPadLeft = 14, dPadRight = 15;

        this.camera.getWorldDirection( _direction );

        buttonPressedArray.map((button, i) => {
          //look for a change of state to off 
          //comparing previous to current
          if(!button || !this.buttons)

          if(!button.pressed && this.buttons[i].pressed ) {
            this.buttonsUp[i] = true;
          } else {
            this.buttonsUp[i] = false;
          }
        })


        this.buttons = buttonPressedArray;
        let currentButtons = this.gamepads[0].buttons;

        if (this.forwardMovementEnabled) {
          const aButtonPressed = currentButtons[this.aButtonValue].pressed;
          if (aButtonPressed){
            this.moveForward(this.forwardSpeed)
          }


          //teleport B button if previous was 0
          if(currentButtons[this.bButtonValue].pressed && this.previousB == 0) {

            this.bButton();
            this.needsUpdate = true;
            this.previousB = 1;

          } else if (!currentButtons[this.bButtonValue].pressed) {

            this.previousB = 0;

          } 
          //X
          if(currentButtons[this.xButtonValue].pressed && this.previousX === 0) {

            this.xButton();
            this.needsUpdate = true;
            this.previousX = 1;
          } else if(!currentButtons[this.xButtonValue].pressed) {
            this.previousX = 0;
          }

          if(currentButtons[this.startButtonValue].pressed && this.previousStart == 0) {
            this.startButton();
            this.previousStart = 1;
          } else if(!currentButtons[this.startButtonValue].pressed) {
            this.previousStart = 0;
          }

          // console.log(currentButtons)

          // D Pad actions
          if(currentButtons[dPadUp].pressed) {
            this.left.y = -1;
          } else if (currentButtons[dPadDown].pressed) {
            this.left.y = 1;
          } else if (currentButtons[dPadLeft].pressed) {
            this.left.x = -1;
          } else if (currentButtons[dPadRight].pressed) {
            this.left.x = 1;
          }
        }
      }

      moveForward(distance) {
        //afaik the best algorithm is cross product
        _direction.setFromMatrixColumn( this.camera.matrix, 0 );
        _direction.crossVectors( this.camera.up, _direction );

        this.camera.position.addScaledVector( _direction, distance );
      }
      
      onGamepadConnect(event) {
        
        let gamepad = event.gamepad;
        this.gamepads[event.gamepad.id] = gamepad;
        this.startPolling();
      }

      setBButton(callback, state) {
        this.bButton = () => {
          console.log(callback, state)
          callback(state)
        }
      }

      setXButton(callback, state) {
        this.xButton = () => {
          callback(state)
        }
      }

      setStartButton(callback, state) {
        this.startButton = () => {
          callback(state)
        }
      }
      
      onGamepadDisconnect(event) {
        this.gamepads[event.gamepad.id] = null;
        if (this.gamepads.length === 0) {
          this.stopPolling();
        }
      }
}

export { GamepadAccessControls };