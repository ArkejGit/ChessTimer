import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight } from 'react-native';
import {observer, inject} from 'mobx-react/native'

@inject('store')

class CustomTimerModal extends React.Component {
  render() {
  	return(
	  	<Modal
	      animationType="slide"
	      transparent={false}
	      visible={this.props.modalVisible}
	      onRequestClose={() => {alert("Modal has been closed.")}}
	      >
	     <View style={{marginTop: 22}}>
	      <View>
	        <Text>Hello World!</Text>

	        <TouchableHighlight onPress={this.props.hideModal}>
	          <Text>Hide Modal</Text>
	        </TouchableHighlight>

	      </View>
	     </View>
	    </Modal>
    )
  }
}

const styles = StyleSheet.create({
  
});

export default CustomTimerModal;