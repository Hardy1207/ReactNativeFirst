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

export const getPersonList = () => async (dispatch) => {
  const response = await getPerson();
  dispatch(uploadPersonList(response.data));
};

export const createNewPerson = () => async (dispatch) => {
  await createPerson();
  dispatch(getPersonList());
};
