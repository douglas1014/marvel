import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { getComics } from '../actions';
import Line from '../components/Line';
import ComicItem from '../components/ComicItem';

class HeroeDetailPage extends React.Component {
  /* componentDidMount() {
    this.props.getComics();
    console.log('getComics: ', this.props.getComics());
  } */

  render() {
    const { heroe } = this.props.navigation.state.params;
    const imgSrc = `${heroe.thumbnail.path}/portrait_small.${heroe.thumbnail.extension}`
    return (
      <View style={styles.container}>
          <Image style={styles.avatar} source={{ uri: imgSrc }} />
          <View>
              <Line label={heroe.name} content={heroe.description} />
              <Text style={styles.textName}>Comics</Text>
              <FlatList
                data={heroe.comics.items}
                style={styles.containerList}
                renderItem={({ item }) => (
                  <ComicItem comic={item} />
                )}
                keyExtractor={item => item.name}
              />
          </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { error, comics } = state.comic_image;
  console.log(comics);
  return {
    error,
    comics
  }
}

const mapDispatchToProps = {
  getComics
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#303030',
    alignItems: 'center',
    flex: 1
  },
  containerList: {
      backgroundColor: '#303030',
      flex: 1
  },
  avatar: {
      aspectRatio: 1,
      width: 200,
      height: 200,
      borderRadius: 200
  },
  textName: {
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: 'bold',
      paddingTop: 15,
      paddingBottom: 10,
      alignSelf: 'center'
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroeDetailPage)