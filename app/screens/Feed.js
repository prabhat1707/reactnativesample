import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList,
  StyleSheet
} from 'react-native';

import AlbumData from './Carditems';

import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';
import Axios from 'axios';

import Loader from '../components/loader';

function getImageUrl (url) {
  if(url == "" || url == null){
     url = 'https://firebasestorage.googleapis.com/v0/b/react-native-project-42141.appspot.com/o/placeholder.png?alt=media&token=f60146fc-fa2f-491a-a14d-a70f5c7fa3e0';
  }
  return url.trim();
}


class Feed extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      articles: []
    }
  }

  
  onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };



  componentDidMount() {
    return Axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=932cb746ea93435ea38eca3fbc61ed51')
      .then((response) => response.data)
      .then((responseJson) => {
        this.setState({ loading: false , articles: responseJson.articles });
      })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {
    return (
      <List>

        <Loader
          loading={this.state.loading} />

        <FlatList
          data={this.state.articles}
          renderItem={({ item }) =>
          <ListItem
            roundAvatar
            title={item.title}
            avatar={{ uri: getImageUrl(item.urlToImage) } }
            onPress={() => this.onLearnMore(item)}
          />
        }
          keyExtractor={(key, index) => index.toString()}
        />
     </List>
    );
  }
}

const styles = StyleSheet.create({
  scrollStyle: {
    padding: 0,
    marginTop: 0,
  },
});

export default Feed;
