import React from 'react';
import {
  Container, Text, Button, Input, Form, Item, View,
} from 'native-base';
import styles from './style';

const EditScreen = () => (
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
      <Button info style={styles.accept_button}>
        <Text style={styles.button_text}>
          Save
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

export default EditScreen;
