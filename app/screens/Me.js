import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../config/data';

class Me extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };

  render() {
    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-native-project-42141.appspot.com/o/defaultUser.jpg?alt=media&token=ef9b5748-9e2a-4483-a2b4-7fc6ff3f06b1'}}
          featured
          title={'Prabhat Rai'}
          caption={'Prabhat.rai@tanzaniteinfotech.com'}
        />

        <Button
          title="Settings"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handleSettingsPress}
        />

        <List>
          <ListItem
            title="Email"
            rightTitle={'Prabhat.rai@tanzaniteinfotech.com'}
            hideChevron
          />
          <ListItem
            title="Phone"
            rightTitle={this.props.phone}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Username"
            rightTitle={'Prabhat rai'}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Birthday"
            rightTitle={this.props.dob}
            hideChevron
          />
          <ListItem
            title="City"
            rightTitle={'Delhi'}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

Me.defaultProps = { ...me };

export default Me;
