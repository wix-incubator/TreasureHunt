import {createStackNavigator, createAppContainer} from 'react-navigation';
import App from 'importent-lyb'
import HomeScreen from './src/screens/HomeScreen'
import ListScreen from "./src/screens/ListAScreen";

const index = createStackNavigator({
  home: {screen: HomeScreen},
  list: {screen: ListScreen},
});

export default createAppContainer(index);
