import * as THREE from 'three'
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import GUI from 'lil-gui'
// import { CanvasCapture } from 'canvas-capture';
import * as ambisonics from 'ambisonics';
import Gamepad from './js/gamepad.js';



/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

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
splash.addEventListener('click', () => {
  controls.lock();
})
controls.addEventListener('lock', () => {
  splash.style.display = 'none';
})
controls.addEventListener('unlock', () => {
  splash.style.display = 'block'
})
scene.add( controls.getObject() );

const onKeyDown = (e) => {
  switch (e.code) {

  }
}

const onKeyUp = (e) => {

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





// Setup audio context and variables
var AudioContext = window.AudioContext // Default
    || window.webkitAudioContext; // Safari and old versions of Chrome
var context = new AudioContext; // Create and Initialize the Audio Context

// added resume context to handle Firefox suspension of it when new IR loaded
// see: http://stackoverflow.com/questions/32955594/web-audio-scriptnode-not-called-after-button-onclick
context.onstatechange = function() {
    if (context.state === "suspended") { context.resume(); }
}

var soundUrl = "sounds/sample2.wav";
var irUrl = "IRs/ambisonic2binaural_filters/aalto2016_N1.wav";
var ambiIrUrl = "IRs/ambisonicRIRs/room_1_bf.wav";

var maxOrder = 1;
var soundBuffer, sound;

// initialise encoder (convolver really)
var convolver = new ambisonics.convolver(context, maxOrder);
console.log(convolver);
// initialize ambisonic mirroring
var mirror = new ambisonics.sceneMirror(context, maxOrder);
console.log(mirror);
// initialize ambisonic rotator
// var rotator = new ambisonics.sceneRotator(context, maxOrder);
// console.log(rotator);
// initialize ambisonic decoder
var decoder = new ambisonics.binDecoder(context, maxOrder);
console.log(decoder);
// initialize ambisonic analyser
var analyser = new ambisonics.intensityAnalyser(context);
console.log(analyser);
// FuMa to ACN converter
var converterF2A = new ambisonics.converters.wxyz2acn(context);
console.log(converterF2A);
// output gain
var gainOut = context.createGain();

// connect graph
convolver.out.connect(converterF2A.in);
converterF2A.out.connect(mirror.in);
mirror.out.connect(analyser.in);
// rotator.out.connect(decoder.in);
// rotator.out.connect(analyser.in);
decoder.out.connect(gainOut);
gainOut.connect(context.destination);

const gui = new GUI()

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

    // Update controls
    // controls.update()

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

