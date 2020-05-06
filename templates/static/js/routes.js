import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from 'views/Home';
import Profile from 'views/Profile'
import NavBar from 'components/NavBar'
import LogInBox from "components/LogInBox"

// import more components
export default (
    <BrowserRouter>
     <div>
      <NavBar/>
      <Route exact path='/' component={Home} />
      <Route path='/profile' component={Profile} />
      <Route path='/login' component={LogInBox} />
     </div>
    </BrowserRouter>
);