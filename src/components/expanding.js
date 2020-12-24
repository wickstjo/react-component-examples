import React, { useState, useRef } from 'react';
import '../interface/css/expanding.scss';

export default({ header, children }) => {

    // LOCAL STATES
    const [local, set_local] = useState('inactive')
    const [style, set_style] = useState({})

    // OPTIONS SELECTOR
    const content = useRef(null)

    // TOGGLE VISIBILITY
    function toggle() {

        // VISIBILITY STATUS & APPROPRIATE HEIGHT
        const status = local === 'inactive' ? 'active' : 'inactive'
        const height = local === 'inactive' ? content.current.firstChild.offsetHeight * children.length : 0

        // SET STATES
        set_local(status)
        set_style({ height: height + 'px' })
    }
    
    return (
        <div id={ 'expanding' }>
            <div id={ 'header' } onClick={ toggle }>{ header }</div>
            <div id={ 'content' } ref={ content } className={ local } style={ style }>{ children }</div>
        </div>
    )
}