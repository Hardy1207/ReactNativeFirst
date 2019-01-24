/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import SettingScreen from './screens/SettingScreen';
import HomeScreen from './screens/HomeScreen';
import EditScreen from './screens/EditScreen';
import store from '../reduxStore';
import { HomeScreenType, EditScreenType, SettingScreenType } from './screens/screenTypes';

const AppNavigator = createStackNavigator({
  [HomeScreenType]: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  [EditScreenType]: {
    screen: EditScreen,
    navigationOptions: {
      headerTitle: 'Edit',
    },
  },
  [SettingScreenType]: {
    screen: SettingScreen,
    navigationOptions: {
      headerTitle: 'Settings',
    },
  },
});

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
