import { httpGet, httpPost, httpDelete } from '../../requestApi';

export async function getPerson(){
    return await httpGet("/users/get");
}

export async function createPerson(person){
    console.log(person);
    return await httpPost("/users/create", person);
}

export async function deletePerson(id){
    console.log(id);
    return await httpDelete("/users/delete/" + id, id);
}

