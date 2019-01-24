/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import SettingScreen from './screens/SettingScreen';
import HomeScreen from './screens/HomeScreen';
import EditScreen from './screens/EditScreen';
import PersonList from './components/PersonList';
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
      headerTitle: 'Home',
    },
  },
  PersonList: {
    screen: PersonList,
  },
});
/* const App = () => (
  <Provider store={store}>
    <Router>
      <Stack key="root">
        <Scene key="settings" component={SettingScreen} title="Settings" />
        <Scene key="home" component={HomeScreen} title="Home" />
        <Scene key="edit" component={EditScreen} title="Edit" />
      </Stack>
    </Router>
  </Provider>
); */

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
