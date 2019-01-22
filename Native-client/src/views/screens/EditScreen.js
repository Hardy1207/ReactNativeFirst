import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text, Button , Input , Form, Item, Content, View } from 'native-base';

export class EditScreen extends Component {
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
        <View style={styles.view}>
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
    )
  }
};

const styles = StyleSheet.create({
    view: {
        marginTop: '5%',
        flexDirection: 'row',
        alignSelf: 'flex-start', 
      },
    accept_button: {
      flexDirection: 'row',
      width: '60%',
      marginRight: '5%',
      alignSelf: 'flex-start', 
    },
    cancel_button: {
      color: 'red',
      flexDirection: 'row',
      alignSelf: 'flex-start', 
    },
    button_text: {
      textAlign: 'center',
    }
  });

export default EditScreen;