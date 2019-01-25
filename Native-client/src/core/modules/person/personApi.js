import { httpGet, httpPost, httpDelete } from '../../requestApi';
import { USERS_GET, USERS_CREATE, USERS_DELETE } from './requestTypes';

export async function getPerson() {
  const response = await httpGet(USERS_GET);
  return response;
}

export async function createPerson(person) {
  const response = await httpPost(USERS_CREATE, person);
  return response;
}

export async function deletePerson(id) {
  const response = await httpDelete(USERS_DELETE + id, id);
  return response;
}
