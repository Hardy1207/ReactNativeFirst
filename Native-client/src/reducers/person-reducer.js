import { GET_PERSON_LIST } from '../actions/person-actions';

export function personReducer( state  = '', { type , payload})
{
    switch (type) {
        case GET_PERSON_LIST:
            console.log(payload.personList);
            return payload.personList;
        default: 
            return state;
    }
}