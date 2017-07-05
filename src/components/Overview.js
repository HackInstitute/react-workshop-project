import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Link } from 'react-router-dom';

import {switchFoo} from '../store';

class Overview extends Component {
    render() {
        const {foo, switchFoo} = this.props
        return (
            <div>
                <h1>Overview</h1>
                <div>
                    <span>{foo}!</span>
                    <button onClick={switchFoo}>Do it!</button>
                </div>
                <Link to="/settings">Settings</Link>
            </div>
        )
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
      dispatch(switchFoo())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview)
