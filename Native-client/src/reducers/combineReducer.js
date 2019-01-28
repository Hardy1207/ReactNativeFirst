import {
  combineReducers,
} from 'redux';
import personReducer from './personReducer';

const allReducers = combineReducers({
  person: personReducer,
});

export default allReducers;
