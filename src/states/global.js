// DEFALT STATE
const values = {

    // WINDOW SIZE
    window: {
        height: window.innerHeight,
        width: window.innerWidth
    },

    // MOUSE & KEY EVENTS
    click_event: null,
    key_event: null,

    // PROMPT WINDOW
    prompt: {
        visible: false,
        type: null
    },
}

// STATE REDUCER
function reducer(state, { type, payload }) {
    switch (type) {
        
        // WINDOW RESIZE EVENT
        case 'window': { return {
            ...state,
            window: payload
        }}

        // MOUSE CLICK EVENT
        case 'click-event': { return {
            ...state,
            click_event: payload
        }}

        // KEYBOARD EVENT
        case 'key-event': { return {
            ...state,
            key_event: payload
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