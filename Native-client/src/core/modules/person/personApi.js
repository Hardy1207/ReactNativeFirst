import { httpGet, httpPost, httpDelete } from '../../requestApi';

export async function getPerson() {
  const response = await httpGet('/users/get');
  return response;
}

export async function createPerson(person) {
  const response = await httpPost('/users/create', person);
  return response;
}

export async function deletePerson(id) {
  const response = await httpDelete(`/users/delete/${id}`, id);
  return response;
}
