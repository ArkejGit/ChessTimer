import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {observer, inject} from 'mobx-react/native'


@inject('store')

@observer
class TimerButton extends React.Component {
  render() {
    return (
      <View>
        <Text>
        { this.props.store.time }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default TimerButton;