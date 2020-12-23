import React, { useContext } from 'react';
import { Context } from '../assets/context';

export default () => {

    // GLOBAL STATE
    const { dispatch } = useContext(Context);

    // ADD GOOD MESSAGE
    function good() {
        dispatch({
            type: 'add-message',
            payload: {
                type: 'good',
                msg: 'good'
            }
        })
    }

    // ADD MEDIUM MESSAGE
    function medium() {
        dispatch({
            type: 'add-message',
            payload: {
                type: 'medium',
                msg: 'medium'
            }
        })
    }

    // ADD BAD MESSAGE
    function bad() {
        dispatch({
            type: 'add-message',
            payload: {
                type: 'bad',
                msg: 'bad'
            }
        })
    }
    
    return (
        <div id={ 'dev' }>
            <div id={ 'button' } onClick={ good }>ADD GOOD MESSAGE</div>
            <div id={ 'button' } onClick={ medium }>ADD MEDIUM MESSAGE</div>
            <div id={ 'button' } onClick={ bad }>ADD BAD MESSAGE</div>
        </div>
    )
}