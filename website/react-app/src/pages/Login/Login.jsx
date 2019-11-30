import React, { Component } from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

function validateEmail(email) {
    var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email_regex.test(String(email).toLowerCase());
}

//password validator checks for 1 lower, 1 upper, 1 digit, 1 special, at least 6 letter long
function validatePassword(password) {
    var password_regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
    return password_regex.test(String(password));
}

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            errorMessage: ""
        }
    }

    componentDidMount(){
        this.setState(state => ({

        }));
    }

    formIsValid = () => {        
        if(this.state.email === ""){
            this.setState({
                errorMessage: "Email field is required.",
            });
            return false;
        } 
        if (!validateEmail(this.state.email)) {
            this.setState({
                errorMessage: "Email invalid, should be in format you@example.com",
            });
            return false;
        } 
        //TODO check email with regex
        if(this.state.password === ""){
            this.setState({
                errorMessage: "Password field is required.",
            });
            return false;
        }        
        this.setState({
            errorMessage: "",
        });
        return true;
    }

    login = (event) => {
       
        event.preventDefault();
        if(this.formIsValid()){            
           //TODO auth with AWS cognito
           console.log("Form is valid")
        } else {
            console.log(this.state.errorMessage);
        }
        
    }

    updateState = (event) => {
        this.setState({[event.target.name]: event.target.value});
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
                            <p className="error-message" ref="errorMessage">{this.state.errorMessage}</p>
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
