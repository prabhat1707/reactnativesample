import React, { Component } from 'react';
import { Root, Tabs } from './config/router';

import firebase from 'firebase';

class App extends Component {

  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyCOUy9UhmYhiSgwJe2xzX9KxzHZmISEoow',
        authDomain: 'react-native-project-42141.firebaseapp.com',
        databaseURL: 'https://react-native-project-42141.firebaseio.com',
        projectId: 'react-native-project-42141',
        storageBucket: 'react-native-project-42141.appspot.com',
        messagingSenderId: '40824416166'
      });
  }
    
  }

  render() {
    return <Root />;
  }
}

export default App;
