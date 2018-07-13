import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import HeroeList from '../components/HeroeList';
import md5 from 'js-md5'

import axios from 'axios';

const public_key = '30e3b0a30498be9ee6f1028985c2e3d3'
const private_key = 'dbb4863f4b0ed3a3b5fba1a7ad7f10b3c78f5074'

export default class HeroePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: [],
      loading: false,
      error: false
    };
  }
  
  componentDidMount() {
    const API_URL = 'http://gateway.marvel.com/v1/public/';
    const timestamp = Number(new Date());
    const hash = md5.create();
    hash.update(timestamp + private_key + public_key);

    this.setState({ loading: true });
    setTimeout(() => {
      axios.get(`${API_URL}characters`, {
        params: {
          'ts': timestamp,
          'apikey': public_key,
          'hash': hash.hex()
        }
      })
      .then((response) => {
        const data = response.data.data.results;
        console.log('datasdasdasdasdasdasa: ', data[2]);
        this.setState({ heroes: data, loading: false });
      })
      .catch(error => {
        this.setState( { loading: false, error: true } )
      });
    }, 1500);
  }

  renderPage() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#B50F16" />;
    }
    if (this.state.error) {
      return <Text style={styles.error}>Ops... Algo deu errado :(</Text>;
    }

    return (
      <HeroeList
        heroes={this.state.heroes}
        onPressItem={pageParams => {
          this.props.navigation.navigate('HeroeDetail', pageParams);
        }} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderPage() }
          {/* this.state.loading
              ? <ActivityIndicator size="large" color="#B50F16" />
              : this.state.error
                  ? <Text style={styles.error}>Ops... Algo deu errado :(</Text>
                  : <HeroeList
                      heroes={this.state.heroes}
                      onPressItem={pageParams => {
                        this.props.navigation.navigate('HeroeDetail', pageParams);
                      }} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#303030',
      flex: 1,
      justifyContent: 'center'
  },
  error: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 18
  }
});
