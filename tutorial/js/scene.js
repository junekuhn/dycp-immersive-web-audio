import "./init.js";
import * as THREE from 'three'
import { MouseOnlyControls } from "../../controls/MouseOnlyControls.js";
import { KeyboardAccessControls } from "../../controls/KeyboardAccessControls.js";
import { GamepadAccessControls } from "../../controls/GamepadAccessControls.js";
import { TouchAccessControls } from "../../controls/TouchAccessControls.js";
import { MIDIAccessControls } from "../../controls/MidiAccessControls.js"
import { sizes, listenerPositions, audioPositions, desktopDescriptions, mobileDescriptions} from "./data.js"
import volumeFragmentShader from '../glsl/volumeFragment.glsl';
import volumeVertexShader from '../glsl/volumeVertex.glsl'
import { gsap } from 'gsap'
import { state } from './state.js';

let scene, camera, renderer, canvas,
 keyboardControls, gamepadControls;
let sounds = [],
audioTimer,
materials = [], analysers = [];
let playerBounds = {
  min: new THREE.Vector3(-2, -0.5, -15),
  max: new THREE.Vector3(2, 2, 1),
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


    //instructions
    let planeGeometry = new THREE.PlaneGeometry(1,1, 4, 4);
    // load a texture, set wrap mode to repeat
    const texture = new THREE.TextureLoader().load( "textures/allears0.png" );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 1, 1 );
    let planeMaterial  = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide
    })
    let planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
    planeMesh.position.set(0,0,-1);
    scene.add(planeMesh)

    //construct meshes from bounds
    let boundingGeometry = new THREE.BoxGeometry(1, 1, 1);
    let boundingMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x330055),
        side: THREE.DoubleSide
    });
    let boundingMesh = new THREE.Mesh(boundingGeometry, boundingMaterial);
    boundingMesh.position.set(0, playerBounds.min.y, (playerBounds.min.z - playerBounds.max.z)/2 + playerBounds.max.z);
    boundingMesh.scale.set(playerBounds.max.x - playerBounds.min.x, 0.01, playerBounds.max.z - playerBounds.min.z);
    scene.add(boundingMesh)

    //left
    let boundingMesh2 = new THREE.Mesh(boundingGeometry, boundingMaterial);
    boundingMesh2.position.set(playerBounds.min.x, (playerBounds.max.y - playerBounds.min.y)/2 + playerBounds.min.y, (playerBounds.min.z - playerBounds.max.z)/2 + playerBounds.max.z);
    boundingMesh2.scale.set(0.01, playerBounds.max.y - playerBounds.min.y, playerBounds.max.z - playerBounds.min.z);
    scene.add(boundingMesh2)
    // right
    let boundingMesh3 = new THREE.Mesh(boundingGeometry, boundingMaterial);
    boundingMesh3.position.set(playerBounds.max.x, (playerBounds.max.y - playerBounds.min.y)/2 + playerBounds.min.y, (playerBounds.min.z - playerBounds.max.z)/2 + playerBounds.max.z);
    boundingMesh3.scale.set(0.01, playerBounds.max.y - playerBounds.min.y, playerBounds.max.z - playerBounds.min.z);
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

        const boxGeometry = new THREE.BoxGeometry(1,1,1.1);
        const boxMaterial = new THREE.MeshBasicMaterial({
            color: new THREE.Color(`rgb(${Math.random() * 255}, 255, 255)`),
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide
        });
        const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.geometry.computeBoundingBox()
        boxMesh.position.set(position.x, position.y, position.z);
        // boxGroup.add(boxMesh);

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
  
    const ambient = new THREE.AmbientLight( 0xffffff, 1 );
    scene.add( ambient );




    
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