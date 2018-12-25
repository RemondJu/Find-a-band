import { combineReducers } from 'redux';
import welcome from './welcome';
import modalDisplay from './modalDisplay';
import users from './users';
import bands from './bands';
import shouldDisplayBands from './shouldDisplayBands';
import shouldDisplayUsers from './shouldDisplayUsers';

const allReducers = combineReducers({
  welcome,
  modalDisplay,
  users,
  bands,
  shouldDisplayBands,
  shouldDisplayUsers,
});

export default allReducers;
