import { combineReducers } from 'redux';
import welcome from './welcome';

const allReducers = combineReducers({
  welcome,
});

export default allReducers;
