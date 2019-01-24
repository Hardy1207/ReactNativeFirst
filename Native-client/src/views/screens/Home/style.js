import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    fontSize: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  activeTitle: {
    color: 'red',
  },
});

export default styles;
