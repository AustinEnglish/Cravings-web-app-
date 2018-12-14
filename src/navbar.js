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
               to='/'>Tasks&nbsp;&nbsp;&nbsp;
      </Link>

            <Link className = "link"
               to='/users'>Users&nbsp;&nbsp;&nbsp;
      </Link>


            <Link className = "link"
              to='/admin'>Admin&nbsp;&nbsp;&nbsp;
      </Link>

          </form>
        </nav>
         <div id="titlediv"><h1 >Tasks Manager</h1></div>
      </div>
    );
  }
}



export default Navbar;

