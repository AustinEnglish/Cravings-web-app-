import React, { Component } from 'react';
import { Switch, Route,withRouter } from 'react-router-dom';
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

// axios.get("https://developers.zomato.com/api/v2.1/locations?query=irvine&lat=49.958443&lon=-110.273262&count=3",config)
    
//       .then(res => {
//         console.log(res.data);
//         this.setState({
//           data: res.data,
//           count: 12
//         })
//       })
//   }



  render() {
    return (
      <div className = "mainContainer">
      <Navbar/>
        <Switch>
              <Route exact path='/' render={(renderProps) => <MainPage/>} />
          </Switch>
      </div>
    );
  }
}






export default App 
