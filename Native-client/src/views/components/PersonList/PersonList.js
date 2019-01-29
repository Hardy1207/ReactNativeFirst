import React from 'react';
import {
  FlatList, TouchableHighlight,
} from 'react-native';
import {
  Container, Text, View,
} from 'native-base';
import _ from 'lodash';
import styles from './style';
import { EditScreenType } from '../../screens/screenTypes';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { DEFAULT_NAME, DEFAULT_AGE } from './defaultValues';


const PersonList = class extends React.Component {
  goToEditScreen = () => {
    this.props.navigation.navigate(EditScreenType);
  }

  checkIndexIsEven = index => index % 2 === 0;

  renderPersonList = item => (
    <TouchableHighlight onPress={this.goToEditScreen}>
      <View
        style={styles.personListItem(this.checkIndexIsEven(item.index))}
      >
        <Text>{_.get(item.item, 'name', DEFAULT_NAME) || DEFAULT_NAME}</Text>
        <Text>{_.get(item.item, 'age', DEFAULT_AGE) || DEFAULT_AGE}</Text>
      </View>
    </TouchableHighlight>
  )

  render() {
    return (
      <Container>
        {
        (this.props.error) ? (
          <ErrorMessage message={this.props.error} onRetry={this.props.getPersonList} />
        ) : (
          <FlatList
            style={styles.personFlatList}
            keyExtractor={item => item._id}
            data={this.props.personList}
            renderItem={this.renderPersonList}
          />
        )
      }
      </Container>
    );
  }
};


export default PersonList;
