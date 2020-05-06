// HomePage
import React, {Component} from 'react';

//import styles from "./Home.css";
import BookingBox from 'components/BookingBox'
import styles from './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className={styles.bg}>
                    <div className="row">
                        <div className={styles.bb}>
                            <BookingBox/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
