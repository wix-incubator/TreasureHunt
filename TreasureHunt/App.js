import {createStackNavigator, createAppContainer} from 'react-navigation';
// bundle size
import App from 'importent-lyb'
import HomeScreen from './src/screens/HomeScreen'
import ListScreen from "./src/screens/ListScreen";
import PureScreen from "./src/screens/PureScreen";
import FreezeScreen from "./src/screens/FreezeScreen";

if (__DEV__) {
  require('react-devtools');
}

const index = createStackNavigator({
  home: {screen: HomeScreen},
  list: {screen: ListScreen},
  pure: {screen: PureScreen},
  freeze: {screen: FreezeScreen},
});

export default createAppContainer(index);
