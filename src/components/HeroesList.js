import React from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet } from 'react-native';

import { getHeroes } from '../actions';

import HeroesListItem from './HeroesListItem';
import Loading from './Loading';

class HeroesList extends React.Component {
  componentDidMount() {
    this.props.getHeroes();
  }

  render() {
    const { loading, onPressItem } = this.props

    if (loading) return <Loading />

    return (
      <FlatList
        style={style.containerList}
        data={this.props.heroes}
        renderItem={({ item }) => (
          <HeroesListItem
              heroe={item}
              navigateToHeroeDetail={onPressItem} />
          )}
        keyExtractor={item => item.name} 
      />
    )
  }
}

const mapStateToProps = state => {
  const { loading, error, heroes } = state.hero;
  // console.log(heroes)
  return {
    loading,
    error,
    heroes
  }
}

const mapDispatchToProps = {
  getHeroes
}

const style = StyleSheet.create({
  containerList: {
    backgroundColor: '#303030',
    flex: 1
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroesList)