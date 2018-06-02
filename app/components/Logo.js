import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';


export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            alignSelf: 'center',
            height: 150,
            width: 150,
            borderWidth: 1,
            borderRadius: 75
          }}
          source={require('../images/justFun.jpg')}
          resizeMode="stretch" 
        />
        <Text style={styles.logoText}>Welcome to My app.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.7)'
  }
});
