import React, { Component } from 'react';



//single Restaurant page
class Restaurant extends Component {
  state = {
   
  }


  render() {
    return (
      <div id='item'>
       <h1>Single Restaurant Data</h1>
        {this.state.{/*what ever state is*/}.map((restaurant, index) => {
          return(
            <div key={index}>
                {/* what
                    data
                    do
                    we
                    display? */}
            </div>
          )
        })}
      </div>
    );
  }
}

export default Restaurant;