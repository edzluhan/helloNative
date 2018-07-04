import { createStackNavigator } from 'react-navigation';
import Home from './src/components/Home';
import Login from './src/components/Login';
import Menu from './src/components/Menu';
import AdvancedSearch from './src/components/AdvancedSearch';
import Results from './src/components/Results';
import Product from './src/components/Product';

export default createStackNavigator(
  {
    Home,
    Login,
    Menu,
    AdvancedSearch,
    Results,
    Product
  },
  {
    title: 'Foxter App',
    headerMode: 'none',
    initialRouteName: 'Product'
  }
);
