import React, { Component } from 'react';
import PersonList from '../components/PersonList';
import { Container ,  Button , Text} from 'native-base';
import { Actions } from 'react-native-router-flux';

export class SettingScreen extends Component {
  render() {
    return (
      <Container>
        <Text>This is the Settings screen</Text>
        <Button onPress={Actions.home}> 
          <Text>
            Click
          </Text>
        </Button>
        <PersonList/>
      </Container>
    )
  }
};

export default SettingScreen;