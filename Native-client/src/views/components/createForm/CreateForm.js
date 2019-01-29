import React from 'react';
import {
  View, Text, Form,
} from 'native-base';
import { TouchableHighlight } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import NameInput from '../nameInput/NameInput';
import styles from './style';

class CreateFormComponent extends React.PureComponent {
  render() {
    return (
      <View style={styles.viewForm}>
        <Form>
          <Text style={styles.fieldName}>Name</Text>
          <Field
            name="name"
            component={NameInput}
            type="text"
            placeholder="Name"
          />
          <Text style={styles.fieldName}>Age</Text>
          <Field
            name="age"
            component={NameInput}
            type="number"
            placeholder="Age"
          />
        </Form>
        <TouchableHighlight onPress={this.props.handleSubmit}>
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const CreateForm = reduxForm({
  form: 'create',
})(CreateFormComponent);

export default CreateForm;
