
const handler = {
    set: function (obj, prop, value) {
      if(prop == "positionIndex") {
        //if greater than max or less than min return true
        // if(value > obj.maxIndex || value < obj.minIndex) return true;
      }

      obj[prop] = value;

      return true;
    },
  };


export const state = new Proxy(
    {
      mode: "tab",
      slide: "welcome",
      positionIndex: 0,
      maxIndex: 4,
      minIndex: 0,
      // -1 if none
      mobile: false,
      box: -1,
      ambisonics: null,
      needsUpdate: false,
      pausedAt: 0,
      isPlaying: false,
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