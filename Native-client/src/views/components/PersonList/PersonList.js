/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  FlatList, TouchableHighlight,
} from 'react-native';
import {
  Container, Text, View, Button,
} from 'native-base';
import _ from 'lodash';
import styles from './style';
import { EditScreenType } from '../../screens/screenTypes';
import ErrorMessage from '../errorMessage/ErrorMessage';


const PersonList = class extends React.Component {
  checkIndexIsEven = index => index % 2 === 0;

  renderPersonList = item => (
    <TouchableHighlight onPress={() => this.props.navigation.navigate(EditScreenType)}>
      <View
        style={styles.personListItem(this.checkIndexIsEven(item.index))}
      >
        <Text>{_.get(item.item, 'name', 'Pasha') || 'Pasha'}</Text>
        <Text>{_.get(item.item, 'age', '20') || '20'}</Text>
      </View>
    </TouchableHighlight>
  )

  render() {
    console.log(_.filter(this.props.personList, 'name'));
    return (
      <Container>
        {
        (this.props.error) ? (
          <ErrorMessage message={this.props.error} onRetry={this.props.getPersonList} />
        ) : (
          <FlatList
            style={styles.personFlatList}
            // eslint-disable-next-line no-underscore-dangle
            keyExtractor={item => item._id}
            data={this.props.personList}
            renderItem={this.renderPersonList}
          />
        )
      }
        <Button onPress={this.props.getPersonList}>
          <Text>
            On Retry
          </Text>
        </Button>
      </Container>
    );
  }
};


export default PersonList;
