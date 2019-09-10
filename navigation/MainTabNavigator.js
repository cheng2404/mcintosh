import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// Home Navigation
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config,
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
    focused={focused}
    name={
      Platform.OS === 'ios'
        ? `ios-home${focused ? '' : ''}`
        : 'md-information-circle'
    }
    />
  ),
  tabBarVisible: true,
};

HomeStack.path = '';

// Suggestion Navigation
const SuggestionStack = createStackNavigator(
  {
    Suggestion: HomeScreen,
  },
  config,
)

SuggestionStack.navigationOptions = {
  tabBarLabel: 'Suggestion',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-document${focused ? '' : ''}`
          : 'md-document'
      }
    />
  ),
  tabBarVisible: true,
}

SuggestionStack.path = '';


// Explore Navigation
const ExploreStack = createStackNavigator(
  {
    Explore: HomeScreen,
  },
  config,
)

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-compass${focused ? '' : ''}`
          : 'md-compass'
      }
    />
  ),
  tabBarVisible: true,
}

ExploreStack.path = '';

// Account Navigation
const AccountStack = createStackNavigator(
  {
    Explore: ProfileScreen,
  },
  config,
)

AccountStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-person${focused ? '' : ''}`
          : 'md-person'
      }
    />
  ),
  tabBarVisible: true,
}

AccountStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SuggestionStack,
  ExploreStack,
  AccountStack
});

tabNavigator.path = '';

export default tabNavigator;
