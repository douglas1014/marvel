import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ComicItem = ({ comic }) => {
    const message = `Sorry, it seems like there are no comics registered yet.`;

    return (
        <View style={styles.containerList}>
            {/* <Image style={ styles.image } source={{ uri: store.payload.request.url }} /> */}
            <Text style={styles.comicTextName}>{comic.name}</Text>
            {/* <Image style={ style.image } source={{ uri: heroe.thumbnail.path + '/portrait_small.' + heroe.thumbnail.extension }} /> */}
        </View>
    );
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

    },
    comicTextName: {
        color: 'white',
        fontSize: 16
    }
});

export default ComicItem;