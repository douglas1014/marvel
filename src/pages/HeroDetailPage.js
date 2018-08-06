import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from 'react-native';
import Line from '../components/Line';
import ComicsList from '../components/ComicsList';

class HeroeDetailPage extends React.Component {
  render() {
    const { heroe } = this.props.navigation.state.params;

    const imgSrc = `${heroe.thumbnail.path}/portrait_small.${heroe.thumbnail.extension}`
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.avatar} source={{ uri: imgSrc }} />
          <View>
              <Line label={heroe.name} content={heroe.description} />
              <Text style={styles.textName}>Comics</Text>
              <ComicsList uri={heroe.comics.collectionURI} />
          </View>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#303030',
    alignItems: 'center',
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

export default HeroeDetailPage;