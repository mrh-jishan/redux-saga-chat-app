import { takeLatest, put, fork, select } from 'redux-saga/effects';
import { types, selectors, actions } from 'reducers/chat';
import { sendMessage, subscribe } from './web-socket';

function* sender(action) {
  const { lastMsgSent } = yield select(selectors.getState);
  sendMessage({ type: types.CHAT.SENT, payload: lastMsgSent });
}
function* chatWorker({ payload }) {
  yield put(actions.receiveChatMessage(payload));
}
export default function* watcher() {
  yield takeLatest(types.CHAT.SENT, sender);
  yield fork(subscribe, types.CHAT.RECEIVED, chatWorker);
}
