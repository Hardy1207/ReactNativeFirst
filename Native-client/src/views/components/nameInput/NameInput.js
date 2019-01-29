
import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './style';

/**
 * to be wrapped with redux-form Field component
 */
export default function NameInput(props) {
  const { input, ...inputProps } = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
    </View>
  );
}
