import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {inject} from 'mobx-react/native'

@inject('store')

export class TimerButton extends React.Component {
  render() {
    return (
      <View style={styles.timer}>
        <TouchableOpacity 
          style={styles.timerButton}
          onPress={() => {
            this.props.store.setTime(this.props.time);
            this.props.navigate('Timer');
          }}
          >
          <Text style={styles.timerButtonText}>
          {getMinutes(this.props.time)}
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

const getMinutes = (time) => {
  return `${parseInt(time/60) ? parseInt(time/60) : '0'}:${time%60 < 10 ? time%60 + '0' : time%60}`;
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
