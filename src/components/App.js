import React, { Component } from 'react';
import {connect} from 'react-redux';

import {switchFoo} from '../store';
import logo from '../assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    const {foo} = this.props
    const {switchFoo} = this.props
    
    return (
      <div className="App">
        <div className="App-header">
          <h1>{foo}!</h1>
          <button onClick={switchFoo}>Do it!</button>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    foo: state.foo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    switchFoo: function() {
      const action = {type: 'SWITCH_FOO'}
      dispatch(action)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
