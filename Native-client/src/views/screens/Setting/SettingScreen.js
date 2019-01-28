/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Container, Button, Text, Header, Spinner,
} from 'native-base';
import { connect } from 'react-redux';
import PersonList from '../../components/personList/PersonList';
import { CreateScreenType } from '../screenTypes';
import { getPersonList, createNewPerson } from '../../../actions/personActions';
import styles from './style';


class SettingScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    };
  }

  componentDidMount() {
    this.getPersonList();
    // eslint-disable-next-line no-console
    console.log(this.state.error);
  }

  getPersonList = async () => {
    try {
      await this.props.onGetPersonList();
      this.setState({
        error: '',
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      this.setState({
        error: err.message,
      });
    }
  }

  render() {
    // eslint-disable-next-line no-console
    console.log(this.props.person);
    // eslint-disable-next-line no-console
    console.log(this.state.error);
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
        {
          (this.props.person.isLoading && !this.state.error) ? (
            <Spinner style={styles.spinner} />
          ) : (
            <PersonList
              navigation={navigation}
              personList={this.props.person.personList}
              error={this.state.error}
              getPersonList={this.getPersonList}
            />
          )
        }
      </Container>
    );
  }
}

const mapActionsToProps = {
  onGetPersonList: getPersonList,
  onCreateNewPerson: createNewPerson,
};

const mapStateToProps = state => ({
  person: state.person,
});

export default connect(mapStateToProps, mapActionsToProps)(SettingScreen);
