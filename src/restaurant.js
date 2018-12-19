import React, { Component } from 'react';


//single Restaurant page
class Restaurant extends Component {
  state = {
   
    dollarSign: this.props.singleRest.price_range
  }

  addDollar = (dollarSign) => {
  
    var newStr = '';
    while(dollarSign >0 ){
      newStr += "$"
      dollarSign --;
    }
    console.log(newStr)
    return newStr;
  }

  render() {
    return (
      <div id='item'>
       <div className="single-rest-div">
        <h1>Single Restaurant Data</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th><h1>Name</h1></th>
              <th><h1>Address</h1></th>
              <th><h1>Cuisine Types</h1></th>
              <th><h1>Price Range</h1></th>
              <th><h1>Raiting</h1></th>
            </tr>
          </thead>
          <tbody>
            <th><h2>{this.props.singleRest.name}</h2></th>
              <td><h3>{this.props.singleRest.address}</h3></td>
              <td><h3>{this.props.singleRest.cuisines}</h3></td>
              <td>
                <h4>{this.addDollar(this.state.dollarSign)}</h4>
                <h4>Average For two ${this.props.singleRest.average_cost_for_two}</h4>
              </td>
              <td>
                <h4>{this.props.singleRest.user_rating_num}/5.0</h4>
                <h4>{this.props.singleRest.user_rating_text}</h4>
                <h4>Votes: {this.props.singleRest.votes}</h4>
              </td>
          </tbody>
        </table>
        <td><h5><a href={this.props.singleRest.url} target="blank">Photos</a></h5></td>
      </div>
       
      </div>
    );
  }
}

export default Restaurant;