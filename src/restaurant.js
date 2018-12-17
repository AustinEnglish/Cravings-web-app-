import React, { Component } from 'react';



//single Restaurant page
class Restaurant extends Component {
  state = {
   
  }


  render() {
    return (
      <div id='item'>
       <h1>Single Restaurant Data</h1>
      <p>{this.state.props.singleRest.restaurant.name}</p>
  
        {/* {this.props.map((restaurant, index) => {
          return(
            <div key={index}>
                <p>{this.restaurant.restaurant.name}</p>
                <a href={this.restaurant.restaurant.menu_url}>Menu</a>
                
            </div>
          )
        })} */}
      </div>
    );
  }
}

export default Restaurant;