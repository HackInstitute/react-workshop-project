import {createStore} from 'redux'

const reducer = (state = {foo: 'bar'}, action) => {
  switch (action.type) {
    // case value:
    //   break;
  
    default:
      return state
  }
}

export default createStore(reducer)