import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../screens/Feed';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';
import Profile from '../screens/ Profile';

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      header: null
    },
  },
  Details: {
    screen: UserDetail,
    // navigationOptions: ( { navigation } ) => ({
    //   title: 'Detail',
    // }),
  },
});

export const Tabs = TabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'News',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
