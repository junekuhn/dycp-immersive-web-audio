import "./js/init.js";
import * as THREE from 'three'
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import GUI from 'lil-gui'
import Gamepad from './js/gamepad.js';
import { state } from './js/state.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

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
    new THREE.Vector3(0,0,0),
    new THREE.Vector3(3,0,-3),
    new THREE.Vector3(-3,0,3),
]
const audioPositions = [
    new THREE.Vector3(5,5,0),
    new THREE.Vector3(-5,5,0),
    new THREE.Vector3(0,5,5),
    new THREE.Vector3(0,5,-5),
]
const sounds = [];

let soundBuffer, sound, context;
let UpArrowDown = false, LeftArrowDown = false, DownArrowDown = false, RightArrowDown = false;

// Canvas
const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 5, 0)
scene.add(camera)

// Controls, is it canvas or document.body?
const controls = new PointerLockControls(camera, document.body)
const splash = document.querySelector("#splash");

const light = new THREE.DirectionalLight( 0xffffff, 3 );
light.position.set( 0, 0.5, 1 ).normalize();
scene.add( light );

const helper = new THREE.GridHelper( 1000, 10, 0x444444, 0x444444 );
helper.position.y = 4;
scene.add( helper );

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
            mesh1.position.set( soundPosition);
            mesh1.scale.set(5,5,5)
            scene.add( mesh1 );

            const songElement = document.getElementById( `sample${i}` );

            sound.setMediaElementSource( songElement );
            sound.setRefDistance( 20 );
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
    const euler = new THREE.Euler( 0, 0, 0, 'YXZ' );

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)


}

tick()





