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
  


        {/* {this.props.restData.map((restaurant, index) => {
          return(
            <div key={index}>
                <p>{this.restaurant.restaurant.name}</p>
                <p>{this.restaurant.restaurant.location.address}</p>
                <p>Cuisines {this.restaurant.restaurant.cuisines}</p>
                <p>Average cost {this.restaurant.restaurant.currency}</p>
                <p>Average cost for two {this.restaurant.restaurant.currency}{this.restaurant.restaurant.average_cost_for_two}</p>
                <a href={this.restaurant.restaurant.menu_url}>Menu</a>
                <p>Rating {this.restaurant.restaurant.user_rating}</p>
            </div>
          )
        })} */}
      </div>
    );
  }
}

export default Restaurant;