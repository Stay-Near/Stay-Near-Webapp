import React from "react"
import Logo from "images/logo.png"
import { Link } from "react-router-dom"

class NavBar extends React.Component{
    render(){
        return(
          <div>
            <nav>
              <div className="nav-wrapper blue darken-2">
                <Link to="/" className="brand-logo"><img src={Logo} alt="logo" width="70"/></Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><Link to="#">Become a Host</Link></li>
                  <li><Link to="#">Help</Link></li>
                  <li><Link to="#">Sign Up</Link></li>
                  <li><Link to="#">Log in</Link></li>
                  <li><Link to="/profile">*temp profile*</Link></li>
                </ul>
              </div>
            </nav>
          </div>
        )
    }
}

export default NavBar
