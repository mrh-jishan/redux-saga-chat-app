import { combineReducers } from 'redux';
import userReducer, {
  types as userTypes,
  actions as userActions
} from './user';
import filterReducer, {
  types as filterTypes,
  actions as filterActions
} from './filter';
import albumReducer, {
  types as albumTypes,
  actions as albumActions
} from './album';

const types = {
  ...userTypes,
  ...filterTypes,
  ...albumTypes
};
const actions = {
  ...userActions,
  ...albumActions,
  ...filterActions
};
const getState = state => state.app.search;

const selectors = {
  getState,
  getAlbumsData: state => getState(state).albums,
  getUsersData: state => getState(state).users,
  getFilter: state => getState(state).filters
};
export { types, actions, selectors };

export default combineReducers({
  users: userReducer,
  albums: albumReducer,
  filters: filterReducer
});
