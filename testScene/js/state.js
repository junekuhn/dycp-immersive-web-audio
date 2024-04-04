
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
    },
    handler
);

// export const actions = {
//     increment: () => {
//         state.counter++;
//     },
//     decrement: () => {
//         state.counter--;
//     },
// };