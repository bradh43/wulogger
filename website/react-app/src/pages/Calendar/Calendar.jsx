import React, { Component } from 'react';
import './Calendar.css';
import {Link} from 'react-router-dom';



class Calendar extends Component {
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
                    <h1>Calendar</h1>
                </div>
            </div>
        );
    }
}

export default Calendar;
