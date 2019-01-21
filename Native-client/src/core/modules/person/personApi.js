import { httpGet } from '../../requestApi';

export async function getPerson(){
    return await httpGet("/get");
}

// export async function createPerson(){
//     return await httpPost("/get");
// }


