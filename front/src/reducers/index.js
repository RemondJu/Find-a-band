import { combineReducers } from 'redux';
import welcome from './welcome';
import modalDisplay from './modalDisplay';
import users from './users';
import bands from './bands';
import bandsDisplayClass from './bandsDisplayClass';
import usersDisplay from './usersDisplay';

const allReducers = combineReducers({
  welcome,
  modalDisplay,
  users,
  bands,
  bandsDisplayClass,
  usersDisplay,
});

export default allReducers;
