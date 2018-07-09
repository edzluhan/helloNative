import { createStackNavigator } from 'react-navigation';
import Home from './src/components/Home';
import Login from './src/components/Login';
import Menu from './src/components/Menu';
import AdvancedSearch from './src/components/AdvancedSearch';
import Results from './src/components/Results';
import Product from './src/components/Product';
import ScheduleVisit from './src/components/ScheduleVisit';
import Task from './src/components/Task';
import VisitSolicitation from './src/components/VisitSolicitation';

export default createStackNavigator(
  {
    Home,
    Login,
    Menu,
    AdvancedSearch,
    Results,
    Product,
    ScheduleVisit,
    Task,
    VisitSolicitation
  },
  {
    title: 'Foxter App',
    headerMode: 'none',
    initialRouteName: 'Home'
  }
);
