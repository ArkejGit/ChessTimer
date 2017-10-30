import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Timer from './Timer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menu}>
          <Image source={require('./img/chess-timer-logo.png')}
                 style={styles.logo} 
                 resizeMode={'contain'}
                 />
        </View>
        <View style={styles.timersContainer}>
          <View style={styles.timersRow}>
            <Timer 
              time='5:00'
            />
            <Timer 
              time='10:00'
            />
          </View>
          <View style={styles.timersRow}>
            <Timer 
              time='15:00'
            />
            <Timer 
              time='20:00'
            />
          </View>
          <View style={styles.timersRow}>
            <Timer 
              time='30:00'
            />
            <Timer 
              time='60:00'
            />
          </View>
          <View style={styles.timersRow}>
            <Timer 
              time='Custom Timer'
            />
          </View>
        </View>
      </View>
    );
  }
}

const test = () => {
  console.log('test');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3EFF5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#232021'
  },  
  logo: {
    flex: 0.8
  },
  timersContainer: {
    flex: 6,
    alignSelf: 'stretch'
  },
  timersRow: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
