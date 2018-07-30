import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import capitalizeFirstLetter from '../util/capitalizeFirstLetter';

const HeroeListItem = props => {
    const { heroe, navigateToHeroeDetail } = props;
    const imgPath = `${heroe.thumbnail.path}/portrait_small`;
    const imgExtension = heroe.thumbnail.extension;
    const imgSrc = `${imgPath}.${imgExtension}`;

    return (
        <TouchableOpacity onPress={() => {
            navigateToHeroeDetail({ heroe });
        }}>
            <View style={ styles.line }>
                <Image style={styles.avatar} source={{ uri: imgSrc }} />
                <Text style={ styles.lineText }>
                    { capitalizeFirstLetter(heroe.name) }
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#464646",
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        color: '#FFFFFF',
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50
    }
})
export default HeroeListItem;