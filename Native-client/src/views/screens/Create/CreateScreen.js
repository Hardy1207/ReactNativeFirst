/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Container, Text, Button, Input, Form, Item, View,
} from 'native-base';
import styles from './style';

class CreateScreen extends React.PureComponent {
  CreateNewPerson = () => {
    this.props.navigation.state.params.createPerson({
      name: 'TestCreate',
      age: '2019',
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item>
            <Input placeholder="Name" />
          </Item>
          <Item last>
            <Input placeholder="Age" />
          </Item>
        </Form>
        <View style={styles.button_group}>
          <Button info style={styles.accept_button} onPress={this.CreateNewPerson}>
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