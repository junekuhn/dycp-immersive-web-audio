import "./init.js";
import * as THREE from 'three'
import { MouseOnlyControls } from "../../controls/MouseOnlyControls.js";
import { KeyboardAccessControls } from "../../controls/KeyboardAccessControls.js";
import { TouchAccessControls } from "../../controls/TouchAccessControls.js";
import { GamepadAccessControls } from "../../controls/GamepadAccessControls.js";
import { state, actions } from './state.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

import volumeFragmentShader from '../glsl/volumeFragment.glsl';
import volumeVertexShader from '../glsl/volumeVertex.glsl'


/**
 * Constants
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }
const listenerPositions = [
    new THREE.Vector3(0,5,0),
    new THREE.Vector3(3,5,-3),
    new THREE.Vector3(-3,5,3),
]
const audioPositions = [
    new THREE.Vector3(2,5,1),
    new THREE.Vector3(3,5,-5),
    new THREE.Vector3(4,5,-2),
    new THREE.Vector3(-3,5,-5),
]
let sounds = [];

let scene, camera,
  controls, keyboardControls, touchControls, xbox,
  materials = [], analysers = [],
  enterScene, exitScene;

const average = array => array.reduce((a, b) => a + b) / array.length;
// Canvas
const canvas = document.querySelector('canvas.webgl')
const hod = document.querySelector("#scene-info");
const splash = document.querySelector("#play");

export function initPositionalScene() {

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
  camera.position.copy( listenerPositions[state.positionIndex] )
  scene.add(camera)

  // Controls, is it canvas or document.body?
  controls = new MouseOnlyControls(camera, document.body);
  keyboardControls = new KeyboardAccessControls(camera, document.body);
  touchControls = new TouchAccessControls(camera, document.body);
  touchControls.forwardMovementEnabled = true;

  xbox = new GamepadAccessControls(camera);

  enterScene = () => {
    hod.style.display = 'none';
    keyboardControls.sceneActive = true;
    if(sounds.length < 1) {
        // create the PositionalAudio object (passing in the listener)
        audioPositions.map((soundPosition, i) => {
            const sound = new THREE.PositionalAudio(listener) 
            sounds.push( sound );

            const analyser = new THREE.AudioAnalyser(sound)
            analysers.push(analyser)

            const sphere = new THREE.SphereGeometry( 10, 32, 16 );

            const material1 = new THREE.ShaderMaterial({
              vertexShader: volumeVertexShader,
              fragmentShader: volumeFragmentShader,
              uniforms: {
                volume: { value: 0 }
              },
              transparent: true,
              side: THREE.FrontSide
            })

            materials.push(material1);

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
    } else {
      sounds.map((sound, i) => {
        const songElement = document.getElementById( `sample${i}` ); 
        songElement.play();
      })
    }
  }
exitScene = () => {
    hod.style.display = 'block';
    keyboardControls.sceneActive = false;
    sounds.map((sound, i) => {
      const songElement = document.getElementById( `sample${i}` );
      songElement.pause();
    })
  }

  const nextPosition = () => {

    if(touchControls.tabularMovement) {

      state.positionIndex++;

      if (state.positionIndex > listenerPositions.length-1) {
          state.positionIndex = 0;
      }

      camera.position.copy ( listenerPositions[ state.positionIndex ] );

    } else {
      console.error("Set Discrete Positions First")
    }
  }
  //teleport if top, exit if bottom
  touchControls.setDoubleTap(nextPosition, exitScene);
  keyboardControls.setTab(nextPosition);
  controls.setDblClick(nextPosition);
  xbox.bButton = nextPosition;

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    touchControls.enabled = true;
  }

  
  const light = new THREE.DirectionalLight( 0xffffff, 3 );
  light.position.set( 0, 0.5, 1 ).normalize();
  scene.add( light );

  const ambient = new THREE.AmbientLight( 0xffffff, 0.7 );
  scene.add( ambient );

  const helper = new THREE.GridHelper( 100, 20, 0xffffff, 0xffffff );
  helper.position.y = 3;
  scene.add( helper );



  xbox.forwardMovementEnabled = true;
  const gamepadElement = document.querySelector('#gamepads');
  const updateUI = (flag) => {
    if (flag) {
      gamepadElement.innerHTML = "Gamepad Connected"
    } else {
      gamepadElement.innerHTML = "Gamepad Disconnected"
    }
  }
  window.addEventListener("gamepadconnected", () => updateUI(true));
  window.addEventListener("gamepaddisconnected", () => updateUI(false) );



  splash.addEventListener('click', () => {
    if(touchControls.enabled) {
      touchControls.isLocked = true;
      enterScene();
    } else {
      controls.lock();
      controls.addEventListener('lock', enterScene)
      controls.addEventListener('unlock', exitScene);
      scene.add( controls.getObject() );
    }
  })

  //the exception to keyboard controls, 
  window.addEventListener('keydown', (e) => {
    if(e.code === "Escape") {
      exitScene();
    }
  })


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

const clock = new THREE.Clock();
let prevVolumes = [0,0,0,0];

export function renderPositionalScene() 
{
    controls.update();
    keyboardControls.update();
    touchControls.update();
    xbox.update();

    //analyse volume manually because three.js hasn't implemented this yet
    sounds.map((sound, i) => {
      analysers[i].analyser.getByteTimeDomainData(analysers[i].data)
      const volumeValue = average(analysers[i].data) - 127;
      
      //slewing
      const dist = volumeValue - prevVolumes[i];
      materials[i].uniforms.volume.value = prevVolumes[i] + dist * 0.05;
      prevVolumes[i] = prevVolumes[i] + dist * 0.05 ;
    })


    
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(renderPositionalScene)


}







