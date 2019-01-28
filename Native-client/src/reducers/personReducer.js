import { GET_PERSON_LIST } from '../actions/actionTypes';


export default function personReducer(state = {
  personList: [{
    _id: '1',
    name: 'Pavel',
    age: '41',
  }],
}, { type, payload }) {
  switch (type) {
    case GET_PERSON_LIST: {
      return payload.personList;
    }
    default:
      return state;
  }
}
