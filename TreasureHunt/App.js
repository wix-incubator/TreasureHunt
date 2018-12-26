import {createStackNavigator, createAppContainer} from 'react-navigation';
// bundle size
// import App from 'importent-lyb'
import * as react_dev from 'react-devtools'
import HomeScreen from './src/screens/HomeScreen'
import ListScreen from "./src/screens/ListScreen";
import PureScreen from "./src/screens/PureScreen";
import FreezeScreen from "./src/screens/FreezeScreen";

const index = createStackNavigator({
  home: {screen: HomeScreen},
  list: {screen: ListScreen},
  pure: {screen: PureScreen},
  freeze: {screen: FreezeScreen},
});

export default createAppContainer(index);
