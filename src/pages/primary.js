import React from 'react';
import Project from '../components/project';

export default () => { return (
    <div id={ 'inner' }>
        <Project header={ 'Dropdown Menu' }  to={ '/dropdown' } />
        <Project header={ 'Prompt Window' }  to={ '/prompt' } />
    </div>
)}