import React, { useState } from 'react';
import ChatInput from './components/ChatInput';

function App() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    setMessages([...messages, { sender: 'user', text }]);
    try {
      const response = await fetch('https://dummyjson.com/comments/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body: text }),
      });
      const data = await response.json();
      setMessages((msgs) => [...msgs, { sender: 'kairos', text: `Antwort: "${data.body}" erhalten.` }]);
    } catch (error) {
      setMessages((msgs) => [...msgs, { sender: 'kairos', text: 'Fehler beim Senden. (Demo)' }]);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
        SOPHIA/KAIROS Demo-Chat
      </h1>
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded shadow p-4">
        <div className="min-h-[200px] max-h-[400px] overflow-y-auto mb-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`mb-2 p-2 rounded ${
                msg.sender === 'user' ? 'bg-blue-200 text-blue-900 text-right' : 'bg-gray-300 text-gray-900 text-left'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <ChatInput onSend={sendMessage} />
      </div>
    </div>
  );
}

export default App;
