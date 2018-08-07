import React from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet, ActivityIndicator, View } from 'react-native';
// import SearchBar from 'react-native-searchbar';
import { Toolbar } from 'react-native-material-ui';

import { getHeroes } from '../actions';

import HeroesListItem from './HeroesListItem';
import Loading from './Loading';

class HeroesList extends React.Component {
  constructor() {
    super();

    this.state = {
      offset: 0,
      searchHeroes: [],
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
    this.props.getHeroes(0, text);
    /* const listHeroes = [];
    if(text.length > 3) {
      listHeroes.push(heroes.find((item) => item.name.indexOf(text)));
      console.log('listHeroes: ', listHeroes);
      this.setState({ searchHeroes: listHeroes });
    } else {
      this.setState({ searchHeroes: [] });
    }
    console.log('Obj: ', this.state.searchHeroes) */
  };

  render() {
    const { loading, onPressItem, heroes } = this.props

    if (this.state.offset == 0 && loading) return <Loading size={50} />
    console.log('heroes: ', this.props.heroes);
    return (
      <View style={style.containerList}>
        <Toolbar
          centerElement="Characters"
          searchable={{
            autoFocus: true,
            placeholder: 'Name of character',
            onChangeText: (text) => this.props.getHeroes(text)
          }}
          style={{
            container: {backgroundColor: "#B50F16"},
            titleText: style.titleText,
            centerElementContainer: style.centerElementContainer
          }}
        />
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
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { loading, error, heroes } = state.hero;
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