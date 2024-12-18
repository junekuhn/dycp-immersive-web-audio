import "./init.js";
import * as THREE from 'three'
import { MouseOnlyControls } from "../../controls/MouseOnlyControls.js";
import { KeyboardAccessControls } from "../../controls/KeyboardAccessControls.js";
import { GamepadAccessControls } from "../../controls/GamepadAccessControls.js";
import { TouchAccessControls } from "../../controls/TouchAccessControls.js";
import { MIDIAccessControls } from "../../controls/MidiAccessControls.js";
import * as ambisonics from 'ambisonics';
import { sizes, listenerPositions, audioPositions, desktopDescriptions, mobileDescriptions} from "./data.js"
import volumeFragmentShader from '../glsl/volumeFragment.glsl';
import volumeVertexShader from '../glsl/volumeVertex.glsl'
import { gsap } from 'gsap'
import { state } from './state.js';

let scene, camera, renderer, canvas, sound, gamepadControls;
let sounds = [],
audioTimer,
materials = [], analysers = [];
let playerBounds = {
  min: new THREE.Vector3(-2, -0.5, -15),
  max: new THREE.Vector3(2, 2, 1),
}
let boxGroup;
let mirror, decoder, analyser, gainOut, encoder, convolver, converter, rotator, context, soundBuffer;
const maxOrder = 1;
const soundUrl = "./sounds/sample2.wav";
const irUrl = "./IRs/ambisonic2binaural_filters/aalto2016_N1.wav";
const ambiIrUrl = "./IRs/ambisonicRIRs/room_1_bf.wav";

