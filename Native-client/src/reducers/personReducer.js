import { GET_PERSON_LIST_SUCCESS, PERSON_LOADING } from '../actions/actionTypes';


export default function personReducer(state = {
  personList: [{
    _id: '1',
    name: 'Pavel',
    age: '41',
  }],
  isLoading: false,
}, { type, payload }) {
  switch (type) {
    case GET_PERSON_LIST_SUCCESS: {
      return payload;
    }
    case PERSON_LOADING:
      return payload;
    default:
      return state;
  }
}
