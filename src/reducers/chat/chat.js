const types = {
  CHAT: {
    SENT: 'CHAT_SENT',
    RECEIVED: 'CHAT_RECEIVED'
  }
};
const initalState = {
  chats: [],
  lastMsgSent: null
};
const chatReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case types.CHAT.RECEIVED: {
      return {
        chats: [...state.chats, payload]
      };
    }
    case types.CHAT.SENT: {
      return {
        chats: [...state.chats, payload],
        lastMsgSent: payload
      };
    }
    default:
      return state;
  }
};
const sendChatMessage = payload => ({ type: types.CHAT.SENT, payload });
const receiveChatMessage = payload => ({ type: types.CHAT.RECEIVED, payload });

const actions = {
  sendChatMessage,
  receiveChatMessage
};
const getState = state => state.app.chat;

const selectors = {
  getState: getState,
  getChats: state => getState(state).chats
};
export { types, actions, selectors };

export default chatReducer;