export function initScene() {

    //init scene
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.set(0, 0, 0)
    scene.add(camera)
    canvas = document.querySelector('canvas.webgl')
    boxGroup = new THREE.Group();
      // create an AudioListener and add it to the camera
    const listener = new THREE.AudioListener();
    camera.add( listener );

    //init controls
    initScene.mouseControls = new MouseOnlyControls(camera, document.body)
    initScene.keyboardControls = new KeyboardAccessControls(camera, document.body);
    initScene.touchControls = new TouchAccessControls(camera, document.body);

    // gamepad setup
    initScene.gamepadControls = new GamepadAccessControls(camera);
    initScene.gamepadControls.forwardMovementEnabled = true;


    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    initScene.initAmbisonics = (e) => {
  
        // e.stopPropagation();
      
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
      mirror.out.connect(analyser.in);
        mirror.out.connect(rotator.in);
        rotator.out.connect(decoder.in);
        decoder.out.connect(gainOut);
        gainOut.connect(context.destination);
      
    }

     //needs sound, state, context
  initScene.createAndStartBuffer = () => {
    var offset = state.pausedAt;
  
    sound = context.createBufferSource();
    sound.buffer = soundBuffer;
    sound.loop = true;
    sound.connect(convolver.in);
    console.log(sound)
    sound.start(0, offset);
    sound.isPlaying = true;
    state.playStart = context.currentTime - offset;
    state.pausedAt = 0;
    // document.getElementById('play').disabled = true;
  }
  
  initScene.pauseBuffer = () => {
    sound.isPlaying = false;
    var elapsed = context.currentTime - state.playStart;
    sound.stop();
    state.pausedAt = elapsed;
    document.getElementById('play').disabled = false;
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


// function to assign sample to the sound buffer for playback (and enable playbutton)
var assignSample2SoundBuffer = function(decodedBuffer) {
    soundBuffer = decodedBuffer;
    state.ambisonics = "loaded";
    // document.getElementById('play').disabled = false;
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
  
  

    //play scene
    const playButton = document.querySelector("#play");
    setTimeout(() => {
        playButton.innerHTML = "Play";
        playButton.addEventListener('click',enterScene)
    }, 500);

    initScene.sceneListElement = document.querySelector("#scene-list")


    //instructions
    let planeGeometry = new THREE.PlaneGeometry(1,1, 4, 4);
    // load a texture, set wrap mode to repeat
    const textureLoader = new THREE.TextureLoader();


    //construct meshes from bounds
    let boundingGeometry = new THREE.BoxGeometry(1, 1, 1);
    let boundingMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x330055),
        side: THREE.DoubleSide
    });
    let boundingMesh = new THREE.Mesh(boundingGeometry, boundingMaterial);
    boundingMesh.position.set(0, playerBounds.min.y, (playerBounds.min.z - playerBounds.max.z)/2 + playerBounds.max.z);
    boundingMesh.scale.set(playerBounds.max.x - playerBounds.min.x, 0.1, playerBounds.max.z - playerBounds.min.z);
    scene.add(boundingMesh)

    //left
    let boundingMesh2 = new THREE.Mesh(boundingGeometry, boundingMaterial);
    boundingMesh2.position.set(playerBounds.min.x, (playerBounds.max.y - playerBounds.min.y)/2 + playerBounds.min.y, (playerBounds.min.z - playerBounds.max.z)/2 + playerBounds.max.z);
    boundingMesh2.scale.set(0.01, playerBounds.max.y - playerBounds.min.y, playerBounds.max.z - playerBounds.min.z);
    scene.add(boundingMesh2)
    // right
    let boundingMesh3 = new THREE.Mesh(boundingGeometry, boundingMaterial);
    boundingMesh3.position.set(playerBounds.max.x, (playerBounds.max.y - playerBounds.min.y)/2 + playerBounds.min.y, (playerBounds.min.z - playerBounds.max.z)/2 + playerBounds.max.z);
    boundingMesh3.scale.set(0.1, playerBounds.max.y - playerBounds.min.y, playerBounds.max.z - playerBounds.min.z);
    scene.add(boundingMesh3)
    //back 
    let boundingMesh4 = new THREE.Mesh(boundingGeometry, boundingMaterial);
    boundingMesh4.position.set((playerBounds.max.x - playerBounds.min.x)/2 + playerBounds.min.x, (playerBounds.max.y - playerBounds.min.y)/2 + playerBounds.min.y, playerBounds.min.z);
    boundingMesh4.scale.set(playerBounds.max.x - playerBounds.min.x, playerBounds.max.y - playerBounds.min.y, 0.01);
    scene.add(boundingMesh4)

    //front
    let boundingMesh5 = new THREE.Mesh(boundingGeometry, boundingMaterial);
    boundingMesh5.position.set((playerBounds.max.x - playerBounds.min.x)/2 + playerBounds.min.x, (playerBounds.max.y - playerBounds.min.y)/2 + playerBounds.min.y, playerBounds.max.z);
    boundingMesh5.scale.set(playerBounds.max.x - playerBounds.min.x, playerBounds.max.y - playerBounds.min.y, 0.01);
    scene.add(boundingMesh5)

    //construct bounding boxes
    listenerPositions.map((position, i) => {

        //focus listeners
        const listItem = document.createElement("li");
        listItem.tabIndex = 0;
        listItem.setAttribute("data-index", i);
        listItem.role = "button";
        listItem.addEventListener("focus", (e) => {

            // if not already in right box
            if(state.positionIndex != -1)
            initScene.setPosition(i)

            initScene.gamepadControls.needsUpdate = true;

            //set new state
            state.positionIndex = i;
        })
        if(state.mobile) {
            listItem.innerHTML = "Position " + i + mobileDescriptions[i];
        } else {
            listItem.innerHTML = desktopDescriptions[i];
        }
        initScene.sceneListElement.appendChild(listItem);

        const boxGeometry = new THREE.BoxGeometry(2,2,2.1);
        const boxMaterial = new THREE.MeshBasicMaterial({
            color: new THREE.Color(`rgb(${Math.random() * 255}, 255, 255)`),
            transparent: true,
            opacity: 0.3,
            side: THREE.DoubleSide
        });
        const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.geometry.computeBoundingBox()
        boxMesh.position.set(position.x, position.y+0.5, position.z);
        boxGroup.add(boxMesh);

        const texture = textureLoader.load( `./textures/allears${i}.png` );
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set( 1, 1 );
        let planeMaterial  = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide
        })
        let planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
        planeMesh.position.set(position.x,position.y,position.z-1);
        scene.add(planeMesh)

    })



    scene.add(boxGroup);

    const enterScene = () => {
        if(!state.mobile) {
            console.log("locking")
            initScene.mouseControls.lock();
        }

        //hide previous slide
        document.querySelector("#scene").style.display = "none";
        document.querySelector("#scene-list").style.display = "block";

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
                mesh1.scale.set(.02,.02,.02)
                scene.add( mesh1 );
    
                const songElement = document.getElementById( `sample${i}` );
    
                sound.setMediaElementSource( songElement );
                sound.setRefDistance( 1 );
                sound.setRolloffFactor(0.9 )

                
                mesh1.add( sound );
            })
        } 
}

    //the exception to keyboard controls, 
    window.addEventListener('keydown', (e) => {
        if(e.code === "Escape") {
        exitScene();
        }
    })

    const exitScene = () => {
        document.dispatchEvent(new Event("menu"));
    }

    initScene.setPosition = (i) => {
        if (i >= 0 && i < listenerPositions.length) {
            camera.position.copy ( listenerPositions[i] );
        }
      }

    initScene.gamepadControls.setBButton(initScene.setPosition, state.positionIndex+1)
    initScene.gamepadControls.setXButton(initScene.setPosition, state.positionIndex-1)
    initScene.gamepadControls.setStartButton(exitScene)


    const audioLoader = new THREE.AudioLoader();
    const light = new THREE.DirectionalLight( 0xffffff, 3 );
    light.position.set( 0, 0.5, 1 ).normalize();
    scene.add( light );
  
    const ambient = new THREE.AmbientLight( 0xffffff, 1 );
    scene.add( ambient );




    
}


