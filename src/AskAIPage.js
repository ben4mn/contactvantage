import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AskAIPage = () => {
  const navigate = useNavigate();
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const quickPrompts = [
    "Summarize today's top 3 customer pain points",
    "Compare AHT trends for international vs. domestic bookings this week",
    "Identify emerging issues in corporate travel policy compliance",
    "Analyze customer sentiment around our new self-service tools",
    "Show me conversion rates for upselling premium services across different client segments",
    "What are the most common reasons for booking modifications in the last 24 hours?",
  ];

  const handleSendMessage = (message = inputMessage) => {
    if (message.trim() !== '') {
      setChatMessages([...chatMessages, { text: message, sender: 'user' }]);
      setInputMessage('');
      // Simulated AI response
      setTimeout(() => {
        setChatMessages(prevMessages => [...prevMessages, { 
          text: "I'm analyzing the data based on your query. Here's what I found: [Simulated AI response based on call analysis and travel data]", 
          sender: 'ai' 
        }]);
      }, 1000);
    }
  };

  return (
    <div className="font-sans m-0 p-0 bg-softgray">
      <nav className="bg-navy text-white p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h1 className="text-2xl font-bold">Executive Dashboard</h1>
              <button 
                onClick={() => navigate('/landing')} 
                className="mt-2 bg-turquoise text-white px-4 py-2 rounded cursor-pointer hover:bg-orange transition-colors"
              >
                Back to Home
              </button>
            </div>
            <div className="flex space-x-2">
              {['Alerts', 'Settings', 'Profile'].map((item, index) => (
                <div key={index} className="px-3 py-1 bg-softgray rounded-md text-navy text-sm hover:bg-turquoise hover:text-white transition-colors">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-6xl mx-auto my-8 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-navy mb-6">Ask AI</h2>
          
          <div className="grid grid-cols-4 gap-6">
            {/* Left Column - Quick Actions and Info */}
            <div className="space-y-6">
              <div className="bg-softgray p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-navy">Quick Actions</h3>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => navigate('/executive')} 
                      className="w-full text-left px-4 py-2 bg-navy text-white rounded hover:bg-turquoise transition-colors"
                    >
                      Back to Dashboard
                    </button>
                  </li>
                </ul>
              </div>
              <div className="bg-softgray p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-navy">AI Capabilities</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Analyze call transcripts and metadata</li>
                  <li>Identify trends and patterns in customer interactions</li>
                  <li>Provide insights on operational efficiency</li>
                  <li>Offer recommendations for service improvements</li>
                  <li>Compare performance across different time periods</li>
                </ul>
              </div>
            </div>

            {/* Right Column - Chat Interface */}
            <div className="col-span-3 bg-softgray p-4 rounded-lg">
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2 text-navy">Suggested Prompts</h4>
                <div className="flex flex-wrap gap-2">
                  {quickPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(prompt)}
                      className="px-3 py-1 bg-navy text-white rounded text-sm hover:bg-turquoise transition-colors"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-96 overflow-y-auto mb-4 bg-white rounded p-4">
                {chatMessages.map((message, index) => (
                  <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    <span className={`inline-block p-2 rounded ${message.sender === 'user' ? 'bg-navy text-white' : 'bg-gray-200 text-navy'}`}>
                      {message.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-grow mr-2 p-2 rounded"
                  placeholder="Ask about call trends, customer sentiment, or operational insights..."
                />
                <button
                  onClick={() => handleSendMessage()}
                  className="px-4 py-2 bg-navy text-white rounded hover:bg-turquoise transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>                
        </div>
      </main>
    </div>
  );
};

export default AskAIPage;