/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, Title, Text, Button,
} from 'native-base';
import { SettingScreenType } from './screenTypes';


const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    fontSize: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  activeTitle: {
    color: 'red',
  },
});


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
