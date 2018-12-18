import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


//main page that'll have all the data
class MainPage extends Component {
  state = {
    choice:"",
    redir: false,
    redirCuisines: false,
     redirRestList: false,
    zip: '',
    city:'',
    imageLoad: true,
    


    // restData:[], top ten restaurant array in obj
    // popularity:"", string
    // cityName:"", string
    // topFoods:[] 
  }




getImage =(data)=>{
  
  var array1 = [];

var unirest = require('unirest');
  unirest.get("https://cors-anywhere.herokuapp.com/https://contextualwebsearch-search-image-v1.p.rapidapi.com/api/Search/ImageSearchAPI?autocorrect=true&count=1&q=In-N-Out")
.header("X-RapidAPI-Key", "bcff5a2730msh7171bbdceb80891p1c3400jsn1ec6cd130e75")
.end(function (result) {
 console.log(result.body.value[0].url);

 
 
});



  
 


}


  redirectToRestaurantJS = (restaurant) => {
    this.props.callRestaurantPage(restaurant);
    this.setState({ redir: true })



  }

  redirectFunc = () => {

    if(this.state.choice === "restaurants"){
      this.props.getLocationFromZip(this.state.zip,this.state.city);
      this.setState({ redirRestList: true })

    }
    else if(this.state.choice === "cuisines"){
      //call function
      //set bool
    }
    
   
  }


  render() {
    return (
      <div id='item'>
        <div>
          {/* summary */}
          {/* map function for trending restaurant */}
          <h1>Top Trending Restaurants in <b>{this.props.cityName}</b> </h1>
          {this.props.restData.map((restaurant, index) => {
            return (
              <div key={index}>
                <button className="float-left" onClick={() => this.redirectToRestaurantJS(restaurant)}>
                  {restaurant.restaurant.name}
               
                  <p>&nbsp;</p>
                  {/* <a href={restaurant.restaurant.photos_url} target="_blank">Menu</a> */}
                  <div id="pokeBox" className="float-left" key={index}>

                  </div>
                </button>
              </div>
            )
          })}

          {
            this.state.redir && (
              <Redirect to={`/restaurant/`} />
            )
          }




        </div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <div>
          <h5>Find Restaurants</h5>
          <div>

          <select onChange={e => { this.setState({ choice: e.target.value }) } }>
            <option value="">Choose one</option>
            <option value="restaurants">top Restaurants</option>
            <option value="cuisines" >Top Cuisines</option>
          </select>
          
          <input type="text" placeholder="Search Zip..."  value={this.state.zip} onChange={(e) => this.setState({ zip: e.target.value })}/>
          
          <input type="text" placeholder="Search City..."  value={this.state.city} onChange={(e) => this.setState({ city: e.target.value })}/>
           <button type="button" className="btn btn-primary" onClick={this.redirectFunc}>Submit</button>
          </div>
         
        </div>
      </div>
    );
  }
}



export default MainPage;