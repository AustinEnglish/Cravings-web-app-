import React, { Component } from 'react';

import { connect } from 'react-redux';
import axios from 'axios';


class RestaurantList extends Component {
    state = {
        task: ""
    }


    render() {
        return (
            <div id='item'>
                <h1>Restaurant List</h1>
            </div>

        );
    }
}





export default RestaurantList;