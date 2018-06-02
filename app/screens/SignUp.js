import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Logo from '../components/Logo';

import SignUpForm from '../components/SignUpForm';

import firebase from 'firebase';




export default class SignUp extends Component {

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('Tabs');
      }
      // else{
      //     this.props.navigation.navigate('Login');
      // }

    });
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  goToAnother = () => {
    this.child.goToLogin();
  }

  routerForLogin = () => {
    this.props.navigation.navigate('Login');
  }

  routerForHome = () => {
    this.props.navigation.navigate('Tabs');
  }


  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <SignUpForm type="Sign Up" onPress={this.goToAnother} router={this.routerForLogin} ref={instance => { this.child = instance; }} />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already Account ? </Text>
          <Text style={styles.signupButton} onPress={() => this.routerForLogin()} >Sign In</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },

  signupTextCont: {

    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
  },

  LoginText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500'
  }
});
