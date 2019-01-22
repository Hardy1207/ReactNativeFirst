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
import { Container } from 'native-base';
import PersonList from './PersonList';
import { EditScreen } from './EditScreen';
const AppNavigator = createStackNavigator({
  SettingScreen: { screen: Settings},
  HomeScreen: { screen: Home},
  SettingScreen: {screen: PersonList},
  EditScreen: { screen: EditScreen}
});

export default class App extends Component {
  render() {
    return (
      <Container>
        <AppNavigator />
      </Container>
    );
  }
}