import React, { useContext, useState, useRef, useEffect } from 'react';
import { Context } from '../assets/context';

import '../interface/css/dropdown.scss';

export default({ header, children }) => {

    // GLOBAL STATE
    const { state } = useContext(Context);

    // LOCAL STATE
    const [style, set_style] = useState({
        opacity: 1,
        visibility: 'visible'
    })

    // HEADER SELECTOR
    const position = useRef(null);

    // ADD/REMOVE EVENT LISTENER
    useEffect(() => {
        window.addEventListener('click', test)
        return () => {
            window.removeEventListener('click', test)
        }

    // eslint-disable-next-line
    }, [style])

    // RECALIBRATE COORDINATES IF WINDOW IS RESIZED
    useEffect(() => {
        if (style.opacity === 1) {
            set_style({
                ...style,
                top: position.current.offsetTop + position.current.offsetHeight,
                left: position.current.offsetLeft
            })
        }
    
    // eslint-disable-next-line
    }, [state.window])

    // SET DEFAULT POSITION WHEN HEADER REFERENCE RENDERS
    useEffect(() => {
        set_style({
            ...style,
            top: position.current.offsetTop + position.current.offsetHeight,
            left: position.current.offsetLeft
        })

    // eslint-disable-next-line
    }, [position])

    function test(event) {
        if (style.opacity && event.target.id !== 'option') {
            toggle()
        }
    }

    // TOGGLE VISIBILITY
    function toggle() {
        set_style({
            ...style,
            opacity: style.opacity ? 0 : 1,
            transform: style.opacity ? 'translate(0px, 0px)' : 'translate(0px, 5px)',
            top: position.current.offsetTop + position.current.offsetHeight,
            left: position.current.offsetLeft,
            visibility: style.opacity ? 'hidden' : 'visible'
        })
    }
    
    return (
        <div id={ 'dropdown' }>
            <div id={ 'header' } onClick={ toggle } ref={ position }>{ header }</div>
            <div id={ 'options' } style={ style }>{ children }</div>
        </div>
    )
}