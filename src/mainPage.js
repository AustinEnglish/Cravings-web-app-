import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import burger from './images/burger.jpg'
import rest from './images/rest.jpg'
import cafe from './images/cafe.jpg'
import loadingGif from './images/loading.gif'
import GoogleImageSearch from './googlesearch';


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


  getImage2 = () =>{

var imageUrl = '';
    GoogleImageSearch.searchImage('dog')
            .then((response) => { 
                imageUrl: response[0]
                console.log(response[0])
            })

     var url = GoogleImageSearch.searchImage("dog");
     console.log(url);
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
      <div>
      <p>{this.getImage2()}</p>
        <div id='mainpage'>
          <div>
           
            <h1 id="title">Top Trending Restaurants in <b>{this.props.cityName}</b> </h1>

       
              {this.props.restData.map((restaurant, index) => {
                
                return (
                  
                  <div id="image" className="float-right" key={index}>
                    <button id="imageButton" onClick={() => this.redirectToRestaurantJS(restaurant)}>
                      <div id="paddingBox">
                        <div id="restText"><b>{restaurant.restaurant.name}</b></div>
                        <img id="backgroundImage" src={this.getImage(restaurant.restaurant.name)} alt=""/>
                      </div>
                      
                    </button>
                  </div>
                )
              })}
            

          </div>
        </div>

        <div id="search">
          <h5>Find Restaurants</h5>
          <div id="searchFields">

            <input className="searchInfo" type="text" placeholder="Search Zip..." value={this.state.zip} onChange={(e) => this.setState({ zip: e.target.value })} />


            <input className="searchInfo" type="text" placeholder="Search City..." value={this.state.city} onChange={(e) => this.setState({ city: e.target.value })} />

            <select className="searchInfo" onChange={e => { this.setState({ choice: e.target.value }) } }>
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