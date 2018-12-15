import React, { Component } from 'react';



//main page that'll have all the data
class MainPage extends Component {
  state = {
   
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
            {this.state.{/*what ever state is*/}.map((restaurant, index) => {
              return(
                <div key={index}>
                  <img src={Restaurant.featured_image} onClick={ () => this.redirectToRestaurantJS(index)}/>
                </div>
              )
            })}
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