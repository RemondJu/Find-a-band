import { combineReducers } from 'redux';
import welcome from './welcome';
import modalDisplay from './modalDisplay';
import bands from './bands';
import shouldDisplayBands from './shouldDisplayBands';
import shouldDisplayUsers from './shouldDisplayUsers';
import user from './user';
import {
  fetchIsLoading,
  fetchHasErrored,
  fetchBandsSuccess,
  fetchBandSuccess,
  fetchUsersSuccess,
} from './fetch';

const allReducers = combineReducers({
  welcome,
  modalDisplay,
  bands,
  shouldDisplayBands,
  shouldDisplayUsers,
  fetchBandsSuccess,
  fetchBandSuccess,
  fetchUsersSuccess,
  fetchIsLoading,
  fetchHasErrored,
  user,
});

export default allReducers;
