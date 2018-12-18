import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class Login extends Component {
    state = { 
        username: '',
        password: '',
        validLogin: false
     }

    checkLogin = () => {
        this.componentDidMount1()
        var validLogin = this.props.login(this.state.username, this.state.password);
        this.setState({
            validLogin: validLogin,
        })
    }

    componentDidMount1 = () => {
        alert("here");
         var validLogin = this.props.login("", "");
        
    }

    render() { 
        { return this.state.validLogin ? <Redirect to="/mainPage" /> : 
        ( 
            <div>
            <h1>Login</h1>
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input 
                            value={this.state.username} 
                            onChange={e => this.setState({username: e.target.value})} 
                            type="text" className="form-control" placeholder="Enter username" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            value={this.state.password} 
                            onChange={e => this.setState({password: e.target.value})} 
                            type="password" className="form-control" placeholder="Password" />
                    </div>
                    <button 
                        className="btn btn-primary"
                        onClick={this.checkLogin}
                        >Login</button>
                </form>
            </div>
         );
        }
    }
}
 
export default Login;