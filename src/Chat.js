import React from 'react';

const Chat = () => {
  return (
    <div className="container">   
      <div id="message-container"></div>
  <form id="send-container">
    <input type="text" id="message-input" />
    <button type="submit" id="send-button">Send</button>
    </form>
    </div>
  );
}

export default Chat;
