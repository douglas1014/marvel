import React from 'react';
import { YellowBox, StatusBar } from 'react-native';
import SearchBar from 'react-native-search-bar';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import { createStackNavigator } from 'react-navigation';
import HeroePage from './src/pages/HeroePage';
import HeroeDetailPage from './src/pages/HeroeDetailPage';

export default createStackNavigator({
  'Main': {
    screen: HeroePage,
    navigationOptions: ({ navigation }) => {
      StatusBar.setBackgroundColor('#A5060D');
      return ({
        title: 'Characters',
        headerStyle: {
          backgroundColor: '#B50F16',
          height: 50,
          borderBottomColor: '#C5C5C5'
        },
        headerTitleStyle: {
          fontFamily: 'Barlow Condensed',
          color: '#FFFFFF'
        }
      });
      {/* <SearchBar
            ref='searchBar'
            placeholder='Search'/> */}
    }
  },
  'HeroeDetail': {
    screen: HeroeDetailPage,
    navigationOptions: ({ navigation }) => {
      // const { heroe } = navigation.state.params;
      return ({
        headerTransparent: true,
        headerTintColor: 'red'
      })
    }
  }
});
