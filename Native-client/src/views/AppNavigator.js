import { createStackNavigator } from 'react-navigation';
import SettingScreen from './screens/Setting/SettingScreen';
import HomeScreen from './screens/Home/HomeScreen';
import EditScreen from './screens/Edit/EditScreen';
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

export default AppNavigator;
