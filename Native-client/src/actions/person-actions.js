import { getPerson, createPerson } from '../core/modules/person/personApi';
import { GET_PERSON_LIST } from './actionTypes';

export function uploadPersonList(newPersonList) {
  return {
    type: GET_PERSON_LIST,
    payload: {
      personList: newPersonList,
    },
  };
}

export function getPersonList() {
  return (dispatch) => {
    getPerson().then((res) => {
      dispatch(uploadPersonList(res.data));
    });
  };
}

export function createNewPerson() {
  return (dispatch) => {
    createPerson().then(dispatch(getPersonList()));
  };
}
