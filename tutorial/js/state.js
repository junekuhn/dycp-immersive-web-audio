
const handler = {
    set: function (obj, prop, value) {
      obj[prop] = value;
    //   console.log(`stateChange: ${prop}: ${value}`);
      return true;
    },
  };


export const state = new Proxy(
    {
      mode: "tab",
      slide: "welcome",
      positionIndex: 0,
      // -1 if none
      mobile: false,
      box: -1,
      needsUpdate: false,
      preferences: {
        controls: "",
        joystick: "",
        sensitivity: 0.5,
      },
    },
    handler
);

export const actions = {
    increment: () => {
        state.positionIndex++;
    },
    decrement: () => {
        state.positionIndex--;
    },
    toggleMode: () => {
       state.mode = state.mode == "tab" ? "move" : "tab";
    }
};