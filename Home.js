import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { TimerButton, CustomTimerButton } from './TimerButton';
import Timer from './Timer';

export default class Home extends React.Component {

  static navigationOptions = {
    header: null
  }

  render() {
    const { navigate } = this.props.navigation;

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
            <TimerButton 
              time='5:00'
            />
            <TimerButton 
              time='10:00'
            />
          </View>
          <View style={styles.timersRow}>
            <TimerButton 
              time='15:00'
            />
            <TimerButton 
              time='20:00'
            />
          </View>
          <View style={styles.timersRow}>
            <TimerButton 
              time='30:00'
            />
            <TimerButton 
              time='60:00'
            />
          </View>
          <View style={styles.timersRow}>
            <CustomTimerButton 
              time='Custom Timer'
            />
            <Button
              onPress={() =>
                  navigate('Timer')
                }
              title="test"
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