import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Navbar from './navbar';
import MainPage from './mainPage';
import Restaurant  from './restaurant';
import RestaurantList from './restaurantList';
import axios from 'axios';



class App extends Component {
  state={

  }




// componentDidMount() {

// var config = {
//   headers: {"user-key": '87af5db782fc51d23b90ba56c78073f9'}
// };

// axios.get("https://developers.zomato.com/api/v2.1/locations?query=irvine&entity_type:subzone",config)
    
//       .then(res => {
//         console.log(res.data.location.suggestion);
//         this.setState({
//           data: res.data,
//           count: 12
//         })
//       })
//   }

redirectToRestaurantJS = (index) => {
  <Redirect to="/restaurant" />
}

redirectToRestaurantListJS = () => {
  <Redirect to="/resturantList" />
}


  render() {
    return (
      <div className = "mainContainer">
      <Navbar/>
        <Switch>
          <Route exact path='/' render={(renderProps) => <MainPage/>} />
        </Switch>
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






export default App 
