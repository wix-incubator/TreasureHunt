import {createStackNavigator, createAppContainer} from 'react-navigation';
// bundle size
import App from 'importent-lyb'
import HomeScreen from './src/screens/HomeScreen'
import ListScreen from "./src/screens/ListScreen";
import ImagesScreen from "./src/screens/ImagesScreen";
import AnimatedButtonScreen from "./src/screens/AnimatedButtonScreen";
import DownloadProgress from './src/screens/DownloadProgress';

if (__DEV__) {
  require('react-devtools');
}

const index = createStackNavigator({
  home: {screen: HomeScreen},
  list: {screen: ListScreen},
  images: {screen: ImagesScreen},
  animatedButton: {screen: AnimatedButtonScreen},
  progress: {screen: DownloadProgress},
});

export default createAppContainer(index);
