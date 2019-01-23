import React from 'react';
import {
  Container, Button, Text,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import PersonList from '../components/PersonList';

const SettingScreen = () => (
  <Container>
    <PersonList />
    <Text>This is the Settings screen</Text>
    <Button onPress={Actions.home}>
      <Text>
        Click
      </Text>
    </Button>
  </Container>
);

export default SettingScreen;
