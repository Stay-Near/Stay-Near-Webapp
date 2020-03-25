// HomePage
import React, { Component } from 'react';

import Profile from './Profile/Profile';

export default class Home extends Component {
   render() {
      return (
         <div className="container">
            <Profile />
         </div>
       )
   }
};