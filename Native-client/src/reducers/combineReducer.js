import {
  combineReducers,
} from 'redux';
import personReducer from './personReducer';

const allReducers = combineReducers({
  personList: personReducer,
});

export default allReducers;
