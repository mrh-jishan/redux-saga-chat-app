import { simpleActionCreator, apiTypeCreator } from 'lib/utils';

const types = {
  ALBUM: apiTypeCreator('ALBUM')
};
const initalState = {
  open: false,
  results: [],
  loading: false,
  error: false
};
const albumReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case types.ALBUM.FETCH: {
      return {
        open: true,
        error: false,
        results: [],
        loading: true
      };
    }
    case types.ALBUM.SUCCESS: {
      return {
        ...state,
        results: payload,
        loading: false
      };
    }
    case types.ALBUM.FAILURE: {
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

const fetchAlbums = simpleActionCreator(types.ALBUM.FETCH);
const albumResponse = simpleActionCreator(types.ALBUM.SUCCESS);
const albumError = simpleActionCreator(types.ALBUM.FAILURE);

const actions = {
  fetchAlbums,
  albumResponse,
  albumError
};
const selectors = {
};
export { types, actions, selectors };

export default albumReducer;
