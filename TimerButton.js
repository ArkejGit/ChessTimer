import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export class TimerButton extends React.Component {
  render() {
    return (
      <View style={styles.timer}>
        <TouchableOpacity 
          style={styles.timerButton}
          onPress={() => {this.props.navigate('Timer')}}
          >
          <Text style={styles.timerButtonText}>
          {this.props.time}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export class CustomTimerButton extends React.Component {
  render() {
    return (
      <View style={styles.timer}>
        <TouchableOpacity 
          style={[styles.timerButton, styles.customTimerButton]}>
          <Text style={styles.timerButtonText}>
          {this.props.time}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const test = () => {
  console.log('test');
}

const styles = StyleSheet.create({
  timer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timerButton: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 30,
    backgroundColor: '#454955',
    borderRadius: 2,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  customTimerButton: {
    backgroundColor: '#72B01D'
  },
  timerButtonText: {
    color: '#F3EFF5',
    fontSize: 20,
    fontWeight: '800'
  }
});
