import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Switch, Route } from 'react-router';
import { NavLink } from 'react-router-dom';

import Overview from './Overview';
import Settings from './Settings';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavLink className="navbar" activeClassName="navbar-active" exact to="/">Overview</NavLink>
          <NavLink className="navbar" activeClassName="navbar-active" to="/settings">Settings</NavLink>
        </div>
        
        <Route exact path="/" component={Overview} />
        <Route path="/settings" component={Settings} />

      </div>
    );
  }
}

export default App;
