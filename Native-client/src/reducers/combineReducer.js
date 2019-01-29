import {
  combineReducers,
} from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import personReducer from './personReducer';

const allReducers = combineReducers({
  person: personReducer,
  form: reduxFormReducer,
});

export default allReducers;
