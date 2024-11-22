//interaction with HTML is here

import "./init.js";
import { state } from "./state.js";
import { initScene, renderScene } from "./scene.js";

const enterButton = document.querySelector("#enter-button")
const infoButton = document.querySelector("#info-button")



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