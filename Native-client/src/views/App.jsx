import React from 'react';
import { Provider } from 'react-redux';
import {
  Router, Stack, Scene,
} from 'react-native-router-flux';
import { SettingScreen } from './screens/SettingScreen';
import { HomeScreen } from './screens/HomeScreen';
import { EditScreen } from './screens/EditScreen';
import store from '../reduxStore';


const App = () => (
  <Provider store={store}>
    <Router>
      <Stack key="root">
        <Scene key="settings" component={SettingScreen} title="Settings" />
        <Scene key="home" component={HomeScreen} title="Home" />
        <Scene key="edit" component={EditScreen} title="Edit" />
      </Stack>
    </Router>
  </Provider>
);

export default App;
