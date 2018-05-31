import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    Button
} from 'react-native';

export default class Profile extends Component {

    openHome = () => {
        this.props.navigation.navigate('Tabs');
      };
    

    render() {
        return (
            <Button
            onPress={() => this.openHome()}
            title="Login Button"
            color="#841584"
            
          />
        );
    }

}