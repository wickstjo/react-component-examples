import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "./assets/context";

import Init from './assets/init';
import Pages from './assets/pages';
import Menu from './components/menu';

import './interface/css/general.scss';

export default () => { return (
   <BrowserRouter>
      <Provider>
         <Init />
         <Menu />
         <Pages />
      </Provider>
   </BrowserRouter>
)}
