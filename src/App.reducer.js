import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { reducer as Nav } from './Nav';

export default combineReducers({
  Nav,
  form,
})
