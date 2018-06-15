import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/login'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Login} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
