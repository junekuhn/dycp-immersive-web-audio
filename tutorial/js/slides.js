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

window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

  state.mobile = window.mobileCheck();



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
    initScene();
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
    let mappedInput = map(e.target.value, touchMoveSpeed.min, touchMoveSpeed.max, 0.0, 0.1);
    console.log(mappedInput);
    initScene.touchControls.forwardSpeed = mappedInput;
})

let touchRotationSpeed = document.querySelector("#touchRotationSpeed");
touchRotationSpeed.addEventListener("change", (e) => {
    let mappedInput = map(e.target.value, touchRotationSpeed.min, touchRotationSpeed.max, 0.001, 0.015);
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

let gamepadMoveSpeed = document.querySelector("#gamepadMoveSpeed");
gamepadMoveSpeed.addEventListener("change", (e) => {
    let mappedInput = map(e.target.value, gamepadMoveSpeed.min, gamepadMoveSpeed.max, 0.0, 0.05);
    console.log(mappedInput);
    initScene.gamepadControls.forwardSpeed = mappedInput;
})

let gamepadRotationSpeed = document.querySelector("#gamepadRotationSpeed");
gamepadRotationSpeed.addEventListener("change", (e) => {
    let mappedInput = map(e.target.value, gamepadRotationSpeed.min, gamepadRotationSpeed.max, 0.001, 0.05);
    console.log(mappedInput);
    initScene.gamepadControls.gamepadSpeed = mappedInput;
})

let teleport = document.querySelector("#teleport");
teleport.addEventListener("change", (e) => {
    initScene.gamepadControls.bButtonValue = e.target.value
})
let teleportBack = document.querySelector("#teleportBack");
teleport.addEventListener("change", (e) => {
    initScene.gamepadControls.xButtonValue = e.target.value
})

let moveButton = document.querySelector("#move");
moveButton.addEventListener("change", (e) => {
    initScene.gamepadControls.aButtonValue = e.target.value;
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