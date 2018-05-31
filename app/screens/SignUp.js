import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    Button
} from 'react-native';

export default class Profile extends Component {

    openLogin = () => {
        this.props.navigation.navigate('Login');
      };
    

    render() {
        return (
            <Button
            onPress={() => this.openLogin()}
            title="Sign Up"
            color="#841584"
            
          />
        );
    }

}