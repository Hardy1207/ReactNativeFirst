/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  FlatList, TouchableHighlight,
} from 'react-native';
import {
  Container, Text, View,
} from 'native-base';
import styles from './style';
import { EditScreenType } from '../../screens/screenTypes';


const PersonList = class extends React.Component {
  componentDidMount() {
    this.props.onGetPersonList();
  }

  checkIndexIsEven = index => index % 2 === 0;

  renderPersonList = item => (
    <TouchableHighlight onPress={() => this.props.navigation.navigate(EditScreenType)}>
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
        <FlatList
          style={styles.personFlatList}
          // eslint-disable-next-line no-underscore-dangle
          keyExtractor={item => item._id}
          data={this.props.personList}
          renderItem={this.renderPersonList}
        />
      </Container>
    );
  }
};


export default PersonList;