export const renderScene = () => {

    if(state.mobile) {
        initScene.keyboardControls.update();
        initScene.touchControls.update(); 
    } else {
        initScene.mouseControls.update();
        initScene.keyboardControls.update();
        initScene.gamepadControls.update();
        if (initScene.gamepadControls.needsUpdate) {
            initScene.gamepadControls.setBButton(initScene.setPosition, state.positionIndex+1)
            initScene.gamepadControls.setXButton(initScene.setPosition, state.positionIndex-1)
            initScene.gamepadControls.needsUpdate = false;
        }
    }

    //bounds checking
    if(camera.position.x < playerBounds.min.x) camera.position.x = playerBounds.min.x;
    if(camera.position.x > playerBounds.max.x) camera.position.x = playerBounds.max.x;
    if(camera.position.z < playerBounds.min.z) camera.position.z = playerBounds.min.z;
    if(camera.position.z > playerBounds.max.z) camera.position.z = playerBounds.max.z;

    state.box = -1;

    //check where listener is
    boxGroup.children.map((box, i) => {
        const bb = new THREE.Box3();
        //if camera is inside box
        // in the animation loop, compute the current bounding box with the world matrix
        bb.copy( box.geometry.boundingBox ).applyMatrix4( box.matrixWorld );

        // listener is in a box
        if(bb.containsPoint(camera.position)) {
            // console.log("box in " + i + "box")
                state.box = i;
        } 
    })

    if(state.positionIndex != state.box) {
        console.log("mismatch", state.positionIndex, state.box)

        //bug at beginning
        if(state.positionIndex == 0 && state.box ==4 ) {

        } else if (state.box == -1) {
            sounds.map((sound, i) => {
                //turn off all audio
                audioPositions.map((audio, i) => {
                    let songElement = document.getElementById( `sample${i}` );
                    songElement.play();
                })
            })

            state.positionIndex = -1;
        } else {
            // play all audio in loop
            audioPositions.map((audio, i) => {
                let songElement = document.getElementById( `sample${i}` );
                songElement.pause();
            })

            //focus that LI element
            let currentLI = initScene.sceneListElement.querySelector(`li[data-index="${state.box}"]`);
            currentLI.focus();


        }

        state.positionIndex = state.box;    


    }
    //ambisonics
    if(state.positionIndex == 3) {
        if(state.ambisonics == null) {
            //init
            initScene.initAmbisonics();
            state.ambisonics = "loading";
        } if (state.ambisonics == "loading") {
            console.log("loading")
        } if (state.ambisonics == "loaded") {
            initScene.createAndStartBuffer();
            state.ambisonics = "playing"
        } if (state.ambisonics == "paused") {
            initScene.createAndStartBuffer();
            state.ambisonics = "playing";
        }
    } else {
        if(state.ambisonics == "playing") {
            initScene.pauseBuffer();
            state.ambisonics = "paused";
        }
    }

    // if(state.needsUpdate) updateAudio();
    let euler = new THREE.Euler( 0, 0, 0, 'YXZ' );
    if(rotator) {
        euler.setFromQuaternion(camera.quaternion);
        rotator.yaw = euler.y * 180 / Math.PI;
        rotator.pitch = euler.x * 180 / Math.PI;
        rotator.updateRotMtx();
    }
        
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(renderScene)

}