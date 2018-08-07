import React from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { Text, View, StyleSheet, Image, TouchableOpacity  } from 'react-native'

const HeroesListItem = props => {
  const { heroe, navigateToHeroeDetail } = props
  return (
    <TouchableOpacity onPress={() => {
      navigateToHeroeDetail({ heroe });
    }}>
      <View style={ styles.heroesContainerList }>
        <View style={ styles.imageBox }>
          <Image style={ styles.avatar } source={{ uri: heroe.thumbnail.path + '/portrait_small.' + heroe.thumbnail.extension }} />
        </View>
        <View style={ styles.textBox }>
          <Text style={ styles.heroesTextList }>{ heroe.name }</Text>
        </View>
        <View style={ styles.iconBox }>
          <Icon name="chevron-right" color="#F0141E" style={styles.icon} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  heroesContainerList: {
    marginLeft: 8,
    marginRight: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#2D2D2D',
    paddingLeft: 12,
    paddingRight: 12,
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 58,
    flex: 1,
  },
  heroesTextList: {
    fontFamily: "BarlowCondensed-Regular",
    color: 'white',
    fontSize: 16,
  },
  avatar: {
    aspectRatio: 1,
    width: 45,
    borderRadius: 50,
    marginRight: 8
  },
  imageBox: {
    flex: 0.2,
  },
  textBox: {
    flex: 0.7,
  },
  iconBox: {
    flex: 0.1,
  },
  icon: {
    justifyContent: 'flex-end',
    fontSize: 24,
  },
})

export default HeroesListItem