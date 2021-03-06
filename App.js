import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Timer from './screens/Timer';
import store from './store/ChessTimerStore';
import { Provider } from 'mobx-react';

const Router = StackNavigator({
  Home: {screen: Home},
  Timer: {screen: Timer}
})

Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);

class App extends React.Component {
  render() {
    return(
      <Provider store={ store }>
        <Router />
      </Provider>
      )
  }
}

export default App;