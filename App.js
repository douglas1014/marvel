import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import md5 from 'js-md5'

import Header from './src/components/Header';
import HeroeList from './src/components/HeroeList';

const public_key = '30e3b0a30498be9ee6f1028985c2e3d3'
const private_key = 'dbb4863f4b0ed3a3b5fba1a7ad7f10b3c78f5074'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: []
    }
  }

  componentDidMount() {
    const API_URL = 'http://gateway.marvel.com/v1/public/';
    const timestamp = Number(new Date());
    const hash = md5.create();
    hash.update(timestamp + private_key + public_key);

    axios.get(`${API_URL}characters`, {
      params: {
        'ts': timestamp,
        'apikey': public_key,
        'hash': hash.hex()
      }
    })
    .then((response) => {
      const data = response.data.data.results;
      this.setState({ heroes: data });
    })
    .catch((err) => err);
  }

  render() {
    return (
      <View>
        <Header title="Characters" />
        <HeroeList heroes={this.state.heroes} />
      </View>
    );
  }
}
