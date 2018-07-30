import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Line = ({ label, content }) => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.textName}>{ label }</Text>
            <Text style={styles.textDescription}>{ content }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    textName: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 15
    },
    textDescription: {
        color: '#FFFFFF',
        paddingTop: 15,
    }
});

export default Line;