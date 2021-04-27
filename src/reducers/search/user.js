import { simpleActionCreator, apiTypeCreator } from 'lib/utils';

const types = {
  USER: apiTypeCreator('USER')
};
const initalState = {
  open: false,
  results: [],
  loading: false,
  error: false
};
const userReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case types.USER.FETCH: {
      return {
        open: true,
        error: false,
        results: [],
        loading: true
      };
    }
    case types.USER.SUCCESS: {
      return {
        ...state,
        results: payload,
        loading: false
      };
    }
    case types.USER.FAILURE: {
      return {
        ...state,
        results: [],
        error: true,
        loading: false
      };
    }
    default:
      return state;
  }
};
const fetchUsers = simpleActionCreator(types.USER.FETCH);
const userResponse = simpleActionCreator(types.USER.SUCCESS);
const userError = simpleActionCreator(types.USER.FAILURE);

const actions = {
  fetchUsers,
  userResponse,
  userError
};
const selectors = {};
export { types, actions, selectors };

export default userReducer;
