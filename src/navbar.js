import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  state = {


  }

  render() {
    return (
      <div id= "navContainer">
        <nav id="nav" className="navbar navbar-dark bg-lig float-right">
          <form className="form-inline">

            <Link className = "link"
               to='/mainPage'>Main Page&nbsp;&nbsp;&nbsp;
            </Link>
            
            <Link className = "link"
              to='/'>Log Out&nbsp;&nbsp;&nbsp;
            </Link>


          </form>
        </nav>
         <h1 className = "link" >Restaruant Finder</h1>
      </div>
    );
  }
}



export default Navbar;

