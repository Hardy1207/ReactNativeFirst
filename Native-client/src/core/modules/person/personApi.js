import { httpGet, httpPost } from '../../requestApi';

export async function getPerson(){
    return await httpGet("/users/get");
}

export async function createPerson(person){
    console.log(person);
    return await httpPost("/users/create", person);
}


