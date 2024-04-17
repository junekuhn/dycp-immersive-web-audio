import "./init.js";
import * as THREE from 'three';
import { initAmbisonicScene, tick } from "./ambisonic.js";
import { state, actions } from "./state.js";
import { initPositionalScene, renderPositionalScene } from "./positional.js";

const welcome = document.querySelector("#welcome");
const enterButton = document.querySelector("#enter-button")
const infoButton = document.querySelector("#info-button")

const info = document.querySelector("#info");
const headphones = document.querySelector("#headphones");
const continueButton = document.querySelector("#continue-button")

const sceneOneButton = document.querySelector("#scene-one-button")
const sceneTwoButton = document.querySelector("#scene-two-button")

const settingsIcon = document.querySelector("#settings-icon");
const exitSettings = document.querySelector("#exit-settings");



const changeSlide = (slide) => {
    //hide previous slide
    document.querySelector(`#${state.slide}`).style.display = "none";

    //show next slide
    state.slide = slide;
    document.querySelector(`#${state.slide}`).style.display = "flex";
}

const enterScene = (sceneName = null) => {
    //hide previous slide
    document.querySelector(`#${state.slide}`).style.display = "none";

    if(sceneName) {
        state.scene = sceneName;
    }

    if(state.scene == "ambisonic") {
        initAmbisonicScene()
        tick()
    } else if (state.scene == "positional") {
        initPositionalScene()
        renderPositionalScene()
    }

}

//initial state
changeSlide("welcome")

enterButton.addEventListener('click', () => {
    changeSlide("headphones");
});

infoButton.addEventListener('click', () => {
    changeSlide("info");
});

continueButton.addEventListener('click', ()=> {
    changeSlide("scene");
});

settingsIcon.addEventListener('click', () => {
    changeSlide("HOD")
})
settingsIcon.addEventListener('keydown', e => {
    if(e.code == "Space" || e.code == "Enter") {
        changeSlide("HOD") 
    }
})

sceneOneButton.addEventListener('click', () => enterScene("ambisonic"));
sceneTwoButton.addEventListener('click', () => enterScene("positional"));
exitSettings.addEventListener('click', enterScene);



