import "../_positionalScene/js/init.js";
import * as THREE from 'three'
import { MouseOnlyControls } from "../controls/MouseOnlyControls.js";
import { KeyboardAccessControls } from "../controls/KeyboardAccessControls.js";
import { GamepadAccessControls } from "../controls/GamepadAccessControls.js";
import { TouchAccessControls } from "../controls/TouchAccessControls.js";
import { AmbisonicAudio } from "../controls/AmbisonicAudio.js";
import GUI from 'lil-gui'
import * as ambisonics from 'ambisonics';
import Gamepad from '../_positionalScene/js/gamepad.js';

import { state } from '../_positionalScene/js/state.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'



/**
 * Constants
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const soundUrl = "sounds/sample2.wav";
const irUrl = "IRs/ambisonic2binaural_filters/aalto2016_N1.wav";

const maxOrder = 1;
let soundBuffer, sound, context;
let mirror, decoder, analyser, gainOut, encoder;
let UpArrowDown = false, LeftArrowDown = false, DownArrowDown = false, RightArrowDown = false;

// Canvas
const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 5, 0)
scene.add(camera)

// Controls, is it canvas or document.body?
const controls = new MouseOnlyControls(camera, document.body)
const keyboardControls = new KeyboardAccessControls(camera, document.body);
const touchControls = new TouchAccessControls(camera, document.body);
const splash = document.querySelector("#splash");

const listener = new THREE.AudioListener();
camera.add(listener);
const ambisonicAudio = new AmbisonicAudio(listener, camera)

const initAmbisonics = (e) => {

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
  loadSample(soundUrl, assignSample2SoundBuffer);
  loadSample(irUrl, assignSample2Filters);

  // initialize encoder
  encoder = new ambisonics.monoEncoder(context, 1);
  console.log(encoder);
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
  encoder.out.connect(mirror.in);
  mirror.out.connect(decoder.in);
  mirror.out.connect(analyser.in);
  decoder.out.connect(gainOut);
  gainOut.connect(context.destination);

}

//needs sound, state, context
const createAndStartBuffer = () => {
  var offset = state.pausedAt;

  sound = context.createBufferSource();
  sound.buffer = soundBuffer;
  sound.loop = true;
  sound.connect(encoder.in);
  sound.start(0, offset);
  sound.isPlaying = true;
  state.playStart = context.currentTime - offset;
  state.pausedAt = 0;
  document.getElementById('play').disabled = true;
  document.getElementById('stop').disabled = false;
}

const pauseBuffer = () => {
  sound.isPlaying = false;
  var elapsed = context.currentTime - state.playStart;
  sound.stop();
  state.pausedAt = elapsed;
  document.getElementById('play').disabled = false;
  document.getElementById('stop').disabled = true;
}

const loadButton = document.querySelector("#load");
loadButton.addEventListener("click", initAmbisonics)
// hitting enter simulates a click

const enterScene = () => {
  splash.style.display = 'none';
  createAndStartBuffer();
}
const exitScene = () => {
  splash.style.display = 'block';
  pauseBuffer();
}
splash.addEventListener('click', () => {
  if(touchControls.enabled) {
    enterScene();
    touchControls.isLocked = true;
  } else {
    controls.lock();
    controls.addEventListener('lock', enterScene)
    controls.addEventListener('unlock', exitScene);
    scene.add( controls.getObject() );
  }
})

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

const xbox = new GamepadAccessControls(camera);
const gamepadElement = document.querySelector('#gamepads');
const updateUI = () => {
  gamepadElement.innerHTML = xbox.gamepads
  console.log(xbox.gamepads)
}
window.addEventListener("gamepadconnected", updateUI);

// function to load samples
function loadSample(url, doAfterLoading) {
  var fetchSound = new XMLHttpRequest(); // Load the Sound with XMLHttpRequest
  fetchSound.open("GET", url, true); // Path to Audio File
  fetchSound.responseType = "arraybuffer"; // Read as Binary Data
  fetchSound.onload = function() {
      console.log("loaded" + url)
      context.decodeAudioData(fetchSound.response, doAfterLoading, onDecodeAudioDataError);
  }
  fetchSound.send();
}

// function to assign sample to the sound buffer for playback (and enable playbutton)
var assignSample2SoundBuffer = function(decodedBuffer) {
  soundBuffer = decodedBuffer;
  document.getElementById('play').disabled = false;
}
// function to assign sample to the filter buffers for convolution
var assignSample2Filters = function(decodedBuffer) {
decoder.updateFilters(decodedBuffer);
}
// function called when audiocontext.decodeAudioData fails to decode a given audio file, e.g. in Safari with .ogg vorbis format
function onDecodeAudioDataError(error) {
  var url = 'hjre';
alert("Browser cannot decode audio data..." + "\n\nError: " + error + "\n\n(If you re using Safari and get a null error, this is most likely due to Apple's shady plan going on to stop the .ogg format from easing web developer's life :)");
}

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
scene.add(planarMesh)

window.addEventListener('resize', () =>
{
    // Update sizes
    // sizes.width = window.innerWidth
    // sizes.height = window.innerHeight

    // Update camera
    camera.aspect = 1

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


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

    keyboardControls.update();
    xbox.update();
    touchControls.update();

    if(controls.isLocked) {
      if(encoder != null) {
        euler.setFromQuaternion(camera.quaternion);
        encoder.azim = -euler.y * 180 / Math.PI;
        encoder.elev = euler.x * 180 / Math.PI;
        encoder.updateGains();
      }
    }

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)

}

tick()

