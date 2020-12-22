import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Primary from '../pages/primary';
import Secondary from '../pages/secondary';
import Error from '../pages/error';

import Dropdown from '../pages/dropdown';
import Prompt from '../pages/prompt';

import '../interface/css/innerbody.scss';

export default () => { return (
   <div id={ 'innerbody' }>
      <Switch>
         <Route exact path={ '/' } component={ Primary } />
         <Route path={ '/secondary' } component={ Secondary } />
         <Route path={ '/dropdown' } component={ Dropdown } />
         <Route path={ '/prompt' } component={ Prompt } />
         <Route component={ Error } />
      </Switch>
   </div>
)}