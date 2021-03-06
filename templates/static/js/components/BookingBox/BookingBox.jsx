import React from "react";
import M from 'materialize-css'

class BookingBox extends React.Component {

    componentDidMount() {
        var elems = document.querySelectorAll('select');
        var instances = M
            .FormSelect
            .init(elems, {
                dropdownOptions: {
                    coverTrigger: false
                }
            });
    }

    render() {
        return (

            <div className="col s12 m2">
                <div className="card-panel white">
                    <div className="black-text col-content">
                        <h5>Book for a 1-night stay with students like you</h5>
                        <div className="col-content">
                            <div className="section">
                                <div className="input-field s12">
                                    <h6>State</h6>
                                    <select defaultValue="">
                                        <option value="" disabled>Choose a state</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="section">
                                <div className="input-field s12">
                                    <h6>School</h6>
                                    <select defaultValue="">
                                        <option value="" disabled>Choose a school</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-content section right-align">
                        <a href="#" className="btn purple">This is a link</a>
                    </div>
                </div>
            </div>

        );
    }
}

export default BookingBox;