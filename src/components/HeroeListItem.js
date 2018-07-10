import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import capitalizeFirstLetter from '../util/capitalizeFirstLetter';


const HeroeListItem = props => {
    const { heroe } = props;
    return (
        <View style={ styles.line }>
            <Text style={ styles.lineText }>
                { capitalizeFirstLetter(heroe.name) }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        color: '#FFFFFF',
        paddingLeft: 15
    }
})
export default HeroeListItem;