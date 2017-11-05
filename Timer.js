import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import {observer, inject} from 'mobx-react/native'


@inject('store')

@observer
class TimerButton extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.blackContainer}
        onPress={() => {
          this.props.store.swapTimers('black');
        }}
        >
          <View>
            <Text style={[styles.timerText, styles.white, styles.textUpsideDown]}>
            { this.props.store.timeMinutes.black }
            </Text>
          </View>
        </TouchableOpacity>

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

        <TouchableOpacity style={styles.whiteContainer}
        onPress={ () => {
          this.props.store.swapTimers('white');
        }}
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
    backgroundColor: '#232021'
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
  startButton: {
    backgroundColor: '#72B01D',
    zIndex: 10,
    borderRadius: 2,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ translateY: -25 }]
  },
  startButtonText: {
    color: '#F3EFF5',
    fontSize: 20,
    fontWeight: '800',
    padding: 10
  }
});

export default TimerButton;