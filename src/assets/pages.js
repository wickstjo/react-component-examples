import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Primary from '../pages/primary';
import Secondary from '../pages/secondary';
import Error from '../pages/error';

import '../interface/css/innerbody.scss';

export default () => { return (
   <div id={ 'innerbody' }>
      <Switch>
         <Route exact path={ '/' } component={ Primary } />
         <Route path={ '/secondary' } component={ Secondary } />
         <Route component={ Error } />
      </Switch>
   </div>
)}