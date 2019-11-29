import React, { Component } from 'react';
import './Login.css';
import {Link} from 'react-router-dom';



class Login extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        this.setState(state => ({

        }));
    }

    render() {
        return(
            <div className="login">
                <div className="padding dark-text center-text">
                    <div className="card center">
                        <h1>Sign In to WULogger</h1>
                        <p>Enter your email address and password</p>
                        <form>
                            <input onChange={this.updateState} type="email" name="email" placeholder="Email" required/>
                            <input onKeyDown={this.enterKeyPress} onChange={this.updateState} type="password" name="password" placeholder="Password" required/>
                            <div className="button box" onClick={this.login}>Login</div>
                            <div className="button box light" onClick={this.signup}>Sign Up</div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
