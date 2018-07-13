import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Comic = ({ image, content }) => {
    const imgSrc = `${image}/standard_large.jpg`;
    return ( 
        <View>
            <Image style={styles.image} source={{ uri: imgSrc }} />
            <Text style={styles.titleComic}>{ content }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
    },
    titleComic: {
        color: '#FFFFFF',
        paddingTop: 15,
    }
});

export default Comic;