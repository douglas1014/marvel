import React from 'react';
import { createStackNavigator } from 'react-navigation';
import List from './pages/Home';
import HeroeDetailPage from './pages/HeroDetailPage';
import SearchBar from 'react-native-searchbar';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

export default createStackNavigator({
    'Main': {
        screen: List,
        navigationOptions: {
            headerTransparent: true
        },
        /* navigationOptions: {
          title: 'Characters',
          headerStyle: {
              backgroundColor: '#B50F16',
          },
          headerTitleStyle: {
              fontFamily: "BarlowCondensed-Bold",
              fontSize: 20,
              color: '#FFFFFF',
          }
      } */
    },
    'HeroeDetail': {
        screen: HeroeDetailPage,
        navigationOptions: ({ navigation }) => {
        return ({
            headerTransparent: true,
            headerTintColor: 'red'
          })
        }
    }
});
