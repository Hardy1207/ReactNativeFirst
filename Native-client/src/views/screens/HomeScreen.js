import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title,Text , Button, Left, Right, Body, Icon } from 'native-base';

export class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Title>
          <Text >This is the home screen</Text> 
        </Title>
        <Button style={styles.button} onPress={() => {
          return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
              console.log(responseJson.movies);
              return responseJson.movies;
            })
            .catch((error) => {
              console.error(error);
            });
          }} >
          <Text>Fetch Check console!</Text>
        </Button>
        <Button style={styles.button} onPress={Actions.settings} >
          <Text>Click Me!</Text>
        </Button>
        </Container>
    )
  }
}
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
    flexDirection: "row",
    justifyContent: 'center',
    alignSelf: 'center'
  },
  activeTitle: {
    color: 'red',
  },
});

export default HomeScreen