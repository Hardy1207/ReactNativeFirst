import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import PersonList from './PersonList';
import { Container, Header, Title,Text , Button, Left, Right, Body, Icon } from 'native-base';

export class Home extends Component {
  render() {
    return (
      <Container>
        <Title>
          <Text >This is the home screen</Text> 
        </Title>
        <Button style={styles.button} onPress={() => this.props.navigation.navigate('SettingScreen')} >
          <Text>Click Me!</Text>
        </Button>
        <Button style={styles.button}  onPress={() => {
          console.log('Hi from React Native');
        }}>
          <Text>Fetch Check console!</Text>
        </Button>
        <PersonList/>
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

export default Home