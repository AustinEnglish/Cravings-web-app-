import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './navbar';
import MainPage from './mainPage';
import Restaurant from './restaurant';
import Cuisines from './cuisines';
import Login from './login';
import axios from 'axios';
import './App.css';
import loadingGif from './images/loading.gif'

const AUSTIN_API_KEY = '87af5db782fc51d23b90ba56c78073f9';
const ALLAN_API_KEY = 'cbd42604489219b47685ac90dd2b19ce';


class App extends Component {
  state = {

    restData: [],
    popularity: "",
    cityName: "",
    topFoods: [],
    singleRest: {},
    loggedIn: false,
    loading: false,
    numRest: "",
    nightLifeIndex: "",

    users: [
      {
        username: '123',
        password: '123'
      },
      {
        username: '246',
        password: '246'
      }
    ]


  }


  login = (username, password) => {
    for (var user of this.state.users) {
      if (user.username === username && user.password === password) {
        this.setState({ loggedIn: true })
        this.componentDidMount1();
        return true;

      }
    }
    this.setState({ loggedIn: false })
    return false;

  }

  componentDidMount1 = () => {

this.setState({loading:true})

    var api;

    navigator.geolocation.getCurrentPosition((position) => {
      api += `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
      this.getLocation(api, "irvine");
    });

  }







  getLocation = (position, city) => {


    var config = {
      headers: { "user-key": ALLAN_API_KEY }
    };

    axios.get("https://developers.zomato.com/api/v2.1/locations?query=" + city + "&lat=" + position + "&count=5", config)


      .then(res => {
        for (var i = 0; i < res.data.location_suggestions.length; i++) {
          if (res.data.location_suggestions[i].entity_type === "subzone") {
            console.log(res.data.location_suggestions[i])
            this.getFoodData(res.data.location_suggestions[i])
            break;

          }

        }


      })


  }




  getFoodData = (data) => {


    this.setState({ cityName: data.title })

    var config = {
      headers: { "user-key": ALLAN_API_KEY }
    };

    axios.get("https://developers.zomato.com/api/v2.1/location_details?entity_id=" + data.entity_id + "&entity_type=subzone", config)

      .then(res => {
        console.log(res.data);
        this.setState({
          cityName: data.title,
          restData: res.data.best_rated_restaurant,
          popularity: res.data.popularity,
          topFoods: res.data.top_cuisines,
          numRest: res.data.num_restaurant,
          nightLifeIndex: res.data.nightlife_index
        }, () => console.log(this.state.topFoods))

      })

      this.setState({loading:false})

  }




  getLocationFromZip = (zip, city) => {

    this.setState({loading:true})

    this.setState({ restData: [] })
    alert(city);

    axios.get('https://us1.locationiq.com/v1/search.php?key=772ec16a0f4f17&q=' + zip + '&format=json')
      .then(response => {
        this.getLocation(`lat=${response.data[0].lat}&lon=${response.data[0].lon}`, city)
        alert(`lat=${response.data[0].lat}&lon=${response.data[0].lon}`)
      })
  }


  callRestaurantPage = (rest) => {
    var tempObj = {}
    tempObj.name = rest.restaurant.name
    tempObj.url = rest.restaurant.photos_url
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

    }, () => console.log(this.state.singleRest.name))





  }

  render() {
    return (
      <div>
  
        {
          this.state.loggedIn && (
           <Navbar />
          )

        }

        {
          this.state.loading && (
            <div id="mainContainer">
            <p>&nbsp;</p>
            <p>&nbsp;</p>
           <div id="loadingIcon"><img  src={loadingGif} alt='' /></div>
           </div>
          )

        }

        {
          this.state.restData && (
            <div>
              <Switch>
                <Route exact path='/' render={(renderProps) => <Login login={this.login} />} />
                <div id="componentContainer">
                <Route path='/mainPage/' render={(renderProps) => <MainPage restData={this.state.restData} popularity={this.state.popularity} cityName={this.state.cityName} callRestaurantPage={this.callRestaurantPage} getLocationFromZip={this.getLocationFromZip} />} />
                <Route path='/restaurant/' render={(renderProps) => <Restaurant singleRest={this.state.singleRest} />} />
                <Route path='/cuisines/' render={(renderProps) => <Cuisines cuisines={this.state.topFoods} cityName={this.state.cityName} popularity={this.state.popularity} numRest={this.state.numRest} numRest={this.state.numRest} nightLifeIndex={this.state.nightLifeIndex}/>} />
                </div>
              </Switch>
            </div>




          )}


      </div>
    );
  }
}






export default App 
