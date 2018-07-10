import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HeroeListItem from './HeroeListItem';

const HeroeList = props => {
    const { heroes } = props;
    const items = heroes.map(heroe => {
        return <HeroeListItem key={heroe.id} heroe={heroe} />
    })

    return (
        <View style={ styles.container }>
            { items }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#303030'
    }
});

export default HeroeList;