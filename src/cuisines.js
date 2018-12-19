import React, { Component } from 'react';



//single Restaurant page
class Cuisines extends Component {
  state = {
   
    
  }



  render() {
    return (
      <div id='item'>
      <h1> Top Cuisines for {this.props.cityName}</h1>
      {this.props.cuisines.map((cuisine, index) => {
            return (
              <div key={index}>
                
                  {cuisine}
                  {cuisine.num_restaurant}
                  {cuisine.popularity}
                  {cuisine.nightlife_res}
                  {cuisine.nightlife_index}
                  <p>&nbsp;</p>
                  {/* <a href={restaurant.restaurant.photos_url} target="_blank">Menu</a> */}
                  <div id="pokeBox" className="float-left" key={index}>

                  </div>
    
              </div>
            )
          })}
       
    
      </div>
    );
  }
}

export default Cuisines;