import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Settings from './Settings';
import Home from './Home';
import PersonList from './PersonList';
import { Container } from 'native-base';
const AppNavigator = createStackNavigator({
  SettingScreen: { screen: Settings },
  HomeScreen: { screen: Home }
});

export default class App extends Component {
  render() {
    return (
      <Container>
        <AppNavigator />
        <PersonList/>
      </Container>
    );
  }
}