import React, { Component } from 'react';
import SettingScreen from './screens/SettingScreen';
import HomeScreen from './screens/SettingScreen';
import EditScreen  from './screens/EditScreen';
import { Router, Stack , Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux'
import { store } from '../reduxStore'


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
          <Stack key="root">
            <Scene key="settings" component={SettingScreen} title="Settings"/>
            <Scene key="home" component={HomeScreen} title="Home"/>
            <Scene key="edit" component={EditScreen} title="Edit"/>
          </Stack>
        </Router>
      </Provider>
    );
  }
}