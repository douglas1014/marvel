import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class ComicItem extends React.Component {
  render() {
    const { comic } = this.props;
    const thumbUri = comic.thumbnail.path + '/portrait_small.' + comic.thumbnail.extension
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: thumbUri }} />
        <Text style={styles.comicTextName}>{comic.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: '#2D2D2D',
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 58
  },
  comicTextName: {
    fontFamily: "BarlowCondensed-Regular",
    color: 'white',
    fontSize: 16,
  },
  image: {
    aspectRatio: 1,
    width: 50,
    height: 30,
    marginRight: 8,
  }
});


export default ComicItem;