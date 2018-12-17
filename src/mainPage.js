import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';


//main page that'll have all the data
class MainPage extends Component {
  state = {

    restaurant: {},
    redirRestPage :false

    // restData:[], top ten restaurant array in obj
    // popularity:"", string
    // cityName:"", string
    // topFoods:[] 
  }



  redirectToRestaurantJS = (restaurant) => {
    alert("Made it here");
    //<Redirect to={`/restaurant/${restaurant.restaurant.name}`}/>
    this.setState({redirRestPage:true, restaurant:restaurant})
     
  }
  
  redirectToRestaurantListJS = () => {
    <Redirect to="/resturantList"/>
  }
  

  render() {
    return (
      <div id='item'>
       <div>
            {/* summary */}
  {/*<a href={restaurant.restaurant.menu_url}>Menu{/* onClick={ () => this.redirectToRestaurantJS(index)}*/}}
            {/* map function for trending restaurant */}
            <h1>Top Trending Restaurants in <b>{this.props.cityName}</b> </h1>
            {this.props.restData.map((restaurant, index) => {
              return(
                <div key={index}>
                <button className="float-left"  onClick={()=>this.redirectToRestaurantJS(restaurant)}> 
                   {restaurant.restaurant.name}
                   <p>&nbsp;</p>
                <div id="pokeBox" className="float-left" key={index}>
                 
                </div>
                 </button>
                </div>
              )
            })}

            {
              this.state.redirRestPage && (
              <Redirect to={`/restaurant/${this.state.restaurant}`}/>
              )

            }

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