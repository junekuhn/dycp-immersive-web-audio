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

    //change focus to the last list element
    let firstLiElement = document.querySelector(`li[data-index='${state.positionIndex}']`)
    firstLiElement.focus()
})

menu.addEventListener('focusin', () => {
    
    //pause current audio
    let songElement = document.getElementById( `sample${state.positionIndex}` );
    songElement.pause();

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

//initial state
changeSlide("welcome")