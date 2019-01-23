import React from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  StyleSheet, FlatList, TouchableHighlight,
} from 'react-native';
import {
  Container, Button, Text, Header, View,
} from 'native-base';
import {
  getPersonList, createNewPerson,
} from '../../actions/person-actions';


const styles = StyleSheet.create({
  personFlatList: {
  },
  person_listItemEven: {
    borderWidth: 1,
    borderColor: '#696969',
    padding: '5%',
  },
  button_add_new_person: {
    justifyContent: 'flex-end',
  },
});

const PersonList = class extends React.Component {
  mapActionsToProps = {
    onGetPersonList: getPersonList,
    onCreateNewPerson: createNewPerson,
  };

  componentDidMount() {
    const { props } = this.context;
    props.onGetPersonList();
  }

  addNewPerson = (e) => {
    e.preventDefault();
    /*  e.preventDefault();
    this.props.createNewPerson(); */
  }

  checkIndexIsEven = () => (n => n % 2 === 0);

  render() {
    const { props } = this.context;
    return (
      <Container>
        <Header>
          <Button style={styles.button_add_new_person} onPress={this.addNewPerson}>
            <Text>
              Add New Person
            </Text>
          </Button>
        </Header>
        <FlatList
          style={styles.personFlatList}
          data={props.personList}
          renderItem={({ item, index }) => (
            <TouchableHighlight onPress={Actions.edit}>
              <View
                // eslint-disable-next-line no-underscore-dangle
                key={item._id}
                style={[styles.person_listItemEven,
                  { backgroundColor: this.checkIndexIsEven(index) ? '#FFFAF0' : '#F5F5F5' }]}
              >
                <Text>{item.name}</Text>
                <Text>{item.age}</Text>
              </View>
            </TouchableHighlight>
          )}
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
