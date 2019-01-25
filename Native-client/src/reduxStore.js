import {
  applyMiddleware, compose, createStore,
} from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/combineReducer';

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
);


const store = createStore(allReducers, allStoreEnhancers);

export default store;
