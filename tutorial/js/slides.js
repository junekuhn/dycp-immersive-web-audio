//interaction with HTML is here

import "./init.js";
import { state } from "./state.js";
import { initScene, renderScene } from "./scene.js";

const enterButton = document.querySelector("#enter-button")
const infoButton = document.querySelector("#info-button")

const continueButton = document.querySelector("#continue-button")
const backButton = document.querySelector("#back")
const playButton = document.querySelector("#play")

//menu buttons
const menu = document.querySelector("#menu")
const menuResumeButton = document.querySelector("#menu-resume");
const menuSettingsButton = document.querySelector("#menu-settings");
const menuInfoButton = document.querySelector("#menu-info")

//settings buttons
const settingsBack = document.querySelector("#settings-back");



initScene();

const changeSlide = (slide) => {
    //hide previous slide
    document.querySelector(`#${state.slide}`).style.display = "none";

    //show next slide
    state.slide = slide;
    document.querySelector(`#${state.slide}`).style.display = "flex";
}

const enterScene = () => {

    changeSlide("scene")
    state.inScene = true;

    //set listener for menu
    playButton.addEventListener("click", () => {
        renderScene();
        menu.style.display = "flex"
    })

    //set listener for menu
    document.addEventListener("menu", () => {
        menu.focus()
    })

}

enterButton.addEventListener('click', () => {
    changeSlide("headphones");
});

infoButton.addEventListener('click', () => {
    changeSlide("info");
});

backButton.addEventListener('click', () => {
    if (state.inScene) {
        changeSlide("menu")
        menu.focus();
        document.querySelector("#scene-list").style.display = "block";
    } else  {
        changeSlide("welcome")
    }
})

continueButton.addEventListener('click', enterScene);

menuResumeButton.addEventListener('click', () => {
    menu.classList.remove("slide");
    menu.classList.add("screenreader") 
    if(!state.mobile) {
        initScene.mouseControls.lock();
    }

    //change focus to the last list element
    // if(state.positionIndex == -1) state.positionIndex = 0;
    let firstLiElement = document.querySelector(`li[data-index='${state.positionIndex}']`)
    firstLiElement.focus()
})

menu.addEventListener('focusin', () => {
    
    //pause current audio
    console.log(state.positionIndex)
    let songElement = document.getElementById( `sample${state.positionIndex}` );
    if(songElement != null && !songElement.paused) songElement.pause();

    menu.classList.remove("screenreader");
    menu.classList.add("slide")
    
    changeSlide("menu")
})

menu.addEventListener('focusout', () => {
    menu.classList.remove("slide");
    menu.classList.add("screenreader")

})

menuSettingsButton.addEventListener('click', () => {
    changeSlide("settings");
    document.querySelector("#scene-list").style.display = "none";
})

menuInfoButton.addEventListener('click', () => {
    changeSlide("info")
    document.querySelector("#scene-list").style.display = "none";
})

settingsBack.addEventListener('click', () => {
    changeSlide("menu")
    menu.focus();
    document.querySelector("#scene-list").style.display = "block";
})

let pointerRotationSpeed = document.querySelector("#pointerRotationSpeed")
pointerRotationSpeed.addEventListener("change", (e) => {
    //map input
    let mappedInput = map(e.target.value, pointerRotationSpeed.min, pointerRotationSpeed.max, 0.1, 5, true);

    console.log(mappedInput)

    //update pointermove speed
    initScene.mouseControls.rotationSpeed = mappedInput;
})

let touchMoveSpeed = document.querySelector("#touchMoveSpeed");
touchMoveSpeed.addEventListener("change", (e) => {
    let mappedInput = map(e.target.value, touchMoveSpeed.min, touchMoveSpeed.max, 0.01, 0.1);
    console.log(mappedInput);
    initScene.touchControls.forwardSpeed = mappedInput;
})

let touchRotationSpeed = document.querySelector("#touchRotationSpeed");
touchRotationSpeed.addEventListener("change", (e) => {
    let mappedInput = map(e.target.value, touchRotationSpeed.min, touchRotationSpeed.max, 0.001, 0.05);
    console.log(mappedInput);
    initScene.touchControls.touchSpeed = mappedInput;
})

let elevationCheckbox = document.querySelector("#elevationCheckbox");
elevationCheckbox.addEventListener("change", (e) => {
    initScene.touchControls.elevationControls = e.target.value;
})

let inertiaCheckbox = document.querySelector("#elevationCheckbox");
inertiaCheckbox.addEventListener("change", (e) => {
    initScene.touchControls.inertia = e.target.value;
})

let spacebarMoveSpeed = document.querySelector("#spacebarMoveSpeed");
spacebarMoveSpeed.addEventListener("change", (e) => {
    let mappedInput = map(e.target.value, spacebarMoveSpeed.min, spacebarMoveSpeed.max, 0.003, 0.1);
    initScene.keyboardControls.moveSpeed = mappedInput;
})

let arrowKeysSpeed = document.querySelector("#arrowKeysSpeed");
arrowKeysSpeed.addEventListener("change", (e) => {
    let mappedInput = map(e.target.value, arrowKeysSpeed.min, arrowKeysSpeed.max, 0.003, 0.1);
    initScene.keyboardControls.lookSpeed = mappedInput;
})

//helper functions
const map = function(n, start1, stop1, start2, stop2, withinBounds) {
    const newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
    if (!withinBounds) {
      return newval;
    }
    if (start2 < stop2) {
      return constrain(newval, start2, stop2);
    } else {
      return constrain(newval, stop2, start2);
    }
  };
const constrain = function(n, low, high) {
    return Math.max(Math.min(n, high), low);
};

//initial state
changeSlide("welcome")