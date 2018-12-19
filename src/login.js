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

    repeatImg = () => {
        for(let i = 0; i < 50; i++){
                return(
                <div class="flex-container">
                    <div class="image-container">
                        <img src='https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg' alt="" />  
                    </div>
                </div>
                );
        }
    }

    render() { 
        { return this.state.validLogin ? <Redirect to="/mainPage" /> : 
        ( 
            <div className="background-div">
                <div className="h1-tag">
                    <h1>Cravings</h1>
                </div>
                <form className="form-inline">
                    <div className="form-group username-div" >
                        <label>Username&nbsp;</label>
                        <input 
                            value={this.state.username} 
                            onChange={e => this.setState({username: e.target.value})} 
                            type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group password-div">
                        <label>Password&nbsp;</label>
                        <input 
                            value={this.state.password} 
                            onChange={e => this.setState({password: e.target.value})} 
                            type="password" className="form-control" placeholder="Password" />
                    </div>
                </form>
                <button 
                        className="btn btn-primary login-btn"
                        onClick={this.checkLogin}
                        >Login</button>
                <div>
                    <p>
                        What are you craving?
                    </p>
                </div>

            </div>
         );
        }
    }
}
 
export default Login;