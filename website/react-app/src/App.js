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
import withStyles from '@material-ui/core/styles/withStyles';
import customTheme from './stylesheets/theme';


import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

let theme = createMuiTheme(customTheme);

theme = responsiveFontSizes(theme);



class App extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
    this.state = {
      user: {},
    }

  }

  componentDidMount(){
    console.log('Componet mounted')

  }

  componentWillUnmount(){
    console.log('Componet unmount')
  }


  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL} >
          <Root>
            <Switch>
              <Route path='/login' component={Login}/>
              <Route path='/signup' component={Signup}/>
              <Route path='/home' component={Home}/>
              <Route path='/calendar' component={Calendar}/>
              <Route path='/about' component={About}/>
              <Route path='/' exact render={() => <Home/>}/>
              <Route path='/error' component={ErrorPage}/>
              <Route component={ErrorPage} />
            </Switch>
          </Root>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
