// DEFALT STATE
const values = {
   data: {},
   window: {
      height: window.innerHeight,
      width: window.innerWidth
   }
}

// STATE REDUCER
function reducer(state, { type, payload }) {
   switch (type) {

      // INITIALIZE DATA
      case 'init': { return {
         ...state,
         data: payload
      }}

      // WINDOW RESIZE EVENT
      case 'window': { return {
         ...state,
         window: payload
      }}

      // MOUSE CLICK EVENT
      case 'click': { return {
         ...state,
         click: payload
      }}
      
      // FALLBACK
      default: {
         console.log('GLOBAL REDUCER TYPE NOT FOUND');
         return state;
      }
   }
}

export {
   values,
   reducer
}