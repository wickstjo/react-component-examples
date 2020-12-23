import React, { useContext } from 'react';
import { Context } from '../assets/context';

export default () => {

    // GLOBAL STATE
    const { dispatch } = useContext(Context);

    // LOADING SCREEN TRIGGER
    function loading_trigger() {
        dispatch({
            type: 'show-prompt',
            payload: 'loading'
        })
    }

    // IMPORT SCREEN TRIGGER
    function import_trigger() {
        dispatch({
            type: 'show-prompt',
            payload: 'import'
        })
    }
    
    return (
        <div id={ 'dev' }>
            <div id={ 'button' } onClick={ loading_trigger }>TRIGGER LOADING PROMPT</div>
            <div id={ 'button' } onClick={ import_trigger }>TRIGGER IMPORT PROMPT</div>
        </div>
    )
}