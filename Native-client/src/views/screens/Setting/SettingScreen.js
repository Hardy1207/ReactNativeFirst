/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Container, Button, Text, Header,
} from 'native-base';
import { connect } from 'react-redux';
import PersonList from '../../components/personList/PersonList';
import { HomeScreenType, CreateScreenType } from '../screenTypes';
import { getPersonList, createNewPerson } from '../../../actions/personActions';
import styles from './style';


class SettingScreen extends React.PureComponent {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header style={styles.header}>
          <Button
            style={styles.buttonAddNewPerson}
            onPress={() => navigation.navigate(CreateScreenType,
              { createPerson: this.props.onCreateNewPerson })}
          >
            <Text>
              Add New Person
            </Text>
          </Button>
        </Header>
        <PersonList
          navigation={navigation}
          personList={this.props.personList}
          onGetPersonList={this.props.onGetPersonList}
        />
        <Text>This is the Settings screen</Text>
        <Button onPress={() => navigation.navigate(HomeScreenType)}>
          <Text>
            Click
          </Text>
        </Button>
      </Container>
    );
  }
}

const mapActionsToProps = {
  onGetPersonList: getPersonList,
  onCreateNewPerson: createNewPerson,
};

const mapStateToProps = state => ({
  personList: state.personList,
});

export default connect(mapStateToProps, mapActionsToProps)(SettingScreen);
