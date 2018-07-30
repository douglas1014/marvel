import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity  } from 'react-native'

const HeroesListItem = props => {
    const { heroe, navigateToHeroeDetail } = props
    return (
        <TouchableOpacity onPress={() => {
            navigateToHeroeDetail({ heroe });
        }}>
            <View style={ style.heroesContainerList }>
                <Image style={ style.avatar } source={{ uri: heroe.thumbnail.path + '/portrait_small.' + heroe.thumbnail.extension }} />
                <Text style={ style.heroesTextList }>{ heroe.name }</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
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
        minHeight: 58
    },
    heroesTextList: {
      color: 'white',
      fontSize: 16,
    },
    avatar: {
        aspectRatio: 1,
        width: 45,
        borderRadius: 50,
        marginRight: 8
    }
})
export default HeroesListItem