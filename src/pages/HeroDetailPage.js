import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from 'react-native';
import ComicsList from '../components/ComicsList';
import TextBox from '../components/TextBox';
class HeroeDetailPage extends React.Component {
  render() {
    const { heroe } = this.props.navigation.state.params;
    const message = `Our writer is busy saving the Semantics World. so this character doesn't have a description yet!`;
    const imgSrc = `${heroe.thumbnail.path}/portrait_small.${heroe.thumbnail.extension}`
    return (
        <ScrollView style={styles.container}>
          <Image style={styles.avatar} source={{ uri: imgSrc }} />
          <View>
              <Text style={styles.textName}>{ heroe.name }</Text>
              <TextBox text={heroe.description ? heroe.description : message} />
              <Text style={styles.textName}>Comics</Text>
              <ComicsList uri={heroe.comics.collectionURI} />
          </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#303030',
    flex: 1,
  },
  avatar: {
    alignSelf: 'center',
    aspectRatio: 1,
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  textName: {
    fontFamily: "BarlowCondensed-Bold",
    color: '#FFFFFF',
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 10,
    alignSelf: 'center'
  }
})

export default HeroeDetailPage;