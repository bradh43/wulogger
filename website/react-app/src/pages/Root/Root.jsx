import React, { Component } from 'react';

import './Root.css';
import Navbar from '../../componets/Navbar/Navbar';
import SideDrawer from '../../componets/HamburgerMenu/SideDrawer';
import Backdrop from '../../componets/Backdrop/Backdrop';
import Footer from '../../componets/Footer/Footer';



class Root extends Component {
  constructor(props){
    super(props)
    this.state = {
      sideDrawerOpen: false,
    }
    this.aboutRef = this.props.aboutRef
  }

  toggleSideDrawer = () => {

    this.setState((prevState)=> {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  }

  closeSideDrawer = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {

    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.closeSideDrawer} />;
    }

    return (
      <div className="app">
        <Navbar toggleSideDrawer={this.toggleSideDrawer} showSideDrawer={this.state.sideDrawerOpen}/>
        <SideDrawer showSideDrawer={this.state.sideDrawerOpen} toggleSideDrawer={this.toggleSideDrawer} closeSideDrawer={this.closeSideDrawer}/>
        {backdrop}
        <div className="container">
            {this.props.children}
        </div>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default Root;
