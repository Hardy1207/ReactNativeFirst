import React from 'react';
import {
  View, Text, Form,
} from 'native-base';
import { Field, reduxForm } from 'redux-form';
import NameInput from '../nameInput/NameInput';
import styles from './style';

const CreateForm = () => (
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
  </View>
);
export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(CreateForm);
