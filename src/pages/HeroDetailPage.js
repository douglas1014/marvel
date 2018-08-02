import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from 'react-native';
import Line from '../components/Line';
import ComicItem from '../components/ComicItem';
import Loading from '../components/Loading';

class HeroeDetailPage extends React.Component {
  render() {
    const { heroe } = this.props.navigation.state.params;
    const { loading } = this.props
    if (loading) return <Loading />

    const imgSrc = `${heroe.thumbnail.path}/portrait_small.${heroe.thumbnail.extension}`
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.avatar} source={{ uri: imgSrc }} />
          <View>
              <Line label={heroe.name} content={heroe.description} />
              <Text style={styles.textName}>Comics</Text>
              <FlatList
                data={heroe.comics.items}
                style={styles.containerList}
                renderItem={({ item }) => (
                  <ComicItem comic={item} />
                )}
                keyExtractor={item => item.name} />
          </View>
        </View>
      </ScrollView>
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
  containerList: {
      backgroundColor: '#303030',
      flex: 1
  },
  avatar: {
      aspectRatio: 1,
      width: 200,
      height: 200,
      borderRadius: 200
  },
  textName: {
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: 'bold',
      paddingTop: 15,
      paddingBottom: 10,
      alignSelf: 'center'
  }
})

export default HeroeDetailPage;