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
       
       <h1>Single Restaurant Data</h1>
       <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Cuisine Types</th>
            <th>Price Range</th>
            <th>Raiting</th>
          </tr>
        </thead>
        <tbody>
          <th><h3>{this.props.singleRest.name}</h3></th>
            <td><h5>{this.props.singleRest.address}</h5></td>
            <td><h4>{this.props.singleRest.cuisines}</h4></td>
            <td>
              <h6>{this.addDollar(this.state.dollarSign)}</h6>
              <h6>Average For two ${this.props.singleRest.average_cost_for_two}</h6>
            </td>
            <td>
              <h6>{this.props.singleRest.user_rating_num}/5.0</h6>
              <h6>{this.props.singleRest.user_rating_text}</h6>
              <h6>Votes: {this.props.singleRest.votes}</h6>
            </td>
        </tbody>
       </table>
       <td><a href={this.props.singleRest.url} target="blank">Photos</a></td>
       
       
      </div>
    );
  }
}

export default Restaurant;