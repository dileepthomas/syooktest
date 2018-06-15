import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/login/login'
import Signup from './components/signup/signup'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
