import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import botIcon from "../assets/chat-bot.png";

const Chat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSendMessage = async () => {
    if(!input || input.length === 0) return;
    const userMessage = input;
    setInput("");
    setMessages([...messages, { role: "user", text: userMessage }]);

    const response = await axios.post("http://localhost:5000/chat", {
      userMessage,
    });
    const botMessage = response.data.response;

    setMessages([
      ...messages,
      { role: "user", text: userMessage },
      { role: "bot", text: botMessage },
    ]);
    
  };

  function formatTextToHTML(text) {
    let formattedText = text;
    formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); 
    formattedText = formattedText.replace(/\*\s(.*?)\n/g, '<li>$1</li>');
    formattedText = formattedText.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>'); 
    formattedText = formattedText.replace(/\n+/g, '<br>'); 
    return formattedText;
  }

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  return (
    <div className={`fixed bottom-10 right-10 transition-all`}>
      <div 
        className=" text-white p-3 rounded-full cursor-pointer text-center fixed bottom-10 right-10 z-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={botIcon} alt="Ask about Medicinal Plants 🌿" className="w-16 h-16"/>
      </div>

      {isOpen && (
        <div 
        className="bg-white shadow-lg rounded-lg flex flex-col max-h-[30rem] w-96 absolute bottom-20 right-20 z-20"
        >
          <div className="bg-blue-600 text-white p-2 text-lg rounded-t-lg">
            <h2 className="text-center font-bold">Herbal Haven Chatbot</h2>
          </div>
          <div className="flex-1 p-4 space-y-2 overflow-y-auto no-scrollbar">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`inline-block rounded-lg p-2 max-w-xs ${
                    message.role === 'user' 
                    ? 'bg-blue-500 text-white'  
                    : 'bg-gray-300 text-black'   
                  }`}
                  dangerouslySetInnerHTML={{ __html: formatTextToHTML(message.text) }}
                />
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex p-2 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 border rounded-lg p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button 
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
