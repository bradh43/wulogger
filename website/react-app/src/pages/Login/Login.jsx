import React, { Component } from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import {Input, TextField, InputAdornment, IconButton, Button} from '@material-ui/core';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';


function validateEmail(email) {
    var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email_regex.test(String(email).toLowerCase());
}
const styles = theme => ({
    ...theme.formStyle
});
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
                passwordErrorClass: "",
                showPassword: false
            }
        } else {
            this.state = {
                firstName: "",
                lastName: "",
                email: "",
                displayName: "",
                password: "",
                errorMessage: "",
                emailError: false,
                passwordError: false,
                showPassword: false
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
                emailError: true
            });
            return false;
        } 
        if (!validateEmail(this.state.email)) {
            this.setState({
                errorMessage: "Email invalid, should be in format you@example.com",
                emailError: true
            });
            return false;
        } 
        this.setState({
            emailError: false
        });
        if(this.state.password === ""){
            this.setState({
                errorMessage: "Password field is required.",
                passwordError: true
            });
            return false;
        }        
        this.setState({
            errorMessage: "",
            passwordError: false
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

    handleClickShowPassword = () => {
        this.setState({showPassword: !this.state.showPassword });
    };
    
    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };


    

    render() {

        const {
            classes
        } = this.props;

        return(
            
            <div className="login">
                <div className="padding dark-text center-text">
                    <div className="card center">
                        <h1>Sign In to WULogger</h1>
                        <p>Enter your email address and password</p>
                        <form noValidate autoComplete="off">
                            <TextField label="Email" margin='dense' fullWidth={true} onChange={this.updateState} className={classes.textField} error={this.state.emailError} type="email" name="email" placeholder="you@wustl.edu" value={this.state.email} required/>
                            {/* <TextField label="Password" fullWidth={true} className={this.state.passwordErrorClass} onKeyDown={this.enterKeyPress} onChange={this.updateState} type="password" name="password" placeholder="Password" required/> */}
                            <Input
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                label="Password" 
                                fullWidth={true} 
                                margin='dense'
                                className={classes.inputField}                                
                                onKeyDown={this.enterKeyPress} 
                                onChange={this.handleChange} 
                                name="password" 
                                placeholder="Password"   
                                error={this.state.passwordError}                             
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={this.handleClickShowPassword}
                                        onMouseDown={this.handleMouseDownPassword}
                                        >
                                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                required
                            />
                            <p className="error-message" ref="errorMessage">{this.state.errorMessage}</p>
                            {/* <div className="button box" onClick={this.login}>Login</div> */}
                            {/* <Link
                                to={{
                                pathname: "/signup",
                                accountDetailsProps: {
                                    firstName: String(this.state.firstName),
                                    lastName: String(this.state.lastName),
                                    email: String(this.state.email),
                                    displayName: String(this.state.displayName)                                
                                }
                            }}>
                                <div className="button box light">Sign Up</div>
                            </Link> */}
                            <Button onClick={this.login} variant="contained" color="primary" size="large" fullWidth={true} className={classes.button}>Login</Button>

                            <div>
                                <Link
                                    to={{
                                    pathname: "/signup",
                                    accountDetailsProps: {
                                        firstName: String(this.state.firstName),
                                        lastName: String(this.state.lastName),
                                        email: String(this.state.email),
                                        displayName: String(this.state.displayName)                                
                                    }
                                }}>
                                    <Button variant="contained" size="large" fullWidth={true} className={classes.button}>Sign Up</Button>
                                </Link>
                            </div>
                        </form>
                        <a className="text-link" href="https://www.google.com"><p>I forgot my password</p></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Login);
