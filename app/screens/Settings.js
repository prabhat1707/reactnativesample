import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import firebase from 'firebase';


class Settings extends Component {

  goToProfile = (user) => {
    this.props.navigation.navigate('Profile');
  };

  logOut = (user) => {
    firebase.auth().signOut();
    this.props.navigation.navigate('SignUp');
  };


  render() {
    return (
      <ScrollView>
        <List>
          <ListItem
            title="Notifications"
          />
          <ListItem
            title="Profile"
            onPress={() => this.goToProfile()}
          />
          <ListItem
            title="Password"
          />
        </List>
        <List>
          <ListItem
            title="Sign Out"
            onPress={() => this.logOut()}
            // rightIcon={{ name: 'cancel' }}
          />
        </List>
      </ScrollView>
    );
  }
}

export default Settings;
