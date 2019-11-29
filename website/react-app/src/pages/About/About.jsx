import React, { Component } from 'react';
import './About.css';
import {Link} from 'react-router-dom';



class About extends Component {
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
            <div className="about">
                <div className="padding dark-text center-text">
                    <h1>About</h1>
                </div>
            </div>
        );
    }
}

export default About;
