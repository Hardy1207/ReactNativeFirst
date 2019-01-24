import {
  applyMiddleware, compose, createStore, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import personReducer from './reducers/person-reducer';

const allReducers = combineReducers({
  personList: personReducer,
});

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
);


const store = createStore(allReducers, {
  personList: [{
    name: 'Pavel',
    age: '41',
  }],
}, allStoreEnhancers);

export default store;
