import React, { useContext } from 'react';
import { Context } from '../assets/context';

export default () => {

    // GLOBAL STATE
    const { dispatch } = useContext(Context);

    function trigger() {
        dispatch({
            type: 'show-prompt',
            payload: 'loading'
        })
    }
    
    return (
        <div id={ 'inner' }>
            <div id={ 'project' } onClick={ trigger }>OPEN PROMPT</div>
        </div>
    )
}