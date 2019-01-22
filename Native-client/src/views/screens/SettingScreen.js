import React, { Component } from 'react';
import PersonList from '../components/PersonList';
import { Container ,  Button , Text, FlatList} from 'native-base';
import { Actions } from 'react-native-router-flux';

export class SettingScreen extends Component {
  render() {
    return (
      <Container>
        <PersonList/>
        <Text>This is the Settings screen</Text>
        <Button onPress={Actions.home}> 
          <Text>
            Click
          </Text>
        </Button>
      
      </Container>
    )
  }
};

export default SettingScreen;