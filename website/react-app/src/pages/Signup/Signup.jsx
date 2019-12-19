import React, { Component } from 'react';
import './Signup.css';
import {Link} from 'react-router-dom';
import {Input, TextField, InputAdornment, IconButton, Button} from '@material-ui/core';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';


function validateEmail(email) {
    var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email_regex.test(String(email).toLowerCase());
}

//password validator checks for 1 lower, 1 upper, 1 digit, 1 special, at least 6 letter long
function validatePassword(password) {
    var password_regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
    return password_regex.test(String(password));
}
const styles = theme => ({
    ...theme.formStyle
});
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
                errorMessage: "",
                firstNameError: false,
                lastNameError: false,
                emailError: false,
                displayNameError: false,
                passwordError: false,
                reenterPasswordError: false,
                showPassword: false,
                showReenterPassword: false
            }
        } else {
            this.state = {
                firstName: "",
                lastName: "",
                email: "",
                displayName: "",
                password: "",
                errorMessage: "",
                firstNameError: false,
                lastNameError: false,
                emailError: false,
                displayNameError: false,
                passwordError: false,
                reenterPasswordError: false,
                showPassword: false,
                showReenterPassword: false
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
                firstNameError: true,
            });
            return false;
        }     
        this.setState({
            firstNameError: false,
        }); 
        if(this.state.lastName === ""){
            this.setState({
                errorMessage: "Last name field is required.",
                lastNameError: true,
            });
            return false;
        } 
        this.setState({
            lastNameError: false,
        });
        if(this.state.email === ""){
            this.setState({
                errorMessage: "Email field is required.",
                emailError: true,
            });
            return false;
        } 
        if (!validateEmail(this.state.email)) {
            this.setState({
                errorMessage: "Email invalid, should be in format you@example.com",
                emailError: true,
            });
            return false;
        } 
        this.setState({
            emailError: false,
        }); 
        if(this.state.displayName === ""){
            this.setState({
                errorMessage: "Display name field is required.",
                displayNameError: true,
            });
            return false;
        } 
        this.setState({
            displayNameError: false,
        }); 
        if(this.state.password === ""){
            this.setState({
                errorMessage: "Password field is required.",
                passwordError: true,
            });
            return false;
        }   
        if (!validatePassword(this.state.password)) {
            this.setState({
                errorMessage: "Password must have 1 lower, 1 upper, 1 digit, 1 special, at least 6 letters long",
                passwordError: true
            });
            return false;
        } 
        this.setState({
            passwordError: false,
        }); 
        if(this.state.reenterPassword === ""){
            this.setState({
                errorMessage: "Please reenter password",
                reenterPasswordError: true,
            });
            return false;
        }  
        this.setState({
            reenterPasswordError: false,
        });     

        if(!(this.state.reenterPassword === this.state.password)){
            this.setState({
                errorMessage: "Passwords do not match",
                passwordError: true,
                reenterPasswordError: true,
            });
            return false;
        }  
        this.setState({
            errorMessage: "",
            passwordError: false,
            reenterPasswordError: false
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
    handleClickShowPassword = () => {
        this.setState({showPassword: !this.state.showPassword });
    };
    handleClickShowReenterPassword = () => {
        this.setState({showReenterPassword: !this.state.showReenterPassword });
    };
    
    handleMouseDown = (event) => {
        event.preventDefault();
    };


    render() {
        const {
            classes
        } = this.props;

        return(
            <div className="login">
                <div className="padding dark-text center-text">
                    <div className="card center">
                        <h1>Create a New Account</h1>
                        <p>Sign up for an account, it's free!</p>
                        <form noValidate autoComplete="off">
                            <TextField label="First Name" margin='dense' fullWidth={true} onChange={this.updateState} className={classes.textField} error={this.state.firstNameError} type="text" name="firstName" placeholder="Jeff" value={this.state.firstName} required/>
                            <TextField label="Last Name" margin='dense' fullWidth={true} onChange={this.updateState} className={classes.textField} error={this.state.lastNameError} type="text" name="lastName" placeholder="Stiles" value={this.state.lastName} required/>
                            <TextField label="Email" margin='dense' fullWidth={true} onChange={this.updateState} className={classes.textField} error={this.state.emailError} type="email" name="email" placeholder="you@wustl.edu" value={this.state.email} required/>
                            <TextField label="Display Name" margin='dense' fullWidth={true} onChange={this.updateState} className={classes.textField} error={this.state.displayNameError} type="text" name="displayName" placeholder="WaterOverRock" value={this.state.displayName} required/>
                            <Input
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                label="Password" 
                                fullWidth={true} 
                                margin='dense'
                                className={classes.inputField}                                
                                onKeyDown={this.enterKeyPress} 
                                onChange={this.updateState} 
                                name="password"
                                placeholder="Password"   
                                error={this.state.passwordError}                             
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={this.handleClickShowPassword}
                                        onMouseDown={this.handleMouseDown}
                                        >
                                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                required
                            />
                            <Input
                                type={this.state.showReenterPassword ? 'text' : 'password'}
                                value={this.state.reenterPassword}
                                label="Reenter Password" 
                                fullWidth={true} 
                                margin='dense'
                                className={classes.inputField}                                
                                onKeyDown={this.enterKeyPress} 
                                onChange={this.updateState}  
                                name="reenterPassword"
                                placeholder="Reenter Password"   
                                error={this.state.reenterPasswordError}                             
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={this.handleClickShowReenterPassword}
                                        onMouseDown={this.handleMouseDown}
                                        >
                                        {this.state.showReenterPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                required
                            />
                            <p className="error-message" ref="errorMessage">{this.state.errorMessage}</p>
                            <Button onClick={this.signup} variant="contained" color="primary" size="large" fullWidth={true} className={classes.button}>Create Account</Button>
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
                                <Button variant="contained" size="large" fullWidth={true} className={classes.button}>Already have an account? Login</Button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

// TODO:
// Look into this, might be because of no WIFI:
// 1.chunk.js:221363 Warning: A component is changing an uncontrolled input of type password to be controlled. 
// Input elements should not switch from uncontrolled to controlled (or vice versa). 
// Decide between using a controlled or uncontrolled input element for the lifetime of the component.
// More info: https://fb.me/react-controlled-components
// Weird it dissapeared after a bit, prolly google it or something

export default withStyles(styles)(Signup);


