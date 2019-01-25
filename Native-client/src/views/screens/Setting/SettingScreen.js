/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Container, Button, Text, Header,
} from 'native-base';
import PersonList from '../../components/personList/PersonList';
import { HomeScreenType, CreateScreenType } from '../screenTypes';
import styles from './style';


class SettingScreen extends React.PureComponent {
  render() {
    // eslint-disable-next-line no-console
    console.log('rerender Settings');
    const { navigation } = this.props;
    return (
      <Container>
        <Header style={styles.header}>
          <Button
            style={styles.buttonAddNewPerson}
            onPress={() => navigation.navigate(CreateScreenType)}
          >
            <Text>
              Add New Person
            </Text>
          </Button>
        </Header>
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
