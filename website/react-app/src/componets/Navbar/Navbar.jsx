import React, { Component } from 'react';

import './Navbar.css';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppBar,Button,Toolbar, Typography, useScrollTrigger} from '@material-ui/core';


  function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
  };


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
            // <header className="navbar">
            //     <nav className="navbar-nav">
            //         <div className="hamburger-menu">
            //             <HamburgerMenu click={this.state.toggleSideDrawer} showSideDrawer={this.state.showSideDrawer} />
            //         </div>
            //         <Link to='/'>
            //             <div className="header-title">
            //                 WuLogger
            //             </div>
            //         </Link>
            //         <div className="nav-spacing"/>
            //         <div className="navbar-items">
            //             <ul>
            //                 <li><Link to='/'>Home</Link></li>
            //                 <li><Link to='/calendar'>Calendar</Link></li>
            //                 <li><Link to='/about'>About</Link></li>
            //                 <li><Link to='/login'>Login</Link></li>
            //             </ul>
            //         </div>
            //     </nav>
            // </header>
            <div className="flex-spacing">
                {/* <HideOnScroll {...this.props}> */}
                <ElevationScroll {...this.props}>

                    <AppBar>
                        <Toolbar>
                            <div className="hamburger-menu">
                                {/* <HamburgerMenu click={this.state.toggleSideDrawer} showSideDrawer={this.state.showSideDrawer} /> */}
                                <HamburgerMenu/>
                            </div>
                            <Link to='/home'><Typography variant="h6">WuLogger</Typography></Link>
                            <div className="flex-spacing"></div>
                            <Link to='/login'><Button color="inherit">Login</Button></Link>

                        </Toolbar>
                    </AppBar>
                </ElevationScroll>
            </div>
        );
    }
}

export default Navbar;
