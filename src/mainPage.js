import React, { Component } from 'react';



//main page that'll have all the data
class MainPage extends Component {
  state = {
   
  }


//   redirectToRestaurantJS = (index) => {
//   <Redirect to="/restaurant" />
// }

// redirectToRestaurantListJS = () => {
//   <Redirect to="/resturantList" />
// }




  redirectToRestaurantJS = (index) => {
    <Redirect to="/restaurant" />
  }
  
  redirectToRestaurantListJS = () => {
    <Redirect to="/resturantList" />
  }
  

  render() {
    return (
      <div id='item'>
       
      </div>
    );
  }
}



export default MainPage;