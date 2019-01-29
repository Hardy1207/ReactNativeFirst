import { httpGet, httpPost, httpDelete } from '../../requestApi';
import { USERS_GET, USERS_CREATE, USERS_DELETE } from './requestTypes';

export async function getPerson() {
  try {
    const response = await httpGet(USERS_GET);
    return response;
  } catch (err) {
    throw new Error();
  }
}

export async function createPerson(person) {
  try {
    const response = await httpPost(USERS_CREATE, person);
    return response;
  } catch (err) {
    throw new Error();
  }
}

export async function deletePerson(id) {
  try {
    const response = await httpDelete(USERS_DELETE + id, id);
    return response;
  } catch (err) {
    throw new Error();
  }
}
