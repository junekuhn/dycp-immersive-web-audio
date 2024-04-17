import { state, actions } from "./state.js";

const welcome = document.querySelector("#welcome");
const enterButton = document.querySelector("#enter-button")
const infoButton = document.querySelector("#info-button")

const info = document.querySelector("#info");
const headphones = document.querySelector("#headphones");
const continueButton = document.querySelector("#continue-button")

const mouseButton = document.querySelector("#mouse-button")
const keyboardButton = document.querySelector("#keyboard-button")
const controllerButton = document.querySelector("#controller-button")

const settingsIcon = document.querySelector("#settings-icon");
const exitSettings = document.querySelector("#exit-settings");

const changeSlide = (slide) => {
    //hide previous slide
    document.querySelector(`#${state.slide}`).style.display = "none";

    //show next slide
    state.slide = slide;
    document.querySelector(`#${state.slide}`).style.display = "flex";
}

const enterScene = () => {
    //hide previous slide
    document.querySelector(`#${state.slide}`).style.display = "none";
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
    changeSlide("controls");
});

settingsIcon.addEventListener('click', () => {
    changeSlide("HOD")
})
settingsIcon.addEventListener('keydown', e => {
    if(e.code == "Space" || e.code == "Enter") {
        changeSlide("HOD") 
    }
})

mouseButton.addEventListener('click', enterScene);
keyboardButton.addEventListener('click', enterScene);
controllerButton.addEventListener('click', enterScene);
exitSettings.addEventListener('click', enterScene);



