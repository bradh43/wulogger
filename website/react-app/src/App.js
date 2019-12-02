import React, { Component } from 'react';

import './App.css';
import './stylesheets/main.css'
import Root from './pages/Root/Root';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Calendar from './pages/Calendar/Calendar';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ErrorPage from './pages/ErrorPage/ErrorPage';






import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
    this.state = {
      user: {},
    }

  }

  componentDidMount(){
    console.log("Componet mounted")

  }

  componentWillUnmount(){
    console.log("Componet unmount")
  }


  render() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL} >
          <Root>
            <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/home" component={Home}/>
              <Route path="/calendar" component={Calendar}/>
              <Route path="/about" component={About}/>
              <Route path="/" exact render={() => <Home/>}/>
              <Route path="/error" component={ErrorPage}/>
              <Route component={ErrorPage} />
            </Switch>
          </Root>
        </BrowserRouter>
    );
  }
}

export default App;
