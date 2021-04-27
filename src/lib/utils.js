import { put, call } from 'redux-saga/effects';
import { types as ChatTypes } from 'reducers/chat';

const trimArray = arr => arr.filter((item, i) => i < 3);
export const apiCaller = (api, success, failure) => {
  return function*(...args) {
    try {
      const result = yield call(api, ...args);
      yield put(success(trimArray(result)));
    } catch (error) {
      yield put(failure(error));
    }
  };
};

export const simpleActionCreator = type => payload => ({
  type,
  payload
});
export const apiTypeCreator = type => ({
  FETCH: `FETCH_${type}`,
  SUCCESS: `FETCH_${type}_SUCCESS`,
  FAILURE: `FETCH_${type}_FAILURE`
});
export const createSocketPayload = (...args) => {
  return JSON.stringify(socketMessageMock(...args));
};

///temp hack to mimic server
const socketMessageMock = ({ type, payload }) => {
  if (type === ChatTypes.CHAT.SENT) {
    const { message } = payload;
    const user = 'John';
    return { type: ChatTypes.CHAT.RECEIVED, payload: { user, message } };
  }
  return { type, payload };
};
