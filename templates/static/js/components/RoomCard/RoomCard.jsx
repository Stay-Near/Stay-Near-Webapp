import React from 'react';
import M from 'materialize-css'

class RoomCard extends React.Component {

    componentDidMount() {}

    render() {
        return (
            <div className="col s12 m6">
                <div className="card horizontal">
                    <div className="card-image">
                        <img src="https://materializecss.com/images/sample-1.jpg"></img>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <h4 className="header">Sample Title</h4>
                            <p>Sample description text</p>
                        </div>
                        <div className="card-action">
                            <a href="#">Sample Link</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RoomCard;