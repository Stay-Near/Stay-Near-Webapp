// HomePage
import React, { Component } from 'react';

import styles from "./Home.css";
import NavBar from '../../components/NavBar/NavBar'
import BookingBox from '../../components/BookingBox/BookingBox'

export default class Home extends Component {
   render() {
      return (
            <div className={styles.bg}>
               <NavBar/>
               <div className="row">
                  <div className={styles.pad}>
                     <BookingBox/>
                  </div>
               </div>

            </div>
       )
   }
};
