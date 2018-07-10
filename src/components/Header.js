import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => (
    <View style={style.container}>
        <Text style={style.title}>{ props.title }</Text>
    </View>
);

const style = StyleSheet.create({
    container: {
        backgroundColor: '#B50F16',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        fontSize: 20,
        color: '#FFFFFF',
        fontFamily: 'Gaegu',
        fontWeight: 'bold',
        lineHeight: 24,
        paddingLeft: 15
    }
});

export default Header;