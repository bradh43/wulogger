import React, { Component } from 'react';

import './Navbar.css';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

import {Link} from 'react-router-dom';


class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggleSideDrawer: props.toggleSideDrawer,
            showSideDrawer: false,
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            showSideDrawer: nextProps.showSideDrawer,
        });
    }
    render(){
        return(
            <header className="navbar">
                <nav className="navbar-nav">
                    <div className="hamburger-menu">
                        <HamburgerMenu click={this.state.toggleSideDrawer} showSideDrawer={this.state.showSideDrawer} />
                    </div>
                    <Link to='/'>
                        <div className="header-title">
                            WuLogger
                        </div>
                    </Link>
                    <div className="nav-spacing"/>
                    <div className="navbar-items">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/calendar'>Calendar</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;
