import "./js/init.js";
import * as THREE from 'three'
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import GUI from 'lil-gui'
import Gamepad from './js/gamepad.js';
import { state, actions } from './js/state.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { PositionalAudioHelper } from 'three/examples/jsm/helpers/PositionalAudioHelper.js';
import { modeq } from "numeric";


let TouchControls = {
    enabled: false,
    isLocked: false,
  }



/**
 * Constants
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }
const soundUrl = "sounds/sample2.wav";
const listenerPositions = [
    new THREE.Vector3(0,5,0),
    new THREE.Vector3(3,5,-3),
    new THREE.Vector3(-3,5,3),
]
const audioPositions = [
    new THREE.Vector3(5,5,0),
    new THREE.Vector3(-5,5,0),
    new THREE.Vector3(0,5,5),
    new THREE.Vector3(0,5,-5),
]
const sounds = [];
const modeSelect = document.querySelector("#whichMode");
let moveForward = false;

let soundBuffer, sound, context;
let UpArrowDown = false, LeftArrowDown = false, DownArrowDown = false, RightArrowDown = false;

// Canvas
const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.copy( listenerPositions[state.positionIndex] )
scene.add(camera)

// Controls, is it canvas or document.body?
const controls = new PointerLockControls(camera, document.body)
const splash = document.querySelector("#splash");

const light = new THREE.DirectionalLight( 0xffffff, 3 );
light.position.set( 0, 0.5, 1 ).normalize();
scene.add( light );

const helper = new THREE.GridHelper( 1000, 10, 0xfff, 0xfff );
helper.position.y = 4;
scene.add( helper );

const xbox = new Gamepad();
const gamepadElement = document.querySelector('#gamepads');
const joystickSelect = document.querySelector('#whichJoystick');
const updateUI = () => {
  gamepadElement.innerHTML = xbox.gamepads
  console.log(xbox.gamepads)
}
window.addEventListener("gamepadconnected", updateUI);

const enterScene = () => {
    splash.style.display = 'none';

    if(sounds.length < 1) {
        // create the PositionalAudio object (passing in the listener)
        audioPositions.map((soundPosition, i) => {
            const sound = new THREE.PositionalAudio(listener) 
            sounds.push( sound );

            const sphere = new THREE.SphereGeometry( 20, 32, 16 );

            const material1 = new THREE.MeshPhongMaterial( { color: 0xffaa00, flatShading: true, shininess: 0 } );

            const mesh1 = new THREE.Mesh( sphere, material1 );
            mesh1.position.set( soundPosition.x, soundPosition.y, soundPosition.z );
            mesh1.scale.set(.05,.05,.05)
            scene.add( mesh1 );

            const songElement = document.getElementById( `sample${i}` );

            sound.setMediaElementSource( songElement );
            sound.setRefDistance( 0.5 );
            songElement.play();
            
            mesh1.add( sound );
        })
    }
  }
  const exitScene = () => {
    splash.style.display = 'block';
  }
splash.addEventListener('click', () => {
    if(TouchControls.enabled) {
      TouchControls.isLocked = true;
      enterScene();
    } else {
      controls.lock();
      controls.addEventListener('lock', enterScene)
      controls.addEventListener('unlock', exitScene);
      scene.add( controls.getObject() );
    }
  })

// load a sound and set it as the PositionalAudio object's buffer
const audioLoader = new THREE.AudioLoader();

  // create an AudioListener and add it to the camera
const listener = new THREE.AudioListener();
camera.add( listener );

//font
const fontLoader = new FontLoader()
fontLoader.load('./fonts/Mukta_Bold.json',
    (font) =>
    {
        const texts = new THREE.Group();
        const textSettings = {
          font: font,
          size: 0.5,
          depth: 0.2,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.03,
          bevelSize: 0.02,
          bevelOffset: 0,
          bevelSegments: 5
      }
      const zeroGeometry = new TextGeometry('0°', textSettings).center();
      const ninetyGeometry = new TextGeometry('90°', textSettings).center();
      const oneEightyGeometry = new TextGeometry('180°', textSettings).center();
      const twoSeventyGeometry = new TextGeometry('270°', textSettings).center();
      const textMaterial = new THREE.MeshBasicMaterial()
      const zeroDeg = new THREE.Mesh(zeroGeometry, textMaterial)
      const ninetyDeg = new THREE.Mesh(ninetyGeometry, textMaterial);    
      const oneEightyDeg = new THREE.Mesh(oneEightyGeometry, textMaterial);
      const twoSeventyDeg = new THREE.Mesh(twoSeventyGeometry, textMaterial);
      zeroDeg.position.set(0, 5, -5);
      ninetyDeg.position.set(-5, 5, 0);
      ninetyDeg.rotation.y = Math.PI/2;
      oneEightyDeg.position.set(0, 5, 5);
      oneEightyDeg.rotation.y = Math.PI;
      twoSeventyDeg.position.set(5, 5, 0);
      twoSeventyDeg.rotation.y = -Math.PI/2
      texts.add(zeroDeg);
      texts.add(ninetyDeg);
      texts.add(oneEightyDeg);
      texts.add(twoSeventyDeg);
      scene.add(texts)
    }
)

const nextPosition = () => {
    // In VR when you teleport, it's instant, no fade in fade out
    actions.increment();

    if (state.positionIndex > listenerPositions.length) {
        state.positionIndex = 0;
    }

    camera.position.copy ( listenerPositions[ state.positionIndex ] );
}


document.addEventListener('keydown', (e) => {

    //if locked
    if (controls.isLocked) e.preventDefault();

    if(modeSelect.value == "tab") {
        //esc key still allows for unlock
        switch(e.code) {
            case "Tab":
                nextPosition();
                break;
            default:
                break;
        }
    } else if (modeSelect.value == "move") {
        switch(e.code) {
            case "Space":
                moveForward = true;
                break;
        }
    }
})

document.addEventListener('keyup', (e) => {

    switch(e.code) {
        case "Space":
            moveForward = false;
            break;
        default:
            break;
    }
})

document.addEventListener('mousedown', () => {
    if(controls.isLocked) {
        moveForward = true;
    }
});

document.addEventListener('mouseup', () => {
    moveForward = false;
});

/* Based on this http://jsfiddle.net/brettwp/J4djY/*/
function detectDoubleTapClosure() {
    let lastTap = 0;
    let timeout;
    return function detectDoubleTap(event) {
      const curTime = new Date().getTime();
      const tapLen = curTime - lastTap;
      if (tapLen < 500 && tapLen > 0) {
        console.log('Double tapped!');
        nextPosition();
        event.preventDefault();
      } else {
        timeout = setTimeout(() => {
          clearTimeout(timeout);
        }, 500);
      }
      lastTap = curTime;
    };
  }
  
  /* Regex test to determine if user is on mobile */
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.body.addEventListener('touchend', detectDoubleTapClosure(), { passive: false });
  }






/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const tick = () =>
{
    const lookEuler = new THREE.Euler( 0, 0, 0, 'YXZ' );
    const speed = 0.02;

    //if moveforward, then move along XZ plane in direction of camera
    if(moveForward) {
        const direction = new THREE.Vector3();
        camera.getWorldDirection( direction );
        //neutralize y
        direction.y = 0;
        camera.position.add( direction.multiplyScalar( speed ) );
    }

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)


}

tick()





