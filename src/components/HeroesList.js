import React from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet,  View } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

import { getHeroes, getHeroesSearch } from '../actions';

import HeroesListItem from './HeroesListItem';
import Loading from './Loading';

class HeroesList extends React.Component {
  constructor() {
    super();

    this.state = {
      offset: 0,
      search: false
    }
  }

  componentDidMount() {
    this.props.getHeroes();
  }

  fetchData() {
    const { offset } = this.state;
    this.setState({ offset: offset + 20 })
    this.props.getHeroes(offset);
  }

  findHeroes(text) {
    if(text.length >= 3) {
      // this.props.getHeroes(0, text);
      this.props.getHeroesSearch(text);
      this.setState({ search: true });
    } else this.setState({ search: false });
    console.log('heroes_search: ', this.props.heroes_search)
  };

  renderItem() {
    const { loading, onPressItem, heroes, heroes_search } = this.props

    if(this.state.search) {
      return (
        <FlatList
          style={style.containerList}
          data={heroes_search}
          renderItem={({ item }) => (
            <HeroesListItem
                heroe={item}
                navigateToHeroeDetail={onPressItem} />
            )}
          keyExtractor={item => item.name}
        />
      );
    }
    return ( 
      <FlatList
        style={style.containerList}
        data={heroes}
        renderItem={({ item }) => (
          <HeroesListItem
              heroe={item}
              navigateToHeroeDetail={onPressItem} />
          )}
        onEndReached={() => 
          this.setState({ offset: this.state.offset + 20 },
          () => this.fetchData())}
        onEndReachedThreshold={0.5}
        keyExtractor={item => item.name}
        ListFooterComponent={() => {
          return (this.props.loading && <Loading size={30} />)
        }}
      /> 
    );
  }

  render() {
    const { loading, onPressItem, heroes, heroes_search } = this.props

    if (this.state.offset == 0 && loading) return <Loading size={50} />
    console.log('heroes: ', this.props.heroes);
    return (
      <View style={style.containerList}>
        <Toolbar
          centerElement="Characters"
          searchable={{
            autoFocus: true,
            placeholder: 'Name of character',
            onChangeText: (text) => this.findHeroes(text)
          }}
          style={{
            container: {backgroundColor: "#B50F16"},
            centerElement: {color: 'white'},
            leftElement: {color: 'white'},
            rightElement: {color: 'white'},
            titleText: style.titleText,
            centerElementContainer: {

            }
          }}
        />
        {this.renderItem()}
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { loading, error, heroes } = state.hero;
  const { heroes_search } = state.search;
  return {
    loading,
    error,
    heroes,
    heroes_search
  }
}

const mapDispatchToProps = {
  getHeroes,
  getHeroesSearch
}

const style = StyleSheet.create({
  containerList: {
    backgroundColor: '#303030',
    flex: 1
  },
  container: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "#CED0CE"
  },
  toolbar: {
    backgroundColor: '#B50F16'
  },
  titleText: {
    fontFamily: "BarlowCondensed-Regular",
    color: 'white',
    fontSize: 16,
  },
  centerElementContainer: {
    /* fontFamily: "BarlowCondensed-Bold",
    fontSize: 20, */
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroesList)