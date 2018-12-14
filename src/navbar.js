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
               to='/'>Main Page&nbsp;&nbsp;&nbsp;
      </Link>

          </form>
        </nav>
         <div id="titlediv"><h1 >Project 2</h1></div>
      </div>
    );
  }
}



export default Navbar;

