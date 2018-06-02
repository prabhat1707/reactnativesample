import React from 'react';
import { TabNavigator, StackNavigator, createSwitchNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../screens/Feed';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';
import Profile from '../screens/ Profile';

import SignUp from '../screens/SignUp';
import Login from '../screens/Login';

 const FeedStack = StackNavigator({
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

 const Tabs = TabNavigator({
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

 const SettingsStack = StackNavigator({
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

 const AuthStack = StackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
}); 

export const Screen2 = StackNavigator({
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

//  const Root = StackNavigator({
//   AuthStack:{
//     screen: AuthStack,
//   },
//   Tabs: {
//     screen: Tabs,
//   },
//   Settings: {
//     screen: SettingsStack,
//   },
// }, {
//   mode: 'modal',
//   headerMode: 'none',
// });

export const Root =  createSwitchNavigator(
  {
    AuthStack: AuthStack,
    Screen2: Screen2,
  },
  {
    initialRouteName: 'AuthStack',
  }
);
