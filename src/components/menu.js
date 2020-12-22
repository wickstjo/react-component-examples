import React from 'react';
import MenuItem from './menu/item';
import MenuTrigger from './menu/trigger';
import '../interface/css/menu.scss';

export default() => {

    // TRIGGER FUNCTION
    function foo() {
        console.log('testing')
    }
    
    return (
        <div id="menu">
            <div>
                <MenuItem
                    header={ 'Components' }
                    link={ '/' }
                />
                <MenuTrigger
                    header={ 'Effect Trigger' }
                    func={ foo }
                />
            </div>
        </div>
    )
}