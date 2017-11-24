import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Dimensions, Vibration } from 'react-native';
import {observer, inject} from 'mobx-react/native'
@inject('store')

@observer
class Timer extends React.Component {

  static navigationOptions = {
    header: null,
    headerLeft: null
  }

  constructor(props) {
    super(props);
    this.state = { 
      confirmExitButton: false,
      blink: {show: true, counter: 0}
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    const winWidth = Dimensions.get('window').width;
    const winHeight = Dimensions.get('window').height;

    return (
      <View style={styles.container}>

        {/* black container ---------------------------------- */}
        <TouchableOpacity
        style={styles.blackContainer}
        onPress={() => {
          this.props.store.swapTimers('black');
        }}
        disabled={ !this.props.store.timers.black ||!this.props.store.gameInProgress }
        >
          <View>
            <Text style={[styles.timerText, styles.white, styles.textUpsideDown]}>
            { this.props.store.timeMinutes.black }
            </Text>
          </View>
        </TouchableOpacity>

        {/* buttons ------------------------------------------------- */}
        <View style={[styles.buttons, {width: winWidth}]}>

        { !this.props.store.gameInProgress && 
          <TouchableOpacity style={[styles.timerButton, {height: 70, width: winWidth/2-30}]}
          onPress={() => {
            Vibration.vibrate(500);
            this.props.store.runWhiteTimer();
          }}
          color='#72B01D'
          >
            <Text style={[styles.timerButtonText, {fontSize: winWidth/22}]}>
              START
            </Text>
        </TouchableOpacity>
        }

        <TouchableOpacity style={[styles.timerButton, {height: 70, width: winWidth/2-30}]}
        onPress={() => this.handleClickBackButton(navigate)}
        color='#72B01D'
        >
          <Text style={[styles.timerButtonText, {fontSize: winWidth/22}]}>
            { this.state.blink.show &&
              (this.state.confirmExitButton ? 'ARE YOU SURE?' : 'BACK TO MENU')}
          </Text>
        </TouchableOpacity>

        </View>

        {/* white container ---------------------------------- */}
        <TouchableOpacity
        style={styles.whiteContainer}
        onPress={ () => {
          this.props.store.swapTimers('white');
        }}
        disabled={ !this.props.store.timers.white || !this.props.store.gameInProgress }
        >
          <View>
            <Text style={[styles.timerText, styles.black]}>
            { this.props.store.timeMinutes.white }
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  // handleClickBackButton ---------------------------------------------------------
  handleClickBackButton(navigate) {
    if (this.props.store.gameInProgress && !this.state.confirmExitButton) {
    Vibration.vibrate(500);

    this.confirmExitButtonInterval = setInterval(() => {
      if (this.state.blink.counter > 3) {
        this.setState({
          confirmExitButton: false,
          blink: {show: true, counter: 0}
        });
        clearInterval(this.confirmExitButtonInterval);
        return;
      }

      this.setState(previousState => {
        return { 
          blink: {show: !previousState.blink.show, counter: ++previousState.blink.counter},
        };
      });
    }, 1000);

    this.setState(previousState => {
      return { 
        confirmExitButton: !previousState.confirmExitButton,
       };
    });
    return;
  }

  clearInterval(this.confirmExitButtonInterval);
  navigate('Home');
  this.props.store.clearGame();
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3EFF5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  blackContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#232021',
    zIndex: 1,
  },
  whiteContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3EFF5'
  },
  timerText: {
    fontSize: 80,
    fontWeight: 'bold'
  },
  textUpsideDown: {
    transform: [{ rotate: '180deg'}]
  },
  white: {
    color: '#F3EFF5'
  },
  black: {
    color: '#232021'
  },
  buttons: {
    position: 'absolute',
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  timerButton: {
    backgroundColor: '#72B01D',
    borderRadius: 2,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerButtonText: {
    color: '#F3EFF5',
    fontWeight: '800'
  }
});

export default Timer;