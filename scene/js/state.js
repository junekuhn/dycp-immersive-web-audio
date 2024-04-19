
const handler = {
    set: function (obj, prop, value) {
      obj[prop] = value;
    //   console.log(`stateChange: ${prop}: ${value}`);
      return true;
    },
  };


export const state = new Proxy(
    {
      azimuth: 0,
      elevation: 0,
      pausedAt: 0,
      playStart: 0,
      positionIndex: 0,
      // modes "tab / move"
      mode: "tab",
      slide: "welcome",
      preferences: {
        controls: "",
        joystick: "",
        sensitivity: 0.5,
      },
      scene: "",
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