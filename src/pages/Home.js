import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import HeroesList from '../components/HeroesList';

import reducer from '../reducers';

const CLIENT = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  // baseURL: '',
  responseType: 'json'
});

const STORE = createStore(reducer, applyMiddleware(axiosMiddleware(CLIENT)));

class List extends React.Component {
  render () {
    return (
      <Provider store={STORE}>
        <HeroesList 
          onPressItem={pageParams => {
            this.props.navigation.navigate('HeroeDetail', pageParams);
          }}  
        />
      </Provider>
    )
  }
}

export default List;