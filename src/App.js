import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Navbar from './navbar';
import MainPage from './mainPage';
import Restaurant from './restaurant';
import RestaurantList from './restaurantList';
import axios from 'axios';



class App extends Component {
  state = {
  
    restData:[],
    popularity:"",
    cityName:"",
    topFoods:[]

  }




componentDidMount() {

var api;

navigator.geolocation.getCurrentPosition((position) => {
  api += `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
  this.getLocation(api);
});

  }


 getLocation=(position)=> {
  

      var config = {
        headers: { "user-key": '87af5db782fc51d23b90ba56c78073f9' }
      };

      axios.get("https://developers.zomato.com/api/v2.1/locations?query=irvine&lat=" + position +"&count=4", config)

        .then(res => {

          this.getFoodData(res.data.location_suggestions[2])

        })

      
     }


getFoodData = (data)=>{

  console.log(data);
  this.setState({cityName: data.title})

  var config = {
        headers: { "user-key": '87af5db782fc51d23b90ba56c78073f9' }
      };

      axios.get("https://developers.zomato.com/api/v2.1/location_details?entity_id="+data.entity_id+"&entity_type=subzone",config)

        .then(res => {
          console.log(res.data.best_rated_restaurant);
          this.setState({
            cityName: data.title,
            restData: res.data.best_rated_restaurant,
            popularity: res.data.popularity,
            topFoods: res.data.popularity.top_cuisines
          })

        })

}

  render() {
    return (
      <div className="mainContainer">
        <Navbar />
        {
        this.state.restData &&(

          <p>this.state.restData[0].name</p>
        )
        }

        {
          this.state.restData && (
        <Switch>
          <Route exact path='/' render={(renderProps) => <MainPage restData={this.state.restData} popularity={this.state.popularity} cityName={this.state.cityName}/>} />
        </Switch>
       
       

          )}
          
      </div>
    );
  }
}






export default App 
