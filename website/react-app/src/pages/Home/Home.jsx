import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';



class Home extends Component {
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
            <div className="container">
                <div className="padding dark-text center-text">
                    <h1>Welcome to WuLogger!</h1>
                </div>
                <div className="center padding">
                    <img src={require("../../assets/images/washu_mascot.png")} alt="bear" className="center"/>
                </div>
            </div>
        );
    }
}

export default Home;
