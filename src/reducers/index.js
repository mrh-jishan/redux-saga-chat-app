import { combineReducers } from 'redux';
import searchReducer from './search';
import chatReducer from './chat';

export default combineReducers({
  search: searchReducer,
  chat: chatReducer
});
