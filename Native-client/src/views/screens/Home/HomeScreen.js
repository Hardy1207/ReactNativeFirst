/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Container, Title, Text, Button,
} from 'native-base';
import styles from './style';
import { SettingScreenType } from '../screenTypes';


class HomeScreen extends React.PureComponent {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Title>
          <Text>This is the home screen</Text>
        </Title>
        <Button style={styles.button} onPress={() => navigation.navigate(SettingScreenType)}>
          <Text>Click Me!</Text>
        </Button>
      </Container>
    );
  }
}

export default HomeScreen;
