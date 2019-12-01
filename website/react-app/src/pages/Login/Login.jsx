import React, { Component } from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

function validateEmail(email) {
    var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email_regex.test(String(email).toLowerCase());
}

class Login extends Component {
    constructor(props){
        super(props);

        if(this.props.location.accountDetailsProps){
            this.state = {
                firstName: this.props.location.accountDetailsProps.firstName,
                lastName: this.props.location.accountDetailsProps.lastName,
                email: this.props.location.accountDetailsProps.email,
                displayName: this.props.location.accountDetailsProps.displayName,
                password: "",
                errorMessage: "",
                emailErrorClass: "",
                passwordErrorClass: ""
            }
        } else {
            this.state = {
                firstName: "",
                lastName: "",
                email: "",
                displayName: "",
                password: "",
                errorMessage: "",
                emailErrorClass: "",
                passwordErrorClass: ""
            }

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
                emailErrorClass: "error"
            });
            return false;
        } 
        if (!validateEmail(this.state.email)) {
            this.setState({
                errorMessage: "Email invalid, should be in format you@example.com",
                emailErrorClass: "error"
            });
            return false;
        } 
        this.setState({
            emailErrorClass: ""
        });
        if(this.state.password === ""){
            this.setState({
                errorMessage: "Password field is required.",
                passwordErrorClass: "error"
            });
            return false;
        }        
        this.setState({
            errorMessage: "",
            passwordErrorClass: ""
        });
        return true;
    }

    login = (event) => {
       
        event.preventDefault();
        if(this.formIsValid()){            
           //TODO auth with AWS cognito to login
            console.log("Form is valid")
        } else {
            console.log(this.state.errorMessage);
        }
        
    }

    updateState = (event) => {
        this.setState({[event.target.name]: String(event.target.value)});
    }

    render() {
        return(
            <div className="login">
                <div className="padding dark-text center-text">
                    <div className="card center">
                        <h1>Sign In to WULogger</h1>
                        <p>Enter your email address and password</p>
                        <form>
                            <input className={this.state.emailErrorClass} onChange={this.updateState} type="email" name="email" placeholder="Email" value={this.state.email} required/>
                            <input className={this.state.passwordErrorClass} onKeyDown={this.enterKeyPress} onChange={this.updateState} type="password" name="password" placeholder="Password" required/>
                            <p className="error-message" ref="errorMessage">{this.state.errorMessage}</p>
                            <div className="button box" onClick={this.login}>Login</div>
                            <Link
                                to={{
                                pathname: "/signup",
                                accountDetailsProps: {
                                    firstName: String(this.state.firstName),
                                    lastName: String(this.state.lastName),
                                    email: String(this.state.email),
                                    displayName: String(this.state.displayName)                                }
                            }}>
                                <div className="button box light">Sign Up</div>
                            </Link>
                        </form>
                        <a href="https://www.google.com"><p>I forgot my password</p></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
