import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';


//main page that'll have all the data
class MainPage extends Component {
  state = {
    // restData:[], top ten restaurant array in obj
    // popularity:"", string
    // cityName:"", string
    // topFoods:[] 
  }



  redirectToRestaurantJS = (restaurant) => {
    alert("Made it here");
    <Redirect to={`/restaurant/${restaurant.restaurant.name}`}/>
  }
  
  redirectToRestaurantListJS = () => {
    <Redirect to="/resturantList"/>
  }
  

  render() {
    return (
      <div id='item'>
       <div>
            {/* summary */}
            {/* map function for trending restaurant */}
            <h1>Top Trending Restaurants in <b>{this.props.cityName}</b> </h1>
            {this.props.restData.map((restaurant, index) => {
              return(
                <div key={index}>
                  <p>{restaurant.restaurant.name}</p>
                  <a href={restaurant.restaurant.menu_url}>Menu{/* onClick={ () => this.redirectToRestaurantJS(index)}*/}</a>
                </div>
              )
            })}
            {console.log(this.props.restData)}
          </div>
           <p>&nbsp;</p>
            <p>&nbsp;</p>
          <div>
            <h5>Find Restaurants</h5>
            <input type="text" placeholder="Search.."/>
            <button type="button" className="btn btn-primary" onClick={this.redirectToRestaurantListJS()}>Submit</button>
            <select className="custom-select-md">
              <option>dropdown</option>
              <option value="1">some</option>
              <option value="2">text</option>
              <option value="3">hello</option>
            </select>
          </div>
      </div>
    );
  }
}



export default MainPage;