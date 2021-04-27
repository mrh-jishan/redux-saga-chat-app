import { DATE_FILTER } from 'lib/constants';
import { simpleActionCreator } from 'lib/utils';

const types = {
  CHANGE_FILTER: 'CHANGE_FILTER'
};
const initalState = {
  date: DATE_FILTER.Today
};
const filterReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER: {
      return {
        ...state,
        ...payload
      };
    }
    default:
      return state;
  }
};

const changeFilter = simpleActionCreator(types.CHANGE_FILTER);

const actions = {
  changeFilter
};
const selectors = {};
export { types, actions, selectors };
export default filterReducer;
