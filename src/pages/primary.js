import React from 'react';
import List from '../components/list';

export default () => { return (
    <List
        header={ 'created components' }
        data={[
            ['Dropdown Menu', '/dropdown'],
            ['Prompt Window', '/prompt'],
            ['Toast Messages', '/messages'],
            ['Mouseover Tooltips', '/tooltips'],
            ['Expanding Options', '/expanding']
        ]}
    />
)}