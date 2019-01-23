export const GET_PERSON_LIST = 'getPersonList'
export const CREATE_NEW_PERSON = 'createPerson'
import { getPerson, createPerson }  from '../core/modules/person/personApi'


export function createNewPerson() {
    return dispatch => {
        createPerson().then( dispatch(getPersonList()))
    }
}


export function getPersonList() {
    return dispatch => {
        getPerson().then( res => {
            dispatch(uploadPersonList(res.data));
        })
    }
}

export function uploadPersonList(newPersonList) {
    console.log(newPersonList);
    return {
        type: GET_PERSON_LIST,
        payload: {
            personList : newPersonList
        }
    }
} 
