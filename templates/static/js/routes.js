import React from 'react';
import { Route, hashHistory, BrowserRouter } from 'react-router-dom';
import Home from 'views/Home';
import Profile from 'views/Profile'
import NavBar from 'components/NavBar'

// import more components
export default (
    <BrowserRouter history={hashHistory}>
     <div>
      <NavBar/>
      <Route exact path='/' component={Home} />
      <Route path='/profile' component={Profile} />
     </div>
    </BrowserRouter>
);