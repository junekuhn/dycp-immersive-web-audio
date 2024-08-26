window.global ||= window;
import { state } from "./state.js";

const enterButton = document.querySelector("#enter-button")
const infoButton = document.querySelector("#info-button")

const info = document.querySelector("#info");
const headphones = document.querySelector("#headphones");
const continueButton = document.querySelector("#continue-button")
const backButton = document.querySelector("#back")
const sceneInfo = document.querySelector("#scene-info")

const settingsIcon = document.querySelector("#settings-icon");
const exitSettings = document.querySelector("#exit-settings");
const controlsTarget = document.querySelector("#controls-target")

const changeSlide = (slide) => {
    //hide previous slide
    document.querySelector(`#${state.slide}`).style.display = "none";

    //show next slide
    state.slide = slide;
    document.querySelector(`#${state.slide}`).style.display = "flex";
}

enterButton.addEventListener('click', () => {
    changeSlide("headphones");
});

infoButton.addEventListener('click', () => {
    changeSlide("info");
});

backButton.addEventListener('click', () => {
    changeSlide("welcome")
})

//initial state
changeSlide("welcome")