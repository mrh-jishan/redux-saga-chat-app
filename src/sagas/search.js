import { takeLatest, put, select } from 'redux-saga/effects';
import { types, selectors, actions } from 'reducers/search';
import { fetchData } from 'lib/api';
import { SEARCH_FILTER_TYPES } from 'lib/constants';
import { apiCaller } from 'lib/utils';

const userApi = apiCaller(fetchData, actions.userResponse, actions.userError);
const albumApi = apiCaller(
  fetchData,
  actions.albumResponse,
  actions.albumError
);

function* userWorker(action) {
  const filter = yield select(selectors.getFilter);
  yield userApi(SEARCH_FILTER_TYPES.USERS, filter);
}
function* albumWorker(action) {
  const filter = yield select(selectors.getFilter);
  yield albumApi(SEARCH_FILTER_TYPES.ALBUMS, filter);
}

function* filterWorker(action) {
  const { users, albums } = yield select(selectors.getState);
  if (users.open) {
    yield put(actions.fetchUsers());
  }
  if (albums.open) {
    yield put(actions.fetchAlbums());
  }
}
export default function* watcher() {
  yield takeLatest(types.USER.FETCH, userWorker);
  yield takeLatest(types.ALBUM.FETCH, albumWorker);
  yield takeLatest(types.CHANGE_FILTER, filterWorker);
}
