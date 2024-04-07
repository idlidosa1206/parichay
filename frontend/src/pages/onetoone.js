import React, { useState } from "react";
import "./onetoone.css";
const Chat = ({ messages, onSendMessage, currentUser, otherUser }) => {
  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      onSendMessage(inputText, currentUser); // Sending message as current user
      setInputText("");
    }
  };

  return (
    <div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.sender === currentUser ? "sent" : "received"
            }`}
          >
            <div className="username">
              {message.sender === currentUser ? currentUser : otherUser}
            </div>
            <div className="message-text">{message.text}</div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
