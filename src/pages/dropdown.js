import React from 'react';
import Dropdown from '../components/dropdown';

export default () => { return (
    <div id={ 'inner' }>
        <Dropdown header={ 'LEFT ALIGN' }>
            <div id={ 'option' } onClick={() => { console.log('foo') }}>First</div>
            <div id={ 'option' } onClick={() => { console.log('bar') }}>Second</div>
            <div id={ 'option' } onClick={() => { console.log('biz') }}>Third</div>
        </Dropdown>
        <Dropdown header={ 'RIGHT ALIGN' }>
            <div id={ 'option' } onClick={() => { console.log('foo') }}>Fourth</div>
            <div id={ 'option' } onClick={() => { console.log('bar') }}>Fifth</div>
            <div id={ 'option' } onClick={() => { console.log('biz') }}>Sixth</div>
        </Dropdown>
    </div>
)}