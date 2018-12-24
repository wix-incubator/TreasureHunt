import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen'
import ListScreen from "./src/screens/ListAScreen";

const App = createStackNavigator({
  home: {screen: HomeScreen},
  list: {screen: ListScreen},
});

export default createAppContainer(App);
