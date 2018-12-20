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
    images: [],
  }



  getImage2 = (name, index) => {

    GoogleImageSearch.searchImage(name)
      .then((response) => {
        this.setState({ images: [...this.state.images, index + response[0]] })
        console.log(index + response[0])
      })


  }

  organize = (index) => {


      for (var i = 0; i < this.state.images.length; i++) {

        if (this.state.images[i][0] == index) {

          return this.state.images[i].substr(1);

        }
      }

    
  }


  componentDidMount() {

    this.state.images = [];

  }



  redirectToRestaurantJS = (restaurant) => {
    this.state.images = [];
 
    this.props.callRestaurantPage(restaurant);
    this.setState({ redir: true })

  }

  redirectFunc = () => {

    this.state.images = [];
  

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
        {
          this.state.images.length < 10 && (
              <div id="loadingIcon"><img src={loadingGif} alt='' /></div>
          )}


        {this.state.images.length === 0 && (
          this.props.restData.map((name, index) => {
            return (
              <div id="element" key={index}>
                {this.getImage2(name.restaurant.name, index)}

              </div>

            )
          })
        )}

        <div>
          {this.state.images.length == 10 && (
            


            <div id='mainpage'>
          {this.state.loading = false}
              <div className="single-rest-div">

                <h1 id="title">Top Trending Restaurants in <b>{this.props.cityName}</b> </h1>


                {this.props.restData.map((restaurant, index) => {

                  return (

                    <div id="image" className="float-left" key={index}>
                      <button id="imageButton" onClick={() => this.redirectToRestaurantJS(restaurant)}>
                        <div id="paddingBox">
                          <div id="restText"><b>{restaurant.restaurant.name}</b></div>

                          <img id="backgroundImage" src={this.organize(index)} />
                        </div>

                      </button>
                    </div>
                  )
                })}


              </div>
            </div>

          )}
          <p>&nbsp;</p>

        </div>

        <div id="search">
          <h5>Find Restaurants</h5>
          <div id="searchFields">

            <input className="searchInfo" type="text" placeholder="Search Zip..." value={this.state.zip} onChange={(e) => this.setState({ zip: e.target.value })} />


            <input className="searchInfo" type="text" placeholder="Search City..." value={this.state.city} onChange={(e) => this.setState({ city: e.target.value })} />

            <select className="searchInfo" onChange={e => { this.setState({ choice: e.target.value }) } }>
              <option value="">Choose one</option>
              <option value="restaurants">Top Restaurants</option>
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