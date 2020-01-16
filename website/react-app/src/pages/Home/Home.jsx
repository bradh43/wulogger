import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import LogCard from './../../componets/LogCard/LogCard';




class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            testLog: {
                title:"Log title",
                activity:"run",
                author:"author"
            }
        }
    }

    componentDidMount(){
        this.setState(state => ({

        }));
 
    }
    


    render() {
        return(
            <div className="home">
                <div className="padding dark-text center-text">
                    <h1>Welcome to WuLogger!</h1>
                    <Link to="/signup" className="text-link">New? Create an account</Link>
                </div>
                <div className="center padding">
                    <img src={require("../../assets/images/washu_mascot.png")} alt="bear" className="center"/>
                </div>
                {/* <LogCard logDetailsProps={this.state.testLog}></LogCard> */}
            </div>
        );
    }
}

export default Home;
