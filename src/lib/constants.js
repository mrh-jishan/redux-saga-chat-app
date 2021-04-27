import moment from 'moment';
export const SEARCH_FILTER_TYPES = {
  USERS: 'users',
  ALBUMS: 'albums'
};

export const DATE_FILTER = {
  Today: moment(),
  Yesterday: moment().subtract(1, 'days')
};
