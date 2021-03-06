import { GET_PERSON_LIST, CREATE_NEW_PERSON } from '../actions/actionTypes';


export default function personReducer(state = '', { type, payload }) {
  switch (type) {
    case GET_PERSON_LIST:
      return payload.personList;
    case CREATE_NEW_PERSON:
      return payload.personList;
    default:
      return state;
  }
}
