// DEFALT STATE
const values = {
   visible: false,
   options_class: 'inactive',
   header_class: 'inactive',
   options_style: {}
}

// STATE REDUCER
function reducer(state, { type, payload }) {
   switch (type) {

      // TOGGLE VISIBILITY
      case 'toggle': { return {
         ...state,
         visible: !state.visible,
         options_class: state.visible ? 'inactive' : 'active',
         header_class: state.visible ? 'inactive' : 'active'
      }}

      // SET EXTRA STYLES
      case 'style': { return {
         ...state,
         options_style: payload
      }}
      
      // FALLBACK
      default: {
         console.log('DROPDOWN REDUCER TYPE NOT FOUND');
         return state;
      }
   }
}

export {
   values,
   reducer
}