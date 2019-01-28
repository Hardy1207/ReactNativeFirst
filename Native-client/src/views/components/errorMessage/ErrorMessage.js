/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import {
  Container, Text, Button,
} from 'native-base';

class ErrorMessage extends React.PureComponent {
  render() {
    return (
      <Container>
        <Text>
          {this.props.message}
        </Text>
        <Button onPress={this.props.onRetry}>
          <Text>
            On Retry
          </Text>
        </Button>
      </Container>
    );
  }
}

export default ErrorMessage;
