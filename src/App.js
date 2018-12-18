import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Navbar from './navbar';
import MainPage from './mainPage';
import Restaurant from './restaurant';
import RestaurantList from './restaurantList';
import axios from 'axios';

const AUSTIN_API_KEY = '87af5db782fc51d23b90ba56c78073f9';
const ALLAN_API_KEY = 'cbd42604489219b47685ac90dd2b19ce';


class App extends Component {
  state = {
  
    restData:[],
    popularity:"",
    cityName:"",
    topFoods:[],
    singleRest:{},

  }




componentDidMount() {

var api;

navigator.geolocation.getCurrentPosition((position) => {
  api +=`lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
  this.getLocation(api, "irvine");
});

  }






 getLocation=(position,city)=> {
  


      var config = {
        headers: { "user-key": ALLAN_API_KEY }
      };

      axios.get("https://developers.zomato.com/api/v2.1/locations?query="+city+"&lat=" + position +"&count=5", config)

       
        .then(res => {
          for(var i = 0; i< res.data.location_suggestions.length;i++){
            if(res.data.location_suggestions[i].entity_type === "subzone"){
              console.log(res.data.location_suggestions[i])
              this.getFoodData(res.data.location_suggestions[i])
              break;

            }
            
          }
          

        })

      
     }




getFoodData = (data)=>{

  this.setState({cityName: data.title})

  var config = {
        headers: { "user-key": ALLAN_API_KEY }
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




getLocationFromZip = (zip,city) =>{

this.setState({restData:[]})
  alert(city);

  axios.get('https://us1.locationiq.com/v1/search.php?key=772ec16a0f4f17&q=' + zip + '&format=json')
      .then(response => {
         this.getLocation(`lat=${response.data[0].lat}&lon=${response.data[0].lon}`,city)
         alert(`lat=${response.data[0].lat}&lon=${response.data[0].lon}`)
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
        <script src="https://www.google.com/jsapi"></script>
       
        {
          this.state.restData && (
        <Switch>
              <Route exact path='/' render={(renderProps) => <MainPage restData={this.state.restData} popularity={this.state.popularity} cityName={this.state.cityName} callRestaurantPage={this.callRestaurantPage} getLocationFromZip={this.getLocationFromZip}/>} />
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
