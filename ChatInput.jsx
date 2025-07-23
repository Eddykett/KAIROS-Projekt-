import React, { useState } from 'react';

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      onSend(input);
      setInput('');
    }
  };

  return (
    <div className="flex mt-4">
      <input
        type="text"
        className="flex-grow border border-gray-400 rounded px-3 py-2 mr-2"
        placeholder="Nachricht an KAIROS eingeben..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
      />
      <button
        onClick={handleSend}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Senden
      </button>
    </div>
  );
}
