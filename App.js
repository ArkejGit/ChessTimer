import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menu}>
          <Image source={require('./img/chess-timer-logo.png')} />
        </View>
        <View style={styles.timersContainer}>
          <View style={styles.timersRow}>
            <View style={styles.timer}>
              <Text>timer</Text>
            </View>
            <View style={styles.timer}>
              <Text>timer</Text>
            </View>
          </View>
          <View style={styles.timersRow}>
            <View style={styles.timer}>
              <Text>timer</Text>
            </View>
            <View style={styles.timer}>
              <Text>timer</Text>
            </View>
          </View>
          <View style={styles.timersRow}>
            <View style={styles.timer}>
              <Text>timer</Text>
            </View>
            <View style={styles.timer}>
              <Text>timer</Text>
            </View>
          </View>
          <View style={styles.timersRow}>
            <Text>own timer</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue'
  },
  timersContainer: {
    flex: 6,
    alignSelf: 'stretch'
  },
  timersRow: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  timer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
