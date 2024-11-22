import "./init.js";
import { initAmbisonicScene, tick } from "./ambisonic.js";
import { state } from "./state.js";
import { initPositionalScene, renderPositionalScene } from "./positional.js";

const welcome = document.querySelector("#welcome");
const enterButton = document.querySelector("#enter-button")
const infoButton = document.querySelector("#info-button")

const info = document.querySelector("#info");
const headphones = document.querySelector("#headphones");
const continueButton = document.querySelector("#continue-button")
const backButton = document.querySelector("#back")
const instructions = document.querySelector("#instructions")

const sceneOneButton = document.querySelector("#scene-one-button")
const sceneTwoButton = document.querySelector("#scene-two-button")
const sceneSelect = document.querySelector("#scene-select")
const sceneInfo = document.querySelector("#scene-info")

const settingsIcon = document.querySelector("#settings-icon");
const exitSettings = document.querySelector("#exit-settings");
const controlsTarget = document.querySelector("#controls-target")

let firstEnter = true;



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
    sceneInfo.style.display = "block";

    if(firstEnter) {
        instructions.style.display = "flex";
        firstEnter = false;
    }


    if(sceneName) {
        state.scene = sceneName;
    }

    if(state.scene == "ambisonic") {

        //add controls to settings
        controlsTarget.appendChild(document.querySelector(".flex-controls").cloneNode(true));

        //start Three.js
        initAmbisonicScene()
        tick()

    } else if (state.scene == "positional") {

        // add all controls to settings
        document.querySelectorAll(".flex-controls > div").forEach(div => {
            div.style.display = "block";
        })
        controlsTarget.appendChild(document.querySelector(".flex-controls").cloneNode(true));

        //start three.js
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
backButton.addEventListener('click', () => {
    changeSlide("welcome")
})

instructions.addEventListener('click', (e) => {
    instructions.style.display = "none";
})
instructions.addEventListener('keydown', (e) => {

    if(e.code == "Tab") return; 

    instructions.style.display = "none";
})

//settings pane
settingsIcon.addEventListener('click', () => {
    changeSlide("HOD")
})
settingsIcon.addEventListener('keydown', e => {
    if(e.code == "Space" || e.code == "Enter") {
        changeSlide("HOD") 
    }
})
// sceneSelect.addEventListener("change", e => {
//     if(e.target.value == 0) {
//         enterScene("ambisonic")
//     } else if (e.target.value == 1) {
//         enterScene("positional")
//     }
// })

sceneOneButton.addEventListener('click', () => enterScene("ambisonic"));
sceneTwoButton.addEventListener('click', () => enterScene("positional"));
exitSettings.addEventListener('click', enterScene);






