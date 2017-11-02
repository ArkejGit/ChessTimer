import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {observer, inject} from 'mobx-react/native'


@inject('store')

@observer
class TimerButton extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.black}>
          <Text>
          { this.props.store.timeMinutes.black }
          </Text>
        </View>
        <View style={styles.white}>
          <Text>
          { this.props.store.timeMinutes.white }
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3EFF5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  black: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    alignSelf: 'stretch'
  },
  white: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    alignSelf: 'stretch'
  }
});

export default TimerButton;