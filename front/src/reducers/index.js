import { combineReducers } from 'redux';
import welcome from './welcome';
import modalDisplay from './modalDisplay';
import users from './users';
import bands from './bands';
import shouldDisplayBands from './shouldDisplayBands';
import shouldDisplayUsers from './shouldDisplayUsers';
import nameInput from './nameInput';
import emailInput from './emailInput';
import messageInput from './messageInput';
import { fetchIsLoading, fetchHasErrored, fetchDataSuccess } from './fetch';

const allReducers = combineReducers({
  welcome,
  modalDisplay,
  users,
  bands,
  shouldDisplayBands,
  shouldDisplayUsers,
  nameInput,
  emailInput,
  messageInput,
  fetchDataSuccess,
  fetchIsLoading,
  fetchHasErrored,
});

export default allReducers;
