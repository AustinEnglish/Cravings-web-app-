import React, { Component } from 'react';
import { Switch, Route, withRouter,Redirect } from 'react-router-dom';
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
    topFoods:[],

    // singleRest: {
    //   name:'',
    //   url :'',
    //   user_rating_num: '',
    //   user_rating_text: '',
    //   votes: '',
    //   address: '',
    //   cuisines: '',
    //   price_range:'',
    //   average_cost_for_two: ''

    // }
    singleRest:{}

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


callRestaurantPage = (rest)=>{
var tempObj = {}
tempObj.name = rest.restaurant.name
tempObj.url = rest.restaurant.url
tempObj.user_rating_num = rest.restaurant.user_rating.aggregate_rating;
tempObj.user_rating_text = rest.restaurant.user_rating.rating_text;
tempObj.votes = rest.restaurant.user_rating.votes;
tempObj.address = rest.restaurant.location.address + ", " + rest.restaurant.location.locality + ", " + rest.restaurant.location.city
tempObj.cuisines = rest.restaurant.cuisines
tempObj.price_range = rest.restaurant.price_range
tempObj.average_cost_for_two = rest.restaurant.average_cost_for_two



  this.setState({
    ...this.state,

    singleRest: tempObj
          
},()=>console.log(this.state.singleRest.name))





}

  render() {
    return (
      <div className="mainContainer">
        <Navbar />
       
        {
          this.state.restData && (
        <Switch>
              <Route exact path='/' render={(renderProps) => <MainPage restData={this.state.restData} popularity={this.state.popularity} cityName={this.state.cityName} callRestaurantPage={this.callRestaurantPage}/>} />
               <Route path='/restaurant/' render={(renderProps) => <Restaurant singleRest={this.state.singleRest}/>} />
            )
          }
             
          }
        </Switch>
       
       
       

          )}

          
      </div>
    );
  }
}






export default App 
