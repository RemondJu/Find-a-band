import { combineReducers } from 'redux';
import welcome from './welcome';
import modalDisplay from './modalDisplay';
import users from './users';
import bands from './bands';

const allReducers = combineReducers({
  welcome,
  modalDisplay,
  users,
  bands,
});

export default allReducers;
