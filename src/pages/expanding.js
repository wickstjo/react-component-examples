import React from 'react';
import Expanding from '../components/expanding';

export default () => { return (
    <div id={ 'dev' }>
        <Expanding header={ 'Something something' }>
            <div id={ 'option' }>First</div>
            <div id={ 'option' }>Second</div>
            <div id={ 'option' }>Third</div>
        </Expanding>
        <Expanding header={ 'Another Option' }>
            <div id={ 'option' }>Fourth</div>
            <div id={ 'option' }>Fifth</div>
        </Expanding>
    </div>
)}