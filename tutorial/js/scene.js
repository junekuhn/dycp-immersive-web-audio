import "./init.js";
import * as THREE from 'three'
import { MouseOnlyControls } from "../../controls/MouseOnlyControls.js";
import { KeyboardAccessControls } from "../../controls/KeyboardAccessControls.js";
import { GamepadAccessControls } from "../../controls/GamepadAccessControls.js";
import { TouchAccessControls } from "../../controls/TouchAccessControls.js";
import { AmbisonicAudio } from "../../controls/AmbisonicAudio.js";
import * as ambisonics from 'ambisonics';
import { MIDIAccessControls } from "../../controls/MidiAccessControls.js";

import { gsap } from 'gsap'

import { state } from './state.js';

let scene, camera, renderer, canvas,
mouseControls, keyboardControls, touchControls, gamepadControls;


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
    new THREE.Vector3(3,0,-10),
]
const audioPositions = [
    new THREE.Vector3(2,5,1),
    new THREE.Vector3(3,5,-5),
    new THREE.Vector3(4,5,-2),
    new THREE.Vector3(-3,5,-5),
]
let sounds = [];
let playerBounds = {
  min: new THREE.Vector2(-15, -15),
  max: new THREE.Vector2(15, 15)
}

export const initScene = () => {

    //init scene
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.set(0, 0, 0)
    scene.add(camera)
    canvas = document.querySelector('canvas.webgl')

    //init controls
    mouseControls = new MouseOnlyControls(camera, document.body)
    keyboardControls = new KeyboardAccessControls(camera, document.body);
    touchControls = new TouchAccessControls(camera, document.body);
    // midiControls = new MIDIAccessControls(camera, document.body);
    // midiControls.init();

    // gamepad setup
    gamepadControls = new GamepadAccessControls(camera);
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
        listItem.addEventListener("focus", (e) => {
            console.log("list item" + listItem.getAttribute("data-index"));
            state.positionIndex = i;
            setPosition(i)
        })
        sceneListElement.appendChild(listItem);

        const boxGeometry = new THREE.BoxGeometry(3, 3, 3);
        const boxMaterial = new THREE.MeshBasicMaterial({
            color: new THREE.Color(`rgb(${Math.random() * 255}, 255, 255)`),
            transparent: true
        });
        const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.geometry.computeBoundingBox()
        boxMesh.position.set(position.x, position.y, position.z);
        scene.add(boxMesh)

    })

    const enterScene = () => {
        //hide previous slide
        document.querySelector("#scene").style.display = "none";
        document.querySelector("#three-d").style.display = "block";
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
    touchControls.update();
    gamepadControls.update();

    //bounds checking
    if(camera.position.x < playerBounds.min.x) camera.position.x = playerBounds.min.x;
    if(camera.position.x > playerBounds.max.x) camera.position.x = playerBounds.max.x;
    if(camera.position.z < playerBounds.min.y) camera.position.z = playerBounds.min.y;
    if(camera.position.z > playerBounds.max.y) camera.position.z = playerBounds.max.y;

        
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(renderScene)

}