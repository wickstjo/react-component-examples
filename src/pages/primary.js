import React from 'react';
import Dropdown from '../components/dropdown';

export default () => { return (
    <div id={ 'inner' }>
        <Dropdown header={ 'This is a Trigger' }>
            <div id={ 'option' } onClick={() => { console.log('foo') }}>First</div>
            <div id={ 'option' } onClick={() => { console.log('bar') }}>Second</div>
            <div id={ 'option' } onClick={() => { console.log('biz') }}>Third</div>
        </Dropdown>
        <br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br />
        <Dropdown header={ 'Another Trigger' }>
            <div id={ 'option' } onClick={() => { console.log('foo') }}>First</div>
            <div id={ 'option' } onClick={() => { console.log('bar') }}>Second</div>
            <div id={ 'option' } onClick={() => { console.log('biz') }}>Third</div>
        </Dropdown>
    </div>
)}