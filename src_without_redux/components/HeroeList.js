import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import HeroeListItem from './HeroeListItem';

const HeroeList = props => {
  const { heroes, onPressItem } = props;

  return (
    <FlatList 
      style={styles.container} 
      data={heroes} 
      renderItem={({ item }) => (
        <HeroeListItem
            heroe={item}
            navigateToHeroeDetail={onPressItem} />
        )}
        keyExtractor={item => item.name} />
  );
};

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#303030'
  }
});

export default HeroeList;