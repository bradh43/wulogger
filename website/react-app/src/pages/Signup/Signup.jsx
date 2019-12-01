import React, { Component } from 'react';
import './Signup.css';
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

class Signup extends Component {
    constructor(props){
        super(props);

        if(this.props.location.accountDetailsProps){
            this.state = {
                firstName: this.props.location.accountDetailsProps.firstName,
                lastName: this.props.location.accountDetailsProps.lastName,
                email: this.props.location.accountDetailsProps.email,
                displayName: this.props.location.accountDetailsProps.displayName,
                password: "",
                errorMessage: ""
            }
        } else {
            this.state = {
                firstName: "",
                lastName: "",
                email: "",
                displayName: "",
                password: "",
                errorMessage: ""
            }

        }
    }

    componentDidMount(){

        this.setState(state => ({

        }));
    }

    formIsValid = () => {   
        if(this.state.firstName === ""){
            this.setState({
                errorMessage: "First name field is required.",
            });
            return false;
        }      
        if(this.state.lastName === ""){
            this.setState({
                errorMessage: "Last name field is required.",
            });
            return false;
        } 
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
        if(this.state.displayName === ""){
            this.setState({
                errorMessage: "Display name field is required.",
            });
            return false;
        } 
        if(this.state.password === ""){
            this.setState({
                errorMessage: "Password field is required.",
            });
            return false;
        }   
        if (!validatePassword(this.state.password)) {
            this.setState({
                errorMessage: "Password must have 1 lower, 1 upper, 1 digit, 1 special, at least 6 letters long",
            });
            return false;
        } 
        if(this.state.reenterPassword === ""){
            this.setState({
                errorMessage: "Please reenter password",
            });
            return false;
        }       

        if(!(this.state.reenterPassword === this.state.password)){
            this.setState({
                errorMessage: "Passwords do not match",
            });
            return false;
        }  
        this.setState({
            errorMessage: "",
        });
        return true;
    }


    signup = (event) => {
       
        event.preventDefault();
        if(this.formIsValid()){            
           //TODO auth with AWS cognito to create account
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
                        <h1>Create a New Account</h1>
                        <form>
                            <input onChange={this.updateState} type="text" name="firstName" placeholder="First Name" value={this.state.firstName} required/>
                            <input onChange={this.updateState} type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} required/>
                            <input onChange={this.updateState} type="email" name="email" placeholder="Email" value={this.state.email} required/>
                            <input onChange={this.updateState} type="text" name="displayName" placeholder="Display Name" value={this.state.displayName} required/>

                            <input onChange={this.updateState} type="password" name="password" placeholder="Password" required/>
                            <input onChange={this.updateState} type="password" name="reenterPassword" placeholder="Reenter Password" required/>

                            <p className="error-message" ref="errorMessage">{this.state.errorMessage}</p>
                            <div className="button box" onClick={this.signup}>Create Account</div>
                            <Link
                                to={{
                                pathname: "/login",
                                accountDetailsProps: {
                                    firstName: String(this.state.firstName),
                                    lastName: String(this.state.lastName),
                                    email: String(this.state.email),
                                    displayName: String(this.state.displayName)
                                }
                            }}>
                                <div className="button box light">Login</div>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;
