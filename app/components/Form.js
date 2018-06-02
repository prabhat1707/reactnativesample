import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  AsyncStorage,
  Alert,
  Platform
} from 'react-native';
import firebase from 'firebase';


export default class Logo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storeEmail: '',
      storePass: '',
      email: ' ',
      password: ' ',
      emailError: true,
      passwordError: true
    }
  }



  getValues() {
    this.props.router();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((user) => {
      // If you need to do anything with the user, do it here
      // The user will be logged in automatically by the 
      // `onAuthStateChanged` listener we set up in App.js earlier
      // this.props.router();
    })
    .catch((error) => {
      const { code, message } = error;
      // For details of error codes, see the docs
      // The message contains the default Firebase string
      // representation of the error
    });

    //  else {
    //   this.props.router();
    // }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Email"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          keyboardType="email-address"
          onChangeText={(text) => this.setState({ email: text })}
          onSubmitEditing={() => this.password.focus()}
        />
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          onChangeText={(text) => this.setState({ password: text })}
          ref={(input) => this.password = input}
        />
        <Text style={styles.button} onPress={this.props.onPress}>
          <Text style={styles.buttonText}  >{this.props.type}</Text>
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    padding: 12,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10
  },
  button: {
    width: 300,
    textAlign: 'center',
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
   
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }

});