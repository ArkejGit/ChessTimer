import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Dimensions} from 'react-native';
import {observer, inject} from 'mobx-react/native'


@inject('store')

@observer
class TimerButton extends React.Component {

  static navigationOptions = {
    header: null,
    headerLeft: null
  }

  render() {
    const { navigate } = this.props.navigation;
    const winWidth = Dimensions.get('window').width;

    return (
      <View style={styles.container}>
        <TouchableOpacity id="blackContainer" 
        style={styles.blackContainer}
        onPress={() => {
          this.props.store.swapTimers('black');
        }}
        disabled={ !this.props.store.timers.black }
        >
          <View>
            <Text style={[styles.timerText, styles.white, styles.textUpsideDown]}>
            { this.props.store.timeMinutes.black }
            </Text>
          </View>
        </TouchableOpacity>

        <View style={[styles.buttons, {width: winWidth}]}>
        { !this.props.store.gameInProgress && 
          <TouchableOpacity style={styles.startButton}
          onPress={() => {
            this.props.store.runWhiteTimer();
          }}
          color='#72B01D'
          >
            <Text style={styles.startButtonText}>
              START
            </Text>
        </TouchableOpacity>
        }

        <TouchableOpacity style={styles.startButton}
        onPress={() => {
          navigate('Home');
          this.props.store.clearGame();
        }}
        color='#72B01D'
        >
          <Text style={styles.startButtonText}>
            BACK TO MENU
          </Text>
        </TouchableOpacity>
        </View>

        <TouchableOpacity id="whiteContainer"
        style={styles.whiteContainer}
        onPress={ () => {
          this.props.store.swapTimers('white');
        }}
        disabled={ !this.props.store.timers.white }
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
  startButton: {
    backgroundColor: '#72B01D',
    borderRadius: 2,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButtonText: {
    color: '#F3EFF5',
    fontSize: 20,
    fontWeight: '800',
    padding: 10
  }
});

export default TimerButton;