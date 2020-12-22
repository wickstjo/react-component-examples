import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../interface/css/innerbody.scss';

// BASE PAGES
import Primary from '../pages/primary';
import Error from '../pages/error';

// CUSTOM PAGES
import Dropdown from '../pages/dropdown';
import Prompt from '../pages/prompt';

export default () => { return (
   <div id={ 'innerbody' }>
      <Switch>
         <Route exact path={ '/' } component={ Primary } />
         <Route path={ '/dropdown' } component={ Dropdown } />
         <Route path={ '/prompt' } component={ Prompt } />
         <Route component={ Error } />
      </Switch>
   </div>
)}