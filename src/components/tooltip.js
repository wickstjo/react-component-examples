import React, { useContext, useState, useRef } from 'react';
import { Context } from '../assets/context';
import '../interface/css/tooltip.scss';

export default({ header }) => {

    // GLOBAL STATE
    const { state } = useContext(Context);

    // LOCAL STATES
    const [local, set_local] = useState('inactive')
    const [style, set_style] = useState({})

    // SHOW & HIDE THE TOOLTIP
    function show() { set_local('active') }
    function hide() { set_local('inactive') }

    // CONTENT SELECTOR
    const content = useRef(null)

    // WHEN THE TOOLTIP NEEDS TO MOVE
    function update(event) {

        // TOOLTIP OFFSET & CUMULATIVE WIDTH
        const offset = 15
        const cumulative = content.current.offsetWidth + event.clientX + offset

        // RIGHT ALIGN
        if (cumulative > state.window.width) {
            set_style({
                top: event.clientY + offset,
                left: event.clientX - (content.current.offsetWidth + offset)
            })

        // LEFT ALIGN
        } else {
            set_style({
                top: event.clientY + offset,
                left: event.clientX + offset
            })
        }
    }
    
    return (
        <span id={ 'tooltip' } onMouseEnter={ show } onMouseLeave={ hide } onMouseMove={ update }>
            { header }
            <div id={ 'content' } className={ local } style={ style } ref={ content }>FOO BAR BIZ</div>
        </span>
    )
}