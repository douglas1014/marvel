import { createStackNavigator } from 'react-navigation';
import List from './pages/Home';
import HeroeDetailPage from './pages/HeroDetailPage';

export default createStackNavigator({
    'Main': {
        screen: List,
        navigationOptions: {
          title: 'Characters',
          headerStyle: {
              backgroundColor: '#B50F16',
          },
          headerTitleStyle: {
              fontSize: 20,
              color: '#FFFFFF',
              fontWeight: 'bold'
          }
      }
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