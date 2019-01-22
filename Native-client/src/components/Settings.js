import React, { Component } from 'react';
import PersonList from './PersonList';
import { Container ,  Button , Text} from 'native-base';

export class Settings extends Component {
  render() {
    return (
      <Container>
        <Text>This is the Settings screen</Text>
        <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Home"/>
        <PersonList/>
      </Container>
    )
  }
};

export default Settings;