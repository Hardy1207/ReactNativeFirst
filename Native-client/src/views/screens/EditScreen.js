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
          <View style={styles.button_group}>
                <Button info style={styles.accept_button}>
                    <Text style={styles.button_text}> 
                        Save
                    </Text>
                </Button>
                <Button info style={styles.cancel_button}>
                    <Text  style={styles.button_text}>
                        Cancel
                    </Text>
                </Button>
            </View>
      </Container>
    )
  }
};

const styles = StyleSheet.create({
    container: {
      paddingTop: '40%',
      paddingRight: '10%',
      paddingLeft: '10%',
    },
    button_group: {
        marginTop: '5%',
        flexDirection: 'row',
      },
    accept_button: {
      width: '50%',
      marginRight: '5%',
      textAlign:'center',
      justifyContent: 'center',
    },
    cancel_button: {
      height: 'auto',
      backgroundColor: '#A9A9A9',
      textAlign:'center',
      justifyContent: 'center',

    },
    button_text: {
      fontWeight:'bold',
      color:'#fff'
    }
  });

export default EditScreen;