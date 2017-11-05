import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TimerButton, CustomTimerButton } from './TimerButton';
import {observer, inject} from 'mobx-react/native'

@inject('store')

@observer
class Home extends React.Component {

  static navigationOptions = {
    //header: null,
     headerStyle: {
      backgroundColor: '#72B01D',
      height: 25
    }
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
              time= {300}
              navigate = {navigate}
            />
            <TimerButton 
              time= {600}
              navigate = {navigate}
            />
          </View>
          <View style={styles.timersRow}>
            <TimerButton 
              time= {900}
              navigate = {navigate}
            />
            <TimerButton 
              time= {1200}
              navigate = {navigate}
            />
          </View>
          <View style={styles.timersRow}>
            <TimerButton 
              time= {1800}
              navigate = {navigate}
            />
            <TimerButton 
              time= {3600}
              navigate = {navigate}
            />
          </View>
          <View style={styles.timersRow}>
            <CustomTimerButton 
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

export default Home;