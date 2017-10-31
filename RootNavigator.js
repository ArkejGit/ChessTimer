import { StackNavigator } from 'react-navigation';
import App from './App';
import Timer from './Timer';

const RootNavigator = StackNavigator({
  Home: {
    screen: App
  },
  Timer: {
    screen: Timer
  },
});

export default RootNavigator;