import React, { useContext, useReducer, useEffect, useRef } from 'react';
import { Context } from '../assets/context';
import { reducer, values } from '../states/dropdown';
import '../interface/css/dropdown.scss';

export default({ header, children }) => {

    // GLOBAL STATE
    const { state } = useContext(Context);

    // LOCAL STATE
    const [local, set_local] = useReducer(reducer, values);

    // SELECTOR REFERENCES
    const header_selector = useRef(null);
    const options_selector = useRef(null);

    // ADJUST FOR LEFT OR RIGHT ALIGNMENT FOR OPTIONS
    useEffect(() => {

        // CURRENT MEASUREMENTS
        const start_position = options_selector.current.offsetParent.offsetLeft
        const options_width = options_selector.current.clientWidth
        const header_width = header_selector.current.clientWidth
        const offset = 5

        // CUMULATIVE WIDTH
        const cumulative_width = start_position + options_width + offset

        // RIGHT ALIGN IF THERE ISNT ENOUGH SPACE ON THE RIGHT
        set_local({
            type: 'style',
            payload: {
                left: cumulative_width > state.window.width ? Math.abs(header_width - options_width) * -1 : 0                                
            }
        })

    // eslint-disable-next-line
    }, [state.window])

    // CLOSE OPTIONS WHEN SOMETHING ELSE IS CLICKED
    useEffect(() => {
        if (local.visible && state.click_event.target.parentElement !== options_selector.current && state.click_event.target !== header_selector.current) {
            set_local({ type: 'toggle' })
        }

    // eslint-disable-next-line
    }, [state.click_event])

    // CLOSE OPTIONS WHEN ESC IS PRESSED
    useEffect(() => {
        if (state.key_event !== undefined && local.visible && state.key_event.key === 'Escape') {
            set_local({ type: 'toggle' })
        }

    // eslint-disable-next-line
    }, [state.key_event])
    
    return (
        <div id={ 'dropdown' }>
            <div id={ 'header' } className={ local.header_class } onClick={() => { set_local({ type: 'toggle' }) }} ref={ header_selector }>{ header }</div>
            <div id={ 'options' } className={ local.options_class } style={ local.options_style } ref={ options_selector }>{ children }</div>
        </div>
    )
}