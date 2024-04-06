import React, { useState, useEffect } from 'react';
import Chat from './Components/onetoone';
import "./chatPage.css" ;

const ChatPage = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text, sender) => {
    const newMessage = { text, sender };
    setMessages([...messages, newMessage]);

    if (sender === 'Anonmyous') {
      // Simulate receiving a message from the other user after 1 second
      setTimeout(() => {
        // Generate random text for the other user's message
        const randomText = getRandomText();
        const newMessageFromOtherUser = { text: randomText, sender: 'Parichay helpline' };
        setMessages(prevMessages => [...prevMessages, newMessageFromOtherUser]);
      }, 1000);
    }
  };

  // Function to generate random text for the other user's message
  const getRandomText = () => {
    const texts = ['Hello!', 'How are you?', 'What\'s up?', 'Nice to meet you!','dont worry! everything will be fine soon' ,'How can I help you? We believe in healing.',"May I know what issue are you facing?"];
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
  };

  return (
    <div className="chat-container"> {/* Wrap the chat component in a div with chat-container class */}
      <div className="chat-page"> {/* Keep the chat-page class for styling */}
        <h1 className="messagehead">Reach out for help</h1>
        <Chat
          messages={messages}
          onSendMessage={handleSendMessage}
          currentUser="Anonmyous"
          otherUser="Parichay Helpline"
        />
      </div>
    </div>
  );
};

export default ChatPage;

