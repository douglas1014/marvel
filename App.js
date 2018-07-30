import React from 'react';
import Router from './src/Router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducer from './src/reducers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const CLIENT = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  responseType: 'json'
});

const STORE = createStore(reducer, applyMiddleware(axiosMiddleware(CLIENT)));

const App = () => (
    <Provider store={STORE}>
        <Router />
    </Provider>
)

export default App;
