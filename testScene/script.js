import "./js/init.js";
import * as THREE from 'three'
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import GUI from 'lil-gui'
import * as ambisonics from 'ambisonics';
import Gamepad from './js/gamepad.js';
import { state } from './js/state.js';


/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}





var soundUrl = "sounds/sample2.wav";
var irUrl = "IRs/ambisonic2binaural_filters/aalto2016_N1.wav";
var ambiIrUrl = "IRs/ambisonicRIRs/room_1_bf.wav";

var maxOrder = 1;
var soundBuffer, sound, context;
var convolver, mirror, rotator, decoder, analyser, converterF2A, gainOut, encoder;



// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(1, 1, 1)
scene.add(camera)

// Controls, is it canvas or document.body?
const controls = new PointerLockControls(camera, document.body)
const splash = document.querySelector("#splash");

document.querySelector("#load").addEventListener("click", (e) => {

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
    // loadSample(ambiIrUrl, assignSample2Convolver);

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




})

splash.addEventListener('click', () => {
  controls.lock();
})
controls.addEventListener('lock', () => {
  splash.style.display = 'none';
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
})
controls.addEventListener('unlock', () => {
  splash.style.display = 'block';

  sound.stop(0);
  sound.isPlaying = false;
  document.getElementById('play').disabled = false;
  document.getElementById('stop').disabled = true;
})
scene.add( controls.getObject() );

let UpArrowDown = false, LeftArrowDown = false, DownArrowDown = false, RightArrowDown = false;

const onKeyDown = (e) => {
  switch (e.code) {
    case "Space":
      toggleAudio();
      break;
    case "ArrowLeft":
      LeftArrowDown = true;
      break;
    case "ArrowUp":
      UpArrowDown = true;
      break;
    case "ArrowRight":
      RightArrowDown = true;
      break;
    case "ArrowDown":
      DownArrowDown = true;
      break;
    default:
      break;
  }
}

const onKeyUp = (e) => {
  switch (e.code) {
    case "Space":
      break;
    case "ArrowLeft":
      LeftArrowDown = false;
      break;
    case "ArrowUp":
      UpArrowDown = false;
      break;
    case "ArrowRight":
      RightArrowDown = false;
      break;
    case "ArrowDown":
      DownArrowDown = false;
      break;
    default:
      break;
  }
}

document.addEventListener( 'keydown', onKeyDown );
document.addEventListener( 'keyup', onKeyUp );


const xbox = new Gamepad();
const gamepadElement = document.querySelector('#gamepads');
const updateUI = () => {
  gamepadElement.innerHTML = xbox.gamepads
  console.log(xbox.gamepads)
}
window.addEventListener("gamepadconnected", updateUI);

// device detection
// if laptop, mouse and usb default
// if tablet - touch controls
// if mobile - touch or device orientation controls


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
  if(context == null) return;

  if(sound.isPlaying) {


    sound.isPlaying = false;
    var elapsed = context.currentTime - state.playStart;
    sound.stop();
    state.pausedAt = elapsed;
    document.getElementById('play').disabled = false;
    document.getElementById('stop').disabled = true;
  } else {
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
} 






const gui = new GUI()
gui.add(state, "azimuth", -Math.PI, Math.PI);
gui.add(state, "elevation", -Math.PI/2, Math.PI/2 );



const textureLoader = new THREE.TextureLoader();



const defaultGeometry = new THREE.DodecahedronGeometry();
const defaultMaterial = new THREE.MeshBasicMaterial({color: "white"});
const defaultMesh = new THREE.Mesh(defaultGeometry, defaultMaterial);
scene.add(defaultMesh)

// const defaultLight = new THREE.AmbientLight(new THREE.Color(0xF29), 0.8);
// scene.add(defaultLight);



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
 * Camera
 */
// Base camera
// const res = 800;
// const camera = new THREE.OrthographicCamera(
//     -res * 0.5,
//     res * 0.5,
//     res * 0.5,
//     -res * 0.5,
//     0,
//     1000
// )
// camera.position.z = 100
// scene.add(camera)







/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const clock = new THREE.Clock()


const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const euler = new THREE.Euler( 0, 0, 0, 'YXZ' );

    // if using pointerlock, update state from camera
    if(controls.isLocked) {
      euler.setFromQuaternion( camera.quaternion );

      let speed = 0.01;

      if(UpArrowDown) {
        euler.x += speed;
        euler.x = Math.max( Math.PI/2 - controls.maxPolarAngle, Math.min( Math.PI/2 - controls.minPolarAngle, euler.x ) );
        camera.quaternion.setFromEuler( euler );
      } else if(DownArrowDown) {
        euler.x -= speed;
        euler.x = Math.max( Math.PI/2 - controls.maxPolarAngle, Math.min( Math.PI/2 - controls.minPolarAngle, euler.x ) );
        camera.quaternion.setFromEuler( euler ); 
      }

      if(LeftArrowDown) {
        euler.y += speed;
        camera.quaternion.setFromEuler( euler ); 
      } else if (RightArrowDown) {
        euler.y -= speed;
        camera.quaternion.setFromEuler( euler ); 
      }


      

      state.azimuth = euler.y;
      state.elevation = euler.x;
      // Define mouse drag on spatial map .png local impact

      if(encoder != null) {
        encoder.azim = -euler.y * 180 / Math.PI;
        encoder.elev = euler.x * 180 / Math.PI;
        encoder.updateGains();
      }


    } 
    //or simulate pointerlock from GUI
    else {
      euler.y = state.azimuth;
      euler.x = state.elevation;
      camera.quaternion.setFromEuler( euler );

      if(encoder != null){
        encoder.azim = -state.azimuth * 180 / Math.PI;
        encoder.elev = state.azimuth * 180 / Math.PI;
        encoder.updateGains();
      }
    }



    // scene.children.map(child => {
    //     child.rotation.x += 0.001
    // })

    xbox.update();
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)

    // console.log(controls.getDirection(new THREE.Vector3(1,1,1)))\

}

tick()

