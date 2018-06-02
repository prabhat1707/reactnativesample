import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component {
  
    goToAnother = () =>{
        //this.props.navigation.navigate('SignUp')
        //this.child.getValues()
       this.child.getValues();
    }

    routerLogin = () => {
       this.props.navigation.navigate('Home');
    }
    goToSignUp = () =>{
       this.props.navigation.navigate('SignUp');
    }

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
        <Text style={styles.LoginText}>Login To Continue</Text>
				<Form type="Login" onPress={this.goToAnother} router={this.routerLogin} ref={instance => { this.child = instance; }}/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<Text style={styles.signupButton} onPress={() => this.goToSignUp()} > Signup</Text>
				</View>
			</View>	
			)
	}
}
const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  },

  LoginText: {
  	color:'#ffffff',
  	fontSize:20,
  	fontWeight:'500'
  }
});