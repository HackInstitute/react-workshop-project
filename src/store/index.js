import {createStore} from 'redux'

const SWITCH_FOO = 'SWITCH_FOO'

export const switchFoo = () => {
  return {
    type: SWITCH_FOO
  }
}


const reducer = (state = {foo: 'bar'}, action) => {
  switch (action.type) {
    case SWITCH_FOO:
      return {...state, foo: 'EGGZ'}
  
    default:
      console.log('### reducer', action)
      return state
  }
}

export default createStore(reducer)