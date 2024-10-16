import "./init.js";
import * as THREE from 'three'
import { PointerControls } from "../../controls/PointerControls.js";
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
mouseControls, keyboardControls,  gamepadControls;


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

const descriptions = [
    "scene one",
    "scene two",
    "scene three",
    "scene four",
    "scene five"
]
let sounds = [],
audioTimer,
materials = [], analysers = [];
let playerBounds = {
  min: new THREE.Vector2(-15, -15),
  max: new THREE.Vector2(15, 15)
}
let boxGroup;

export const initScene = () => {

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
    mouseControls = new PointerControls(camera, document.body)
    keyboardControls = new KeyboardAccessControls(camera, document.body);
    // touchControls = new TouchAccessControls(camera, document.body);
    // midiControls = new MIDIAccessControls(camera, document.body);
    // midiControls.init();

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
            songElement.play();
            //delayed loop
            songElement.addEventListener('ended', () => {
                audioTimer = setTimeout(() => {
                    //delayed start
                    songElement.play();
                }, 1000) 
            })
        })
        listItem.innerHTML = descriptions[i];
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
        if(!state.mobile) mouseControls.lock();
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
    //   //teleport if top, exit if bottom
    //   touchControls.setDoubleTap(nextPosition, exitScene);
    // //   keyboardControls.setTab(nextPosition);
    //   mouseControls.setDblClick(nextPosition);
    //   gamepadControls.bButton = nextPosition;



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
    mouseControls.update();
    keyboardControls.update();
    // touchControls.update();
    gamepadControls.update();

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
            songElement.play();
            //delayed loop
            songElement.addEventListener('ended', () => {
                audioTimer = setTimeout(() => {
                    //delayed start
                    songElement.play();
                }, 1000) 
            })
            }

            state.positionIndex = state.box;    


    }

    if(state.needsUpdate) updateAudio();


        
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(renderScene)

}