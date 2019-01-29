import React from 'react';
import {
  Container, Title, Text, Button,
} from 'native-base';
import styles from './style';
import { SettingScreenType } from '../screenTypes';


class HomeScreen extends React.PureComponent {
  goToSettingScreen = () => {
    const { navigation } = this.props;
    navigation.navigate(SettingScreenType);
  }

  render() {
    return (
      <Container>
        <Title>
          <Text>This is the home screen</Text>
        </Title>
        <Button style={styles.button} onPress={this.goToSettingScreen}>
          <Text>Click Me!</Text>
        </Button>
      </Container>
    );
  }
}

export default HomeScreen;
