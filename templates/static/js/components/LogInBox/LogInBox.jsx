import React from 'react'
import { Link } from "react-router-dom"

class LogInBox extends React.Component{

    render() {

        const { modal } = this.props.location.state

        return (
            <div className={modal ? "modal" : undefined}>
              {modal && <Link to="/">Close</Link>}
              <div>
                <p>lolz</p>
              </div>
            </div>
          );
    }

};

export default LogInBox;