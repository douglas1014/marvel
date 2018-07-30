import React from 'react';
import HeroesList from '../components/HeroesList';

class List extends React.Component {
  render () {
    return (
      <HeroesList 
        onPressItem={pageParams => {
          this.props.navigation.navigate('HeroeDetail', pageParams);
        }}
      />
    )
  }
}

export default List;