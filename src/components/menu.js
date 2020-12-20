import React from 'react';
import MenuItem from './menu/item';
import MenuTrigger from './menu/trigger';

import '../interface/css/menu.scss';

export default() => {

    function foo() {
        console.log('testing')
    }
    
    return (
        <div id="menu">
            <div>
                <MenuItem
                    header={ 'Primary' }
                    link={ '/' }
                />
                <MenuTrigger
                    header={ 'Secondary' }
                    func={ foo }
                />
            </div>
        </div>
    )
}