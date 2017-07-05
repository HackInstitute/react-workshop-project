import React from 'react';
import ReactDOM from 'react-dom';

import store from './store'

import './index.css';
import App from './components/App';

console.log('###', store.getState())

ReactDOM.render(<App />, document.getElementById('root'));



