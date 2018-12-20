import React, { Component } from 'react';
import GoogleImageSearch from './googlesearch';


//single Restaurant page
class Restaurant extends Component {
  state = {
    images: [],
    timer: null,
    counter: 0,

    dollarSign: this.props.singleRest.price_range
  }

  addDollar = (dollarSign) => {

    var newStr = '';
    while (dollarSign > 0) {
      newStr += "$"
      dollarSign--;
    }
    return newStr;
  }



  componentDidMount() {
    this.getImage(this.props.singleRest.name)
    let timer = setInterval(this.tick, 3000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    this.state.timer = null;
  }

  tick = () => {

    if (this.counter > 79) {
      this.setState({
        counter: 0
      });
    }

    else {
      this.setState({
        counter: this.state.counter + 1
      });

    }

  }



  getImage = (name) => {

    name += " yelp";

    GoogleImageSearch.searchImage(name)
      .then((response) => {
        console.log(response)
        for (var i = 0; i < response.length; i++) {
          this.setState({ images: [...this.state.images, response[i]] })
        }

      })


  }

  render() {
    return (
      <div id='rest-contain'>
        <div className="single-rest-div">
          <h1 className="single-title">Single Restaurant Data</h1>
          <table className="table table-bordered restTable">
            <thead>
              <tr className="table-header-background">
                <th><h1>Name</h1></th>
                <th><h1>Address</h1></th>
                <th><h1>Cuisine Types</h1></th>
                <th><h1>Price Range</h1></th>
                <th><h1>Rating</h1></th>
                 <th><h1>Random Images</h1></th>

              </tr>
            </thead>
            <tbody className="table-body-background">
              <td className="tableData"><h2>{this.props.singleRest.name}</h2></td>
              <td className="tableData"><h3>{this.props.singleRest.address}</h3></td>
              <td className="tableData"><h3>{this.props.singleRest.cuisines}</h3></td>
              <td className="tableData">
                <h4> dollars:{this.addDollar(this.state.dollarSign)}</h4>
                <h4>Average For two: ${this.props.singleRest.average_cost_for_two}</h4>
              </td>
              <td className="tableData">
                <h4>{this.props.singleRest.user_rating_num}/5.0</h4>
                <h4>{this.props.singleRest.user_rating_text}</h4>
                <h4>Votes: {this.props.singleRest.votes}</h4>
              </td>
              <td id="imagesDisplay">
                {this.state.images.length === 80 && (
                    <img id="revolvingImg" src={this.state.images[this.state.counter]} height="300" width="300" />
                )}

              </td>
            </tbody>
          </table>

        </div>

        <h5><a href={this.props.singleRest.url} target="blank"> More Photos</a></h5>
      </div>
    );
  }
}

export default Restaurant;