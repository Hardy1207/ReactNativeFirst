/* eslint-disable arrow-parens */
/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  StyleSheet, FlatList, TouchableHighlight,
} from 'react-native';
import {
  Container, Button, Text, Header, View,
} from 'native-base';
import { getPersonList, createNewPerson } from '../../actions/person-actions';


const styles = StyleSheet.create({
  personFlatList: {
  },
  personListItem: isEvenIndex => ({
    borderWidth: 1,
    borderColor: '#696969',
    backgroundColor: isEvenIndex ? '#FFFAF0' : '#F5F5F5',
    padding: '5%',
  }),
  buttonAddNewPerson: {
    justifyContent: 'flex-end',
  },
});
const PersonList = class extends React.Component {
  mapActionsToProps = {
    onGetPersonList: getPersonList,
    onCreateNewPerson: createNewPerson,
  };

  componentDidMount() {
    this.props.onGetPersonList();
  }

  addNewPerson = (e) => {
    e.preventDefault();
    /*  e.preventDefault();
    this.props.createNewPerson(); */
  }

  checkIndexIsEven = index => {
    console.log(index);
    return index % 2 === 0;
  }

  renderPersonList = (item) => (
    <TouchableHighlight onPress={Actions.edit}>
      <View
        style={styles.personListItem(this.checkIndexIsEven(item.index))}
      >
        <Text>{item.item.name}</Text>
        <Text>{item.item.age}</Text>
      </View>
    </TouchableHighlight>
  )

  render() {
    return (
      <Container>
        <Header>
          <Button style={styles.buttonAddNewPerson} onPress={this.addNewPerson}>
            <Text>
              Add New Person
            </Text>
          </Button>
        </Header>
        <FlatList
          style={styles.personFlatList}
          // eslint-disable-next-line no-underscore-dangle
          keyExtractor={(item) => item._id}
          data={this.props.personList}
          renderItem={this.renderPersonList}
        />
      </Container>
    );
  }
};

const mapActionsToProps = {
  onGetPersonList: getPersonList,
  onCreateNewPerson: createNewPerson,
};

const mapStateToProps = state => ({
  personList: state.personList,
});

export default connect(mapStateToProps, mapActionsToProps)(PersonList);
