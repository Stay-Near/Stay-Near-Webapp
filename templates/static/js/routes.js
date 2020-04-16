import React from 'react';
import { HashRouter, Route, hashHistory, BrowserRouter } from 'react-router-dom';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile'

// import more components
export default (
    <BrowserRouter history={hashHistory}>
     <div>
      <Route exact path='/' component={Home} />
      <Route path='/profile' component={Profile} />
     </div>
    </BrowserRouter>
);