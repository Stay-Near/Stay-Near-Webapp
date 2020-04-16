import React from "react"
import Logo from "../../images/logo.png"

class NavBar extends React.Component{
    render(){
        return(
          <div>
            <nav>
              <div className="nav-wrapper blue darken-2">
                <a href="/" className="brand-logo"><img src={Logo} alt="logo" width="70"/></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="#">Become a Host</a></li>
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Sign Up</a></li>
                  <li><a href="#">Log in</a></li>
                  <li><a href="/profile">*temp profile*</a></li>
                </ul>
              </div>
            </nav>
            <br/>
          </div>
        )
    }
}

export default NavBar
