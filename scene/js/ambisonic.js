import "./init.js";
import * as THREE from 'three'
import { MouseOnlyControls } from "../../controls/MouseOnlyControls.js";
import { KeyboardAccessControls } from "../../controls/KeyboardAccessControls.js";
import { GamepadAccessControls } from "../../controls/GamepadAccessControls.js";
import { TouchAccessControls } from "../../controls/TouchAccessControls.js";
import { AmbisonicAudio } from "../../controls/AmbisonicAudio.js";
import * as ambisonics from 'ambisonics';

import { gsap } from 'gsap'

import { state } from './state.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

import intensityVertexShader from '../glsl/intensityVertex.glsl'
import intensityFragmentShader from '../glsl/intensityFragment.glsl'



let sphereMat, circleArray, keyboardControls, 
  controls, touchControls, xbox;

  const soundUrl = "./sounds/sample2.wav";
  const irUrl = "./IRs/ambisonic2binaural_filters/aalto2016_N1.wav";
  const ambiIrUrl = "./IRs/ambisonicRIRs/room_1_bf.wav";
  const imageUrl = "./images/arrow.png"

  const maxOrder = 1;
  let soundBuffer, sound, context, camera, scene;
  let mirror, decoder, analyser, gainOut, encoder, convolver, converter, rotator;
  let numCircles = 30, intensityArray;
  let enterScene, exitScene
 
export function initAmbisonicScene() {

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
  camera.position.set(0, 5, 0)
  scene.add(camera)


// Controls, is it canvas or document.body?
 controls = new MouseOnlyControls(camera, document.body)
 keyboardControls = new KeyboardAccessControls(camera, document.body);
 touchControls = new TouchAccessControls(camera, document.body);
const splash = document.querySelector("#play");
const hod = document.querySelector("#scene-info");

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  touchControls.enabled = true;
}

const listener = new THREE.AudioListener();
camera.add(listener);
const ambisonicAudio = new AmbisonicAudio(listener, camera)

initAmbisonicScene.initAmbisonics = (e) => {
  
    e.stopPropagation();
  
    // Setup audio context and variables
    var AudioContext = window.AudioContext // Default
    || window.webkitAudioContext; // Safari and old versions of Chrome
    context = new AudioContext; // Create and Initialize the Audio Context
  
      // added resume context to handle Firefox suspension of it when new IR loaded
    // see: http://stackoverflow.com/questions/32955594/web-audio-scriptnode-not-called-after-button-onclick
    context.onstatechange = function() {
      if (context.state === "suspended") { context.resume(); }
    }
  
  // load and assign samples
  audioLoader.load(soundUrl, assignSample2SoundBuffer, undefined, onDecodeAudioDataError);
  audioLoader.load(irUrl, assignSample2Filters, undefined, onDecodeAudioDataError);
  audioLoader.load(ambiIrUrl, assignSample2Convolver, undefined, onDecodeAudioDataError);
  
    // initialize encoder
    encoder = new ambisonics.monoEncoder(context, 1);
    console.log(encoder);
      // initialise encoder (convolver really)
    convolver = new ambisonics.convolver(context, maxOrder);
    console.log(convolver);
    // FuMa to ACN converter
  converter = new ambisonics.converters.wxyz2acn(context);
  console.log(converter);
  rotator = new ambisonics.sceneRotator(context, maxOrder);
  console.log(rotator);
    // initialize mirroring
    mirror = new ambisonics.sceneMirror(context, 1);
    console.log(mirror);
    // initialize decoder
    decoder = new ambisonics.binDecoder(context, 1);
    console.log(decoder);
    // initialize intensity analyser
    analyser = new ambisonics.intensityAnalyser(context);
    console.log(analyser);
    // output gain
    gainOut = context.createGain();
  
  // connect graph
  convolver.out.connect(converter.in);
  converter.out.connect(mirror.in);
    mirror.out.connect(rotator.in);
    rotator.out.connect(decoder.in);
    rotator.out.connect(analyser.in);
    decoder.out.connect(gainOut);
    gainOut.connect(context.destination);
  
}

