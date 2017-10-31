import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Timer from './Timer';

const App = StackNavigator({
  Home: {screen: Home},
  Timer: {screen: Timer}
})

export default App;