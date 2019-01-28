import { getPerson, createPerson } from '../core/modules/person/personApi';
import { GET_PERSON_LIST } from './actionTypes';

export const uploadPersonList = newPersonList => ({
  type: GET_PERSON_LIST,
  payload: {
    personList: newPersonList,
  },
});

export const getPersonList = () => async (dispatch) => {
  try {
    const response = await getPerson();
    dispatch(uploadPersonList(response.data));
  } catch (err) {
    throw new Error('Check network connection');
  }
};

export const createNewPerson = newPerson => async (dispatch) => {
  await createPerson(newPerson);
  dispatch(getPersonList);
};
