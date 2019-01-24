import { StyleSheet } from 'react-native';

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

export default styles;
