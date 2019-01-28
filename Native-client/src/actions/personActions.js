// eslint-disable-next-line no-unused-vars
import { getPerson, createPerson } from '../core/modules/person/personApi';
import { GET_PERSON_LIST_SUCCESS, PERSON_LOADING } from './actionTypes';

export const uploadPersonList = newPersonList => ({
  type: GET_PERSON_LIST_SUCCESS,
  payload: {
    personList: newPersonList,
    isLoading: false,
  },
});

export const personListLoading = () => ({
  type: PERSON_LOADING,
  payload: {
    isLoading: true,
  },
});

export const getPersonList = () => async (dispatch) => {
  try {
    dispatch(personListLoading());
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
