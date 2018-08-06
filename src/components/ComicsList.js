import React from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { getComics } from '../actions';
import ComicItem from '../components/ComicItem';
import Loading from './Loading';

class ComicsList extends React.Component {
  componentDidMount() {
    const { uri } = this.props;
    this.props.getComics(uri);
  }

  render() {
    const { loading } = this.props

    if (loading) return <Loading />

    return (
      <FlatList
        style={style.containerList}
        data={this.props.comics}
        renderItem={({ item }) => (
          <ComicItem
              comic={item} />
          )}
        keyExtractor={item => item.name} 
      />
    )
  }
}

const style = StyleSheet.create({
  containerList: {
    backgroundColor: '#303030',
    flex: 1
  },
});

const mapStateToProps = state => {
  const { loading, error, comics } = state.comic_image;
  return {
    loading,
    error,
    comics
  }
}

const mapDispatchToProps = {
  getComics
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComicsList);