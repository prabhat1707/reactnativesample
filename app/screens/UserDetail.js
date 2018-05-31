import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Linking } from 'react-native';
import { Tile, Text, List, ListItem } from 'react-native-elements';

import {
  CachedImage,
  ImageCacheProvider
} from 'react-native-cached-image';
import { Button, Content } from 'native-base';

function getImageUrl (url) {
  if(url == "" || url == null){
     url = 'https://firebasestorage.googleapis.com/v0/b/react-native-project-42141.appspot.com/o/placeholder.png?alt=media&token=f60146fc-fa2f-491a-a14d-a70f5c7fa3e0';
  }
  return url.trim();
}

class UserDetail extends Component {

  static navigationOptions = {
    header: null
  }

  handleClick = (d) => {
    Linking.canOpenURL(d).then(supported => {
      if (supported) {
        Linking.openURL(d);
      } else {
        console.log("Don't know how to open URI: " + d);
      }
    });
  };

  render() {
    const { author, title, description, urlToImage, publishedAt, url } = this.props.navigation.state.params;

    return (
      <ScrollView contentContainerStyle={styles.center} >
        <Tile
          imageSrc={{ uri: getImageUrl(urlToImage) }}
          featured
          title={author}
          caption={'author'}
        />

        <Text h4 style={styles.titleStyle}>{title}</Text>
        <Text style={styles.desStyle} >{description}</Text>
        <Content style={styles.parent}>
          <Button rounded info style={styles.urlButtpmStyle}>
            <Text style={styles.urlTextStyle} onPress= {() => this.handleClick(url)}>{'Go to WebPage'}</Text>
          </Button>
        </Content>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  parent: {
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'column',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: '#000',
    fontWeight: 'bold',
    padding: 8,
    textAlign: 'center',
    marginTop: 8,
  },
  desStyle: {
    color: '#000',
    padding: 8,
    textAlign: 'center',
    marginTop: 8,
  },
  urlButtpmStyle: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  urlTextStyle: {
    color: '#fff'
  }
});

export default UserDetail;
