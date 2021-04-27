import { connect } from 'react-redux';
import { Chat } from 'components/Chat';
import { actions, selectors } from 'reducers/chat';
const props = state => ({
  chats: selectors.getChats(state)
});
export default connect(props, actions)(Chat);
