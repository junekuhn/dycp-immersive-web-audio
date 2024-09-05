import "./init.js";
import { state } from "./state.js";
import { initScene, renderScene } from "./scene.js";

const enterButton = document.querySelector("#enter-button")
const infoButton = document.querySelector("#info-button")

const continueButton = document.querySelector("#continue-button")
const backButton = document.querySelector("#back")
const playButton = document.querySelector("#play")

//menu buttons
const menuResumeButton = document.querySelector("#menu-resume");
const menuSettingsButton = document.querySelector("#menu-settings");
const menuInfoButton = document.querySelector("#menu-info")

//settings buttons
const settingsBack = document.querySelector("#settings-back");





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
    initScene();
    //set listener for menu
    playButton.addEventListener("click", () => {
        renderScene();
    })

    //set listener for menu
    document.addEventListener("menu", () => {
        changeSlide("menu")
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
    } else  {
        changeSlide("welcome")
    }
})

continueButton.addEventListener('click', enterScene);

menuResumeButton.addEventListener('click', () => {
    //todo
})

menuSettingsButton.addEventListener('click', () => {
    changeSlide("settings");
})

menuInfoButton.addEventListener('click', () => {
    changeSlide("info")
})

settingsBack.addEventListener('click', () => {
    changeSlide("menu")
})

//initial state
changeSlide("welcome")