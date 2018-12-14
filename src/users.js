import React, { Component } from 'react';

import { connect } from 'react-redux';
import Tasks from './tasks';
import axios from 'axios';


class Users extends Component {
    state = {
        task: ""
    }


   componentDidMount() {

var config = {
  headers: {"user-key": '87af5db782fc51d23b90ba56c78073f9'}
};

axios.get("https://developers.zomato.com/api/v2.1/locations?query=irvine&lat=49.958443&lon=-110.273262&count=3",config)
    
      .then(res => {
        console.log(res.data);
        this.setState({
          data: res.data,
          count: 12
        })
      })
  }

   


    render() {
        return (
            <div id='item'>
                <h1>Page2</h1>
            </div>

        );
    }
}





export default Users;