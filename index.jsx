import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducers/todoApp.js'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(
  todoApp,
  applyMiddleware(thunk, createLogger())
);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('main'));
