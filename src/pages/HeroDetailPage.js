import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Line from '../components/Line';

export default class HeroeDetailPage extends React.Component {
    render() {
        const { heroe } = this.props.navigation.state.params;
        const imgSrc = `${heroe.thumbnail.path}/portrait_small.${heroe.thumbnail.extension}`
        // console.log('Comics: ', heroe.comics);
        return (
            <View style={styles.container}>
                <Image style={styles.avatar} source={{ uri: imgSrc }} />
                <View>
                    <Line label={heroe.name} content={heroe.description} />
                    {/* <Comic image={heroe.comics.items.resourURI} content={heroe.comics.items.name} /> */}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#303030',
        alignItems: 'center',
        flex: 1
    },
    avatar: {
        aspectRatio: 1,
        width: 200,
        height: 200,
        borderRadius: 200
    }
});