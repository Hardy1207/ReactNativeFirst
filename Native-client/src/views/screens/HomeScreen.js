/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Container, Title, Text, Button,
} from 'native-base';


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

const HomeScreen = () => (
  <Container>
    <Title>
      <Text>This is the home screen</Text>
    </Title>
    <Button style={styles.button} onPress={Actions.settings}>
      <Text>Click Me!</Text>
    </Button>
  </Container>
);

export default HomeScreen;
