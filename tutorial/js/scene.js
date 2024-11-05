import "./init.js";
import * as THREE from 'three'
import { MouseOnlyControls } from "../../controls/MouseOnlyControls.js";
import { KeyboardAccessControls } from "../../controls/KeyboardAccessControls.js";
import { GamepadAccessControls } from "../../controls/GamepadAccessControls.js";
import { TouchAccessControls } from "../../controls/TouchAccessControls.js";
import { AmbisonicAudio } from "../../controls/AmbisonicAudio.js";
import * as ambisonics from 'ambisonics';
import { MIDIAccessControls } from "../../controls/MidiAccessControls.js";

import volumeFragmentShader from '../glsl/volumeFragment.glsl';
import volumeVertexShader from '../glsl/volumeVertex.glsl'

import { gsap } from 'gsap'

import { state } from './state.js';

let scene, camera, renderer, canvas,
 keyboardControls, gamepadControls;



/**
 * Constants
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }
const listenerPositions = [
    new THREE.Vector3(0,0,0),
    new THREE.Vector3(3,0,-3),
    new THREE.Vector3(-3,0,3),
    new THREE.Vector3(-3,0,10),
    new THREE.Vector3(10,0,-10),
]
const audioPositions = [
    new THREE.Vector3(0,0,2),
    new THREE.Vector3(3,0,-1),
    new THREE.Vector3(-3,0,5),
    new THREE.Vector3(-3,0,12),
    new THREE.Vector3(10,0,-8)
]

const desktopDescriptions = [
    "This is AllEars, a playable introduction to screenreader-accessible immersive audio on the web.  You can navigate through the experience using the tab key, just like any other accessible website.  Each 3D position is mapped to an HTML list item. If you’ve never used a screen reader before, I challenge you to turn it on, close your eyes, and find out if you can navigate the 3D space.",
    "To look around, use the left and right arrow keys. You can optionally use the mouse to look around, but that tends to be more difficult if your eyes are closed.",
    "This experience i ncorporates a standard 3D virtual space and spatial audio you might incounter in video games, virtual reality, or other kinds of simulations.  To move forward, press spacebar, or hold a single click.",
    "This special kind of spatial audio, however, is called ambisonics, and it allows you to experience * an entire soundfield * without reference to objects in 3D space. All spatial information is contained within the audio file itself, and you need a special player called a binaural decoder to perceive that information. A helpful metaphor, I find, is thinking of it like listening to the sky, since it’s a spherical audio format.",
    "To change settings, navigate to the menu with the escape key.  If you’re using a screenreader, the menu is just after this position. There you can learn more about this project, change control preferences, or connect a game controller."
]

const mobileDescriptions = [" This is AllEars, a playable introduction to screenreader-accessible immersive audio on the web.  If you’re using a screenreader, you can navigate through the experience by swiping left or right, just like any other accessible website.   Each 3D position is mapped to an HTML list item. Otherwise, you can teleport to the next position with a double tap on the top half of the screen.  If you’ve never used a screen reader before, I challenge you to turn it on, close your eyes, and find out if you can navigate the 3D space.",
"To look around, use a one-finger drag on the top half of the screen. This will also work if you have Direct Touch enabled on iOS.  If you’re using Talkback on Android, a two-finger drag would be the equivalent.",
"This experience incorporates the standard 3D virtual space you might incounter in video games, virtual reality, or other kinds of simulations.  To move forward, with a single finger, press and hold in the lower half of the screen.  If you’re using Talkback on Android, use a two-finger hold.",
"This special kind of spatial audio, however, is called ambisonics, and it allows you to experience * an entire soundfield * without reference to objects in 3D space.  * All spatial information is contained within the audio file itself, and you need a special player called a binaural decoder to perceive that information. A helpful metaphor, I find, is thinking of it like listening to the sky, since it’s a spherical audio format.",
"To change settings, navigate to the menu with a double tap on the bottom half of the screen.  If you’re using a screenreader, the menu is just after this position. There you can learn more about this project, change control preferences, or connect a game controller."
]

const gamepadDescription = [
"This is AllEars, a playable introduction to screenreader-accessible immersive audio on the web.   You can teleport to the next position with a tap of the right button, b.  To move back, tap the left button, x.",
"Congratulations gamer, you’ve unlocked your first achievement.  To look around, use the left joystick or the D-Pad. ",
"This experience is incorporates the standard 3D virtual space you might encounter in video games, virtual reality, or other kinds of simulations.  To move forward, press the bottom button, a. ",
"This special kind of spatial audio, however, is called ambisonics, and it allows you to experience an entire soundfield without reference to objects in 3D space. All spatial information is contained within the audio file itself, and you need a special player called a binaural decoder to perceive that information. A helpful metaphor, I find, is thinking of it like listening to the sky, since it’s a spherical audio format.",
"To change settings, navigate to the menu with another tap of the right button, b. There you can learn more about this project, change control preferences, or go back to using normie controls."
]
let sounds = [],
audioTimer,
materials = [], analysers = [];
let playerBounds = {
  min: new THREE.Vector2(-15, -15),
  max: new THREE.Vector2(15, 15)
}
let boxGroup;

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
    keyboardControls = new KeyboardAccessControls(camera, document.body);
    initScene.touchControls = new TouchAccessControls(camera, document.body);

    // gamepad setup
    gamepadControls = new GamepadAccessControls(camera);


    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    //play scene
    const playButton = document.querySelector("#play");
    setTimeout(() => {
        playButton.innerHTML = "Play";
        playButton.addEventListener('click',enterScene)
    }, 500);

    const sceneListElement = document.querySelector("#scene-list")

    //construct bounding boxes
    listenerPositions.map((position, i) => {

        //focus listeners
        const listItem = document.createElement("li");
        listItem.tabIndex = 0;
        listItem.setAttribute("data-index", i);
        listItem.role = "button";
        listItem.addEventListener("focus", (e) => {

            let songElement;

            //if you're outside the boxes , it's already paused
            if(state.positionIndex > -1) {
                //pause current audio
                clearTimeout(audioTimer);
                songElement = document.getElementById( `sample${state.positionIndex}` );
                songElement.pause();
            }

            //set new state
            state.positionIndex = i;
            setPosition(i)

            // play relevant audio in loop
            songElement = document.getElementById( `sample${state.positionIndex}` );
            // songElement.play();
            //delayed loop
            songElement.addEventListener('ended', () => {
                audioTimer = setTimeout(() => {
                    //delayed start
                    // songElement.play();
                }, 1000) 
            })
        })
        if(state.mobile) {
            listItem.innerHTML = mobileDescriptions[i];
        } else {
            listItem.innerHTML = desktopDescriptions[i];
        }
        // listItem.ariaHidden = "true";
        sceneListElement.appendChild(listItem);

        const boxGeometry = new THREE.BoxGeometry(3, 3, 3);
        const boxMaterial = new THREE.MeshBasicMaterial({
            color: new THREE.Color(`rgb(${Math.random() * 255}, 255, 255)`),
            transparent: true,
            opacity: 0.2,
            side: THREE.DoubleSide
        });
        const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.geometry.computeBoundingBox()
        boxMesh.position.set(position.x, position.y, position.z);
        boxGroup.add(boxMesh);

    })

    scene.add(boxGroup);

    const enterScene = () => {
        if(!state.mobile) {
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
                sound.setRefDistance( 0.5 );

                
                mesh1.add( sound );
            })
        } else {
          sounds.map((sound, i) => {
            const songElement = document.getElementById( `sample${i}` ); 
            // songElement.play();
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

    const setPosition = (i) => {
          camera.position.copy ( listenerPositions[i] );
      }

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
            playButton.innerHTML = "Play";
            playButton.disabled = "false";
        }, 400)
    },

    // Progress
    (itemUrl, itemsLoaded, itemsTotal) =>
    {
        const progressRatio = itemsLoaded / itemsTotal;
        loadingBarElement.style.transform = `scaleX(${progressRatio})`;
    }
    )



    const light = new THREE.DirectionalLight( 0xffffff, 3 );
    light.position.set( 0, 0.5, 1 ).normalize();
    scene.add( light );
  
    const ambient = new THREE.AmbientLight( 0xffffff, 0.7 );
    scene.add( ambient );
  
    const helper = new THREE.GridHelper( 100, 20, 0xffffff, 0xffffff );
    helper.position.y = -2;
    scene.add( helper );



    
}


export const renderScene = () => {

    if(state.mobile) {
        keyboardControls.update();
        initScene.touchControls.update(); 
    } else {
        initScene.mouseControls.update();
        keyboardControls.update();
        gamepadControls.update();
    }

    //bounds checking
    if(camera.position.x < playerBounds.min.x) camera.position.x = playerBounds.min.x;
    if(camera.position.x > playerBounds.max.x) camera.position.x = playerBounds.max.x;
    if(camera.position.z < playerBounds.min.y) camera.position.z = playerBounds.min.y;
    if(camera.position.z > playerBounds.max.y) camera.position.z = playerBounds.max.y;

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
                clearTimeout(audioTimer);
                let songElement = document.getElementById( `sample${i}` );
                songElement.pause(); 
            })

            state.positionIndex = -1;
        } else {
            // play relevant audio in loop
            let songElement = document.getElementById( `sample${state.box}` );
            // songElement.play();
            //delayed loop
            songElement.addEventListener('ended', () => {
                audioTimer = setTimeout(() => {
                    //delayed start
                    // songElement.play();
                }, 1000) 
            })
            }

            state.positionIndex = state.box;    


    }

    // if(state.needsUpdate) updateAudio();


        
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(renderScene)

}