import React, { Component } from 'react';
import { Container, Text, Button , Input , Form } from 'native-base';

export class EditScreen extends Component {
  render() {
    return (
      <Container>
       <Form>
           <Input>
               Test
           </Input>
       </Form>
       <Button>
           <Text>
               Save
           </Text>
       </Button>
      </Container>
    )
  }
};

export default EditScreen;