import { createStackNavigator } from 'react-navigation';
import Home from './src/components/Home';
import Login from './src/components/Login';
import Menu from './src/components/Menu';

export default createStackNavigator(
  {
    Home,
    Login,
    Menu
  },
  {
    title: 'Foxter App',
    headerMode: 'none',
    initialRouteName: 'Home'
  }
);
