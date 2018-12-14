import React, { Component } from 'react';
import { Switch, Route,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { } from './actions';
import Navbar from './navbar';
import Tasks from './tasks';
import Admin from './admin';
import Users from './users';


class App extends Component {
  state={

  }

  render() {
    return (
      <div className = "mainContainer">
      <Navbar/>
        <Switch>
              <Route exact path='/' render={(renderProps) => <Tasks tasks={this.props.tasks}/>} />
              <Route path='/users' render={(renderProps) => <Users users={this.props.users}/>} />
              <Route path='/admin' render={(renderProps) => <Admin/>} />
            </Switch>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  tasks: state.taskList,
  users: state.users

 
});





export default withRouter( connect(mapStateToProps)(App)  )
