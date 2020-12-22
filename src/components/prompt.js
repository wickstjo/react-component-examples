import React, { useContext, useEffect } from 'react';
import { Context } from "../assets/context";
import { sleep } from "../funcs/misc";
import '../interface/css/prompt.scss';

import Import from './prompt/import';

// PROMPT CONTAINER
function Prompt() {
   
    // GLOBAL STATE
    const { state, dispatch } = useContext(Context);

    // TOGGLE VISIBILITY BASED ON STATE
    useEffect(() => {
        if (state.prompt.visible) {
            document.getElementById('prompt').style.display = 'flex';
            sleep(100).then(() => {
                document.getElementById('wrapper').style.filter = 'blur(6px)';
                document.getElementById('prompt').style.opacity = 1;
            })
        } else {
            document.getElementById('prompt').style.opacity = 0;
            document.getElementById('wrapper').style.filter = 'none';
            sleep(100).then(() => {
                document.getElementById('prompt').style.display = 'none';
            })
        }
    }, [state.prompt.visible]);

    return (
        <div id={ 'prompt' }>
            <div id={ 'inner' }>
                <Content
                    type={ state.prompt.type }
                    header={ state.prompt.header }
                    data={ state.prompt.data }
                    other={ state.prompt.other }
                />
                <span
                    id="close"
                    onClick={() => { dispatch({ type: 'hide-prompt' }) }}
                />
            </div>
        </div>
    )
}

// PROMPT CONTENT
function Content({ type, header }) {
    switch(type) {

        // LOADING
        case 'loading': {
            return <div className="lds-dual-ring" />
        }

        // IMPORT PROMPT
        case 'import': {
            return <Import
                header={ header }
            />
        }

        // FALLBACK
        default: {
            return <div>PROMPT TYPE ERROR</div>
        }
    }
}

export default Prompt;