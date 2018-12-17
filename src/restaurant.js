import React, { Component } from 'react';



//single Restaurant page
class Restaurant extends Component {
  state = {
   
  }


  render() {
    return (
      <div id='item'>
       <h1>Single Restaurant Data</h1>

       

      <p>{this.props.singleRest.name}</p>
  

      </div>
    );
  }
}

export default Restaurant;