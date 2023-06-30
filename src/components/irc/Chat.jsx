import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, orderBy, onSnapshot, doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../../backend/firebase';

const Chat = () => {

  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  useEffect(() => {
    const initializeChat = async () => {
      // Create chatLog collection if it doesn't exist
      const chatLogRef = doc(db, 'chatLog', 'chat');
      const chatLogSnapshot = await getDoc(chatLogRef);
      if (!chatLogSnapshot.exists()) {
        await setDoc(chatLogRef, { messages: [] });
      }

      const unsubscribeChatLog = fetchChatLog();
      return () => {
        unsubscribeChatLog();
      };
    };

    initializeChat();
  }, []);

  const fetchChatLog = () => {
    const chatRef = doc(db, 'chatLog', 'chat');
    const unsubscribe = onSnapshot(chatRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const messages = docSnapshot.data().messages;
        setChatLog(messages);
      }
    });
    return unsubscribe;
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (username && message) {
      const newMessage = {
        username: username,
        message: message,
        timestamp: new Date().getTime(),
      };

      try {
        const chatLogRef = doc(db, 'chatLog', 'chat');
        await updateDoc(chatLogRef, {
          messages: [...chatLog, newMessage],
        });
        setMessage('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-md p-8 max-w-md mx-auto">
      <div className="mb-4">
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <textarea
          value={message}
          onChange={handleMessageChange}
          placeholder="Enter your message"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Send
        </button>
      </div>
      <div className="border border-gray-300 rounded-md p-4 max-h-48 overflow-y-auto">
        {chatLog.map((m) => (
          <div key={m.timestamp}>
            <div className="text-gray-500 text-sm mb-1">{m.username}</div>
            <div className="mb-2">{m.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
