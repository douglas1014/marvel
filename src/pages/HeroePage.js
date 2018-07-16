import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import HeroeList from '../components/HeroeList';
import getCharacters from '../services/MarvelService';

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
    this.setState({ loading: true });
    setTimeout(() => {
      getCharacters()
      .then((response) => {
        const data = response.data.data.results;
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