const overlayGeometry = new THREE.PlaneGeometry(2, 2, 1, 1)
const overlayMaterial = new THREE.ShaderMaterial({
  transparent: true,
  side: THREE.DoubleSide,
  fragmentShader: `
  uniform float uAlpha;

  void main()
  {
      gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
  }
`,
  vertexShader: `
  void main()
  {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,
uniforms: {
  uAlpha: { value: 0.5 }
},
})

const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial)
overlay.position.set(0,5,-0.5)
scene.add(overlay)

const loadingBarElement = document.querySelector(".loading-bar")
const loadingManager = new THREE.LoadingManager(
  // Loaded
  () =>
  {
    window.setTimeout(() =>
    {
        gsap.to(overlayMaterial.uniforms.uAlpha, { duration: 3, value: 0, delay: 1 })

        loadingBarElement.classList.add('ended')
        loadingBarElement.style.transform = ''
    }, 400)
  },

  // Progress
  (itemUrl, itemsLoaded, itemsTotal) =>
  {
      const progressRatio = itemsLoaded / itemsTotal;
      loadingBarElement.style.transform = `scaleX(${progressRatio})`;
  }
)
  
  //needs sound, state, context
  const createAndStartBuffer = () => {
    var offset = state.pausedAt;
  
    sound = context.createBufferSource();
    sound.buffer = soundBuffer;
    sound.loop = true;
    sound.connect(convolver.in);
    sound.start(0, offset);
    sound.isPlaying = true;
    state.playStart = context.currentTime - offset;
    state.pausedAt = 0;
    document.getElementById('play').disabled = true;
  }
  
  const pauseBuffer = () => {
    sound.isPlaying = false;
    var elapsed = context.currentTime - state.playStart;
    sound.stop();
    state.pausedAt = elapsed;
    document.getElementById('play').disabled = false;
  }
  

  initAmbisonicScene.loadButton = document.querySelector("#scene");
  initAmbisonicScene.loadButton.addEventListener("click", initAmbisonicScene.initAmbisonics)
  // hitting enter simulates a click
  
  enterScene = () => {
    hod.style.display = 'none';
    createAndStartBuffer();
  }
  exitScene = () => {
    hod.style.display = 'block'
    pauseBuffer();
  }
  const splashFunction =  () => {
    if(touchControls.enabled) {
      enterScene();
      touchControls.isLocked = true;
    } else {
      controls.lock();
      controls.addEventListener('lock', enterScene)
      controls.addEventListener('unlock', exitScene);
      scene.add( controls.getObject() );
    }
  }
  splash.addEventListener('click', splashFunction)

  //the exception to keyboard controls
  window.addEventListener('keydown', (e) => {
    if(e.code === "Escape") {
      exitScene();
    }
  })

  //do nothing if top, exit if bottom
touchControls.setDoubleTap(()=>{}, () => {
  exitScene();
})

circleArray = new Array(numCircles).fill(new THREE.Vector2(0, 0));
intensityArray = new Array(numCircles).fill(0);

const sphereGeom = new THREE.SphereGeometry(50, 100, 50);
sphereMat = new THREE.RawShaderMaterial({
  vertexShader: intensityVertexShader,
  fragmentShader: intensityFragmentShader,
  // wireframe: true,
  transparent: true,
  uniforms: {
    uIntensity: { value: intensityArray },
    uTime: { value: 0 },
    uCircle: { value: circleArray },
  },
  side: THREE.BackSide,
})
const intensityMesh = new THREE.Mesh(sphereGeom, sphereMat);
scene.add(intensityMesh);

//font
const fontLoader = new FontLoader(loadingManager)
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

xbox = new GamepadAccessControls(camera);
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

const toggleAudio = () => {
  if(context == null) {
    console.error("Context Not Started")
  };

  if(sound.isPlaying) {
    pauseBuffer();
  } else {
    createAndStartBuffer();
  }
} 

const planarGeometry = new THREE.PlaneGeometry(100, 100, 10, 10);
const planarMaterial = new THREE.MeshBasicMaterial({color: "white"});
const planarMesh = new THREE.Mesh(planarGeometry, planarMaterial);
planarMesh.position.set(0,0,2)
planarMesh.rotation.x = -Math.PI/2;

const audioLoader = new THREE.AudioLoader(loadingManager);

// function to assign sample to the sound buffer for playback (and enable playbutton)
var assignSample2SoundBuffer = function(decodedBuffer) {
  soundBuffer = decodedBuffer;
  document.getElementById('play').disabled = false;
}
// function to assign sample to the filter buffers for convolution
var assignSample2Filters = function(decodedBuffer) {
decoder.updateFilters(decodedBuffer);
}

// function to assign sample to the filter buffers for convolution
var assignSample2Convolver = function(decodedBuffer) {
  convolver.updateFilters(decodedBuffer);
}

// function called when audiocontext.decodeAudioData fails to decode a given audio file, e.g. in Safari with .ogg vorbis format
function onDecodeAudioDataError(error) {
  var url = 'hjre';
alert("Browser cannot decode audio data..." + "\n\nError: " + error + "\n\n(If you re using Safari and get a null error, this is most likely due to Apple's shady plan going on to stop the .ogg format from easing web developer's life :)");
}

}

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     // sizes.width = window.innerWidth
//     // sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = 1

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

  // Canvas
  const canvas = document.querySelector('canvas.webgl')

    /**
   * Constants
   */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
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

export function tick() {

    const elapsedTime = clock.getElapsedTime();

    // Update material
    // sphereMat.uniforms.uTime.value = elapsedTime;

    const euler = new THREE.Euler( 0, 0, 0, 'YXZ' );

    keyboardControls.update();
    xbox.update();
    touchControls.update();

    if(controls.isLocked) {
        euler.setFromQuaternion(camera.quaternion);
        rotator.yaw = -euler.y * 180 / Math.PI;
        rotator.pitch = euler.x * 180 / Math.PI;
        rotator.updateRotMtx();

    

    }

    if(analyser) {
      // Update audio analyser buffers
      analyser.updateBuffers();
      const params = analyser.computeIntensity();

      intensityArray.shift();
      intensityArray.push(Math.log(params[2]) / (-20))
      sphereMat.uniforms.uIntensity.value = intensityArray;
      //i want the reflection
      circleArray.shift();
      circleArray.push(new THREE.Vector2( -params[0]/360 + 0.5, -params[1]/180 + 0.5 ));
      sphereMat.uniforms.uCircle.value = circleArray;
    }
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)

}




