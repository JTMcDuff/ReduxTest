import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import store from './store.js'


const render = () => {
  ReactDOM.render(
  <Provider store={store}>
    <App  test={"test"}/>
  </Provider>
  , document.getElementById('root'));
}

store.subscribe(render);
render();
