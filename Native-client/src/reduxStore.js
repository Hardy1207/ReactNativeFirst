import { applyMiddleware , compose ,createStore, combineReducers } from 'redux';
import { personReducer } from './reducers/person-reducer';
import thunk from 'redux-thunk';

const allReducers = combineReducers({
    personList: personReducer
})

const allStoreEnhancers = compose(
    applyMiddleware(thunk)
)


export const store = createStore(allReducers, {
    personList: [{
        name: 'Pavel',
        age: '41'
    }]
},
allStoreEnhancers);
