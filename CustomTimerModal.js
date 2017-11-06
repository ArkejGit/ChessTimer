import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput } from 'react-native';
import {observer, inject} from 'mobx-react/native'

@inject('store')

class CustomTimerModal extends React.Component {

	state = {
		hours: '',
		minutes: '',
		seconds: '',
	}

	inputs = {
			minutes: null,
			seconds: null
		}

  render() {
  	return(
	  	<Modal
	      animationType="slide"
	      transparent={false}
	      visible={this.props.modalVisible}
	      onRequestClose={this.props.hideModal}
	      >
	     <View style={styles.outerContainer}>
	      <View style={styles.innerContainer}>
	      	<View style={styles.header}>
	      		<Text style={styles.headerText}>Set time</Text>
	      	</View>
	      	<View style={styles.inputs}>
	      		<TextInput 	style={styles.textInput}
				keyboardType = 'numeric'
				onChangeText = {(text)=> this.onChanged(text, 'hours')}
				value = {this.state.hours}
				maxLength = {2}
				placeholder = 'hh'
				underlineColorAndroid = '#72B01D'
				/>
				<Text style={styles.colon}>:</Text>
				<TextInput 	style={styles.textInput}
				keyboardType = 'numeric'
				onChangeText = {(text)=> this.onChanged(text, 'minutes')}
				value = {this.state.minutes}
				maxLength = {2}
				placeholder = 'mm'
				underlineColorAndroid = '#72B01D'
				ref={ input => {
		            this.inputs['minutes'] = input;
		          }}
				/>
				<Text style={styles.colon}>:</Text>
				<TextInput 	style={styles.textInput}
				keyboardType = 'numeric'
				onChangeText = {(text)=> this.onChanged(text, 'seconds')}
				value = {this.state.seconds}
				maxLength = {2}
				placeholder = 'ss'
				underlineColorAndroid = '#72B01D'
				ref={ input => {
		            this.inputs['seconds'] = input;
		          }}
				/>
			</View>
			<View style={styles.buttons}>
				<TouchableOpacity style={styles.modalButton}
				onPress={this.props.hideModal}>
					<Text style={styles.modalButtonText}>
						Back
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.modalButton, styles.modalButtonPrimary]}
				onPress={this.props.hideModal}>
					<Text style={styles.modalButtonText}>
						Play
					</Text>
				</TouchableOpacity>
			</View>     
	      </View>
	     </View>
	    </Modal>
    )
  }

	onChanged(text, stateProp) {
		let newText = '';
		let numbers = '0123456789';

		if(text === '') {
			this.setState({ [stateProp]: '' });
			return;
		}

		for (var i=0; i < text.length; i++) {
		   if(numbers.indexOf(text[i]) > -1) {
		        newText = newText + text[i];
		   }
		   else {
		    	alert("please enter numbers only");
		    }
		}
		if (stateProp!=='hours' && Number(newText) > 59) newText='59';
		//focus next input
		if (newText.length === 2) stateProp === 'hours' ? this.inputs.minutes.focus() : this.inputs.seconds.focus();
		//blur if it's the last input
		if (newText.length === 2 && stateProp === 'seconds') this.inputs.seconds.blur();
		this.setState({ [stateProp]: newText });
	}
}



const styles = StyleSheet.create({
  header: {
  	justifyContent: 'center',
	alignItems: 'center',
  },
  headerText: {
  	fontSize: 30,
  },
  	outerContainer: {
  	flex: 1,
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
  	backgroundColor: '#00000080'
  },
  innerContainer: {
  	padding: 20,
  	backgroundColor: 'white'
  },
  inputs: {
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	margin: 30,
  },
  textInput: {
  	fontSize: 40,
  	width: 70,
  	textAlign:"center",
  	textAlignVertical:"center"
  },
  colon: {
  	fontSize: 40,
  },
  buttons: {
  	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
  },
  modalButton: {
  	alignSelf: 'stretch',
    margin: 30,
    backgroundColor: '#454955',
    borderRadius: 2,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#454955'
  },
  modalButtonPrimary: {
  	backgroundColor: '#72B01D'
  },
  modalButtonText: {
    color: '#F3EFF5',
    fontSize: 20,
    fontWeight: '800',
    margin: 15
  }
});

export default CustomTimerModal;