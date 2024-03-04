import { combineReducers } from 'redux';
import { contactReducer } from '../Contacts/reducer';
import { filterReducer } from '../Filter/reducer';

export const rootReducer = combineReducers({
  contactReducer,
  filterReducer,
});
