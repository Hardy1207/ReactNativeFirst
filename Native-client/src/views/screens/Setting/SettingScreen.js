/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Container, Button, Text,
} from 'native-base';
import PersonList from '../../components/PersonList';
import { HomeScreenType } from '../screenTypes';


class SettingScreen extends React.PureComponent {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <PersonList navigation={navigation} />
        <Text>This is the Settings screen</Text>
        <Button onPress={() => navigation.navigate(HomeScreenType)}>
          <Text>
            Click
          </Text>
        </Button>
      </Container>
    );
  }
}

export default SettingScreen;
