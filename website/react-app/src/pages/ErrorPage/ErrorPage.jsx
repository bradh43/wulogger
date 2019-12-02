import React, { Component } from 'react';
import './ErrorPage.css';
import {Link} from 'react-router-dom';



class ErrorPage extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        this.setState(state => ({

        }));
    }

    //TODO in the future can change the 404 page to be:
    // Make it a simple game, like flappy bird but running themed
    // Give the user an option on which developer to fire

    render() {
        return(
            <div className="ErrorPage">
                <div className="padding dark-text center-text">
                    <img src={require("../../assets/images/wulogger_bear_simple.png")} alt="bear" className="center"/>
                    <h1>404 - Page not found</h1>
                    <p>The page you are looking for decided to take a rest day and is not currently running</p>
                    <Link to='/'><p>Go back to the home page</p></Link>
                </div>
            </div>
        );
    }
}

export default ErrorPage;
