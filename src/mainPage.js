import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import burger from './images/burger.jpg'
import rest from './images/rest.jpg'
import cafe from './images/cafe.jpg'
import loadingGif from './images/loading.gif'


//main page that'll have all the data
class MainPage extends Component {
  state = {
    choice: "",
    redir: false,
    redirCuisines: false,
    zip: '',
    city: '',

    imageLoad: true,



    imageExist: false,


    // restData:[], top ten restaurant array in obj
    // popularity:"", string
    // cityName:"", string
    // topFoods:[] 
  }




  getImage = (name) => {
    if (name.toLowerCase().includes("burger")) {

      return (burger)
    }
    else if (name.toLowerCase().includes("cafe")) {

      return (cafe)
    }
    else {
      return (rest)

    }

  }




  redirectToRestaurantJS = (restaurant) => {
    this.props.callRestaurantPage(restaurant);
    this.setState({ redir: true })

  }

  redirectFunc = () => {

    if (this.state.choice === "restaurants") {
      this.props.getLocationFromZip(this.state.zip, this.state.city);


    }
    else if (this.state.choice === "cuisines") {
      this.props.getLocationFromZip(this.state.zip, this.state.city);
      this.setState({ redirCuisines: true })
    }

  }

  render() {
    return (
      <div id='mainpage'>
        <p>&nbsp;</p>
        <div>
          {/* summary */}
          {/* map function for trending restaurant */}
          <h1 id="title">Top Trending Restaurants in <b>{this.props.cityName}</b> </h1>

          <div id="images">
            {this.props.restData.map((restaurant, index) => {
              return (
                <div id="image" className="float-right" key={index}>
                  <button id="imageButton" onClick={() => this.redirectToRestaurantJS(restaurant)}>
                    <p>&nbsp;</p>
                    <div id="restText"><b>{restaurant.restaurant.name}</b></div>
                    <img id="backgroundImage" src={this.getImage(restaurant.restaurant.name)} height="100" width="100" />

                    <p>&nbsp;</p>
                    {/* <a href={restaurant.restaurant.photos_url} target="_blank">Menu</a> */}
                    <div id="pokeBox" className="float-left" key={index}>

                    </div>
                  </button>
                </div>
              )
            })}
          </div>

        </div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <div id="search">
          <h5>Find Restaurants</h5>
          <div id="searchFields">
           <p>&nbsp;</p>
  
            <input className ="searchInfo" type="text" placeholder="Search Zip..." value={this.state.zip} onChange={(e) => this.setState({ zip: e.target.value })} />
           

            <input className ="searchInfo" type="text" placeholder="Search City..." value={this.state.city} onChange={(e) => this.setState({ city: e.target.value })} />

            <select className ="searchInfo" onChange={e => { this.setState({ choice: e.target.value }) } }>
              <option value="">Choose one</option>
              <option value="restaurants">top Restaurants</option>
              <option value="cuisines" >Top Cuisines</option>
            </select>
            <button type="button" className="btn btn-primary searchInfo" onClick={this.redirectFunc}>Submit</button>
          </div>

        </div>


        {
          this.state.redir && (
            <Redirect to={`/restaurant/`} />
          )
        }

        {
          this.state.redirCuisines && (
            <Redirect to={`/cuisines/`} />
          )
        }

      </div>
    );
  }
}



export default MainPage;