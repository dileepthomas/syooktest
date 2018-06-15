import React, { Component } from 'react';
import {connect} from 'react-redux'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/login/login'
import Signup from './components/signup/signup'
import Dashboard from './components/dashboard/dashboard'

class App extends Component {
  render() {
    const {access} = this.props.login
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={access ? Dashboard: Login} />
            <Route exact path="/signup" component={Signup} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, null)(App);
