import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { getImages } from '../actions';

class ComicItem extends React.Component {
  constructor() {
    super();

    this.state = {
      idImage: 0
    }
  }

  componentDidMount() {
    const { comic } = this.props;
    this.props.getImages(comic.resourceURI);
  }

  renderComic() {
    const { comic } = this.props;
    const { images } = this.props;

    if(images.length) {
      let imgSrc = images[0].thumbnail.path + '/portrait_small.' + images[0].thumbnail.extension;
      console.log('imgSrc: ', imgSrc);
      return (
        <View style={styles.containerList}>
          <Image style={ styles.image } source={{ uri: imgSrc }} />
          <Text style={styles.comicTextName}>{comic.name}</Text>
        </View>
      );
    }
  }

  render() {
      return (
        <View>
          {this.renderComic()}
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    containerList: {
        marginLeft: 8,
        marginRight: 8,
        borderBottomWidth: 2,
        borderBottomColor: '#2D2D2D',
        paddingLeft: 12,
        paddingRight: 12,
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'row',
        minHeight: 58
    },
    image: {
      aspectRatio: 1,
      width: 30,
      marginRight: 8
    },
    comicTextName: {
        color: 'white',
        fontSize: 10
    }
});

const mapStateToProps = state => {
  const { loading, error, images } = state.comic_image;
  return {
    loading,
    error,
    images
  }
}

const mapDispatchToProps = {
  getImages
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComicItem);