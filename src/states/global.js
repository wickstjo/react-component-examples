// DEFUALT STATE
const values = {
   data: {},
   window: {
      height: 0,
      width: 0
   }
}

// STATE REDUCER
function reducer(state, { type, payload }) {
   switch (type) {

      // INITIALIZE
      case 'init': { return {
         ...state,
         data: payload
      }}

      // WINDOW SIZE
      case 'window': { return {
         ...state,
         window: payload
      }}
      
      // FALLBACK
      default: {
         console.log('CONTEXT REDUCER TYPE NOT FOUND');
         return state;
      }
   }
}

export {
   values,
   reducer
}