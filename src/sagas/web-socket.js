import { take, fork, takeEvery, put, call } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import { createSocketPayload } from 'lib/utils';

const wsUri = 'wss://echo.websocket.org';
const ws = new WebSocket(wsUri);

const listeners = {};

function socketChannel() {
  return eventChannel(emitter => {
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: 'SOCKET_CONNECTED',
          payload: 'hello server'
        })
      );
    };
    ws.onerror = error => {
      console.log('WebSocket error ' + error);
      emitter(END);
    };
    ws.onmessage = e => {
      let msg = null;
      try {
        msg = JSON.parse(e.data);
      } catch (err) {
        console.error(`Error parsing : ${e.data}`);
      }
      console.log(msg);
      if (msg) {
        const { payload, type } = msg;
        emitter({ type, payload });
      }
    };
    // unsubscribe function
    return () => {
      console.log('Socket off');
      emitter(END);
    };
  });
}
export default function* watcher() {
  const channel = yield call(socketChannel);
  while (true) {
    const { payload, type } = yield take(channel);
    console.log(type);
    const worker = listeners[type];
    if (worker) {
      yield fork(worker, { payload, type });
    }
  }
}
export function subscribe(type, saga) {
  listeners[type] = saga;
}
export function sendMessage(...args) {
  ws.send(createSocketPayload(...args));
}
