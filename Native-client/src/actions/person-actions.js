export const GET_PERSON_LIST = 'getPersonList'
import { getPerson, createPerson }  from '../core/modules/person/personApi'


export function uploadPersonList(newPersonList) {
    console.log(newPersonList);
    return {
        type: GET_PERSON_LIST,
        payload: {
            personList : newPersonList
        }
    }
} 

export function getPersonList() {
    return dispatch => {
        getPerson().then( res => {
            dispatch(uploadPersonList(res.data));
        })
    }
}