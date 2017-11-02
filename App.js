import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Timer from './Timer';
import store from './ChessTimerStore';
import { Provider } from "mobx-react";

const Router = StackNavigator({
  Home: {screen: Home},
  Timer: {screen: Timer}
})

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