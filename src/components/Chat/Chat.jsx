import React from 'react';
import './styles.css';

const renderChat = ({ user, message }, index) => {
  const cls = user === 'Me' ? 'messageSent' : 'messageReceive';
  const className = `${cls} messageLine`;
  return (
    <div key={index} className={className}>
      <div className="messageUser">{user}</div>
      <div className="messageText">{message}</div>
    </div>
  );
};
export default class Chat extends React.Component {
  state = {
    message: ''
  };
  handleEnterKey = event => {
    if (event.key === 'Enter') {
      this.send();
      event.preventDefault();
    }
  };
  handleChange = event => {
    const message = event.target.value;
    this.setState(state => ({ message }));
    event.preventDefault();
  };
  send = () => {
    if (!this.state.message.trim()) {
      return;
    }
    this.props.sendChatMessage({
      user: 'Me',
      message: this.state.message
    });
    this.setState(state => ({ message: '' }));
  };
  componentWillReceiveProps(nextProps) {
    if (this.props.chats.length < nextProps.chats.length) {
      const { messageList } = this.refs;
      requestAnimationFrame(() => {
        messageList.scrollTop = messageList.scrollHeight;
      });
    }
  }
  render() {
    const { chats } = this.props;
    return (
      <div>
        <h2 className="title">
          Chat with John{' '}
          <span aria-label="chatting" role="img">
            {' '}
            👨‍💻
          </span>
        </h2>
        <div className="chatBox">
          <div ref="messageList" className="chatMessageBox">
            {chats.map(renderChat)}
          </div>
          <div className="sendArea">
            <textarea
              value={this.state.message}
              onKeyPress={this.handleEnterKey}
              onChange={this.handleChange}
              className="sendField"
              placeholder="type youe message..."
            />
            <button onClick={this.send} className="sendButton">
              send
            </button>
          </div>
        </div>
      </div>
    );
  }
}
