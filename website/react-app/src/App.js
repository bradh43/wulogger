import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(aws_exports);



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to WuLogger</p>
        
      </header>
    </div>
  );
}

export default withAuthenticator(App, true);