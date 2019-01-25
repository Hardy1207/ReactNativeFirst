import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: '40%',
    paddingRight: '10%',
    paddingLeft: '10%',
  },
  button_group: {
    marginTop: '5%',
    flexDirection: 'row',
  },
  accept_button: {
    width: '50%',
    marginRight: '5%',
    textAlign: 'center',
    justifyContent: 'center',
  },
  cancel_button: {
    height: 'auto',
    backgroundColor: '#A9A9A9',
    textAlign: 'center',
    justifyContent: 'center',

  },
  button_text: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
