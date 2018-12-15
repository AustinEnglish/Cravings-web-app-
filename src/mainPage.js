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

  redirectToRestaurantJS = (index) => {
    <Redirect to="/restaurant" />
  }
  
  redirectToRestaurantListJS = () => {
    <Redirect to="/resturantList" />
  }
  
  render() {
    return (
      <div id='item'>
       <h1>Main Page</h1>
       <div>
            {/* summary */}
            <div>
              <p>Restaurant decider app. Detailed informations on specific restaurants</p>
            </div>
            {/* map function for trending restaurant */}
            <h1>Top Trending Restaurant</h1>
            {this.props.restData.map((restaurant, index) => {
              return(
                <div key={index}>
                  <p>{restaurant.name}</p>
                  <img src={restaurant.image} onClick={ () => this.redirectToRestaurantJS(index)}/>
                </div>
              )
            })}
            {console.log(this.props.restData)}
          </div>
          <div>
            <h1>Find Restaurant</h1>
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