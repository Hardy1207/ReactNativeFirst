import { GET_PERSON_LIST } from '../actions/actionTypes';


export default function personReducer(state = '', { type, payload }) {
  switch (type) {
    case GET_PERSON_LIST:
      return payload.personList;
    default:
      return state;
  }
}
