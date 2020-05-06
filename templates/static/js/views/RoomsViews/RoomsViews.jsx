// RoomsViews
import React, {Component} from 'react';

//import styles from "./RoomsViews.css";
import BookingBox from 'components/BookingBox'
import RoomCard from 'components/RoomCard'
import styles from './RoomsViews.css'

export default class RoomsViews extends Component {
    render() {
        return (
            <div>
                <div className={styles.bg}>
                    <div className="row">
                        <div className={styles.bb}>
                            <BookingBox/>
                            <div className="col s8">
                                <div className="Row">
                                    <RoomCard/>
                                    <RoomCard/>
                                    <RoomCard/>
                                    <RoomCard/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
