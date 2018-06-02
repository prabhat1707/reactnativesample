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

import { Button, Content } from 'native-base';


import HideableView from './HidableView';


export default class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            emailError: false,
            passwordError: false
        };
    }

    validateEmail = (text) => {
        // console.log(text);
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false || text.length === 0) {
            console.log('Email is Not Correct');
            this.setState({ email: text, emailError: true });
            return false;
        }

        this.setState({ email: text, emailError: false });
        console.log('Email is Correct');
        return true;
    }

    validatePassword = (text) => {
        if (text.length < 6 || text.length === 0) {
            this.setState({ password: text, passwordError: true });
        } else {
            this.setState({ password: text, passwordError: false });
        }
    }

    goToLogin = () => {
        if (this.state.email === 0 || this.state.password === 0) {
            if (!Platform.OS) {
                ToastAndroid.show('Please remove error first', ToastAndroid.SHORT);
            } else {
                Alert.alert(
                    'Please remove error first'
                );
            }
        } else {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((user) => {

                    // If you need to do anything with the user, do it here
                    // The user will be logged in automatically by the
                    // `onAuthStateChanged` listener we set up in App.js earlier
                })
                .catch((error) => {
                    const { code, message } = error;
                    // For details of error codes, see the docs
                    // The message contains the default Firebase string
                    // representation of the error
                });
        }
    }


    render() {
        return (
            <View style={styles.container} >
                <View>
                    <TextInput
                        style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Email"
                        placeholderTextColor="#ffffff"
                        selectionColor="#fff"
                        keyboardType="email-address"
                        onChangeText={(text) => this.validateEmail(text)}

                    />
                    <HideableView visible={this.state.emailError} removeWhenHidden>
                        <Text style={{ marginLeft: 10, fontSize: 10, color: '#FFF' }}>Invalid Email</Text>
                    </HideableView>
                </View>
                <View>
                    <TextInput
                        style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="UserName"
                        placeholderTextColor="#ffffff"
                        selectionColor="#fff"
                        keyboardType="default"
                        onChangeText={(text) => this.setState({ username: text })}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Create Password"
                        secureTextEntry
                        placeholderTextColor="#ffffff"
                        onChangeText={(text) => this.validatePassword(text)}

                    />
                    <HideableView visible={this.state.passwordError} removeWhenHidden>
                        <Text style={{ marginLeft: 10, fontSize: 10, color: '#FFF' }}>Password Must Be Greater Then 6</Text>
                    </HideableView>
                </View>

                <View style={styles.parent}>
                    <Button rounded info style={styles.urlButtpmStyle}>
                        <Text style={styles.buttonText} onPress={() => this.props.onPress}>{this.props.type}</Text>
                    </Button>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    urlButtpmStyle: {
        paddingLeft: 10,
        paddingRight: 10,
      },
    parent: {
        marginTop: 8,
        marginBottom: 8,
       
      },
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
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center',
    
    }

});
