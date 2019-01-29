/* eslint-disable no-console */
import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Container, Text, Button, Input, Form, Item, View,
} from 'native-base';
import { Alert } from 'react-native';
import styles from './style';
import CreateForm from '../../components/createForm/CreateForm';

class CreateScreen extends React.PureComponent {
  createNewPerson = async () => {
    try {
      await this.props.navigation.state.params.createPerson({
        name: 'TestCreate',
        age: '20',
      });
    } catch (err) {
      this.showAlert(err.message);
    }
  }

  showAlert = (alertMessage) => {
    Alert.alert(
      'Error',
      alertMessage,
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        <CreateForm />
        <View style={styles.button_group}>
          <Button info style={styles.accept_button} onPress={this.createNewPerson}>
            <Text style={styles.button_text}>
            Create
            </Text>
          </Button>
          <Button info style={styles.cancel_button}>
            <Text style={styles.button_text}>
            Cancel
            </Text>
          </Button>
        </View>
      </Container>
    );
  }
}


export default CreateScreen;
