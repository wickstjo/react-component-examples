// DEFALT STATE
const values = {
    data: {},

    // WINDOW SIZE
    window: {
        height: window.innerHeight,
        width: window.innerWidth
    },

    // PROMPT WINDOW
    prompt: {
        visible: false,
        type: null
    },
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

        // SHOW SPECIFIC PROMPT
        case 'show-prompt': { return {
            ...state,
            prompt: {
                visible: true,
                type: payload
            }
        }}

        // HIDE PROMPT
        case 'hide-prompt': { return {
            ...state,
            prompt: {
                ...state.prompt,
                visible: false,
                payload: null
            }
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