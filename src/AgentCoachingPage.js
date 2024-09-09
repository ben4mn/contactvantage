import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Clipboard, Home, TrendingUp, TrendingDown, Book, Video, FileText, MessageSquare, X, Send, PlusCircle } from 'lucide-react';

const AICoachChat = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const suggestedPrompts = [
    "How can I improve my active listening skills?",
    "What are some strategies for handling difficult customers?",
    "Can you provide tips for improving my average handle time?",
    "How can I better utilize our knowledge base tool?",
  ];

  const sendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);
    // Here you would typically send the message to your AI backend
    // and then add the AI's response to the messages
    // For now, we'll just simulate a response
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "I'm your AI coach. I'm here to help you improve your skills. What would you like to know?", sender: 'ai' }]);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">AI Coach Chat</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Suggested Prompts:</h3>
            <div className="flex flex-wrap gap-2">
              {suggestedPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => sendMessage(prompt)}
                  className="bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
          <div className="flex">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border rounded-l-lg p-2"
            />
            <button
              onClick={() => {
                if (inputMessage.trim()) {
                  sendMessage(inputMessage);
                  setInputMessage('');
                }
              }}
              className="bg-blue-500 text-white rounded-r-lg px-4 py-2 hover:bg-blue-600"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CoachingRequestForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Submit Coaching Request</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Coaching Topic</label>
              <select className="w-full border rounded-md p-2">
                <option>Active Listening</option>
                <option>Product Knowledge</option>
                <option>Empathy</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Specific Call (Optional)</label>
              <input type="text" placeholder="Call ID or Date/Time" className="w-full border rounded-md p-2" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea placeholder="Describe what you'd like coaching on" className="w-full border rounded-md p-2 h-24"></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Coaching Method</label>
              <select className="w-full border rounded-md p-2">
                <option>One-on-One Session</option>
                <option>Written Feedback</option>
                <option>Group Workshop</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Urgency</label>
              <select className="w-full border rounded-md p-2">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </form>
        </div>
        <div className="p-4 border-t flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
};

const AgentCoachingPage = () => {
  const navigate = useNavigate();
  const [showAIChat, setShowAIChat] = useState(false);
  const [showCoachingRequestForm, setShowCoachingRequestForm] = useState(false);

  const coachingOpportunities = [
    { topic: 'Active Listening', count: 15, impact: 'High', priority: 1 },
    { topic: 'Product Knowledge', count: 12, impact: 'Medium', priority: 2 },
    { topic: 'Empathy', count: 10, impact: 'High', priority: 3 },
  ];

  const topSkills = [
    { name: 'Problem Solving', definition: 'Ability to identify and resolve customer issues', count: 25 },
    { name: 'Clear Communication', definition: 'Conveying information effectively', count: 22 },
    { name: 'Patience', definition: 'Remaining calm and composed in challenging situations', count: 20 },
  ];

  const performanceMetrics = [
    { name: 'Average Handle Time', current: '5:30', target: '5:00', trend: 'down' },
    { name: 'Customer Satisfaction Score', current: '4.2', target: '4.5', trend: 'up' },
    { name: 'First Call Resolution Rate', current: '78%', target: '85%', trend: 'up' },
  ];

  const recentFeedback = [
    { date: '2024-09-05', supervisor: 'John Doe', topic: 'Customer Escalation', feedback: 'Good handling of angry customer', actionItems: 'Practice de-escalation techniques' },
    { date: '2024-09-03', supervisor: 'Jane Smith', topic: 'Product Upselling', feedback: 'Missed opportunity for upsell', actionItems: 'Review product features and benefits' },
    { date: '2024-09-01', supervisor: 'Mike Johnson', topic: 'Call Efficiency', feedback: 'Excellent time management', actionItems: 'Share best practices with team' },
  ];

  const toolUsage = [
    { name: 'CRM Software', frequency: 'High', efficiency: 85, tips: 'Use quick search feature for faster lookups' },
    { name: 'Knowledge Base', frequency: 'Medium', efficiency: 70, tips: 'Utilize the new category filters' },
    { name: 'Call Scripting Tool', frequency: 'Low', efficiency: 50, tips: 'Familiarize with common scenarios' },
  ];

  const customerSentiment = [
    { category: 'Positive', current: '65%', previous: '60%', trend: 'up' },
    { category: 'Neutral', current: '25%', previous: '28%', trend: 'down' },
    { category: 'Negative', current: '10%', previous: '12%', trend: 'down' },
  ];

  const learningResources = [
    { name: 'Advanced Customer Service Techniques', type: 'Video', relevance: 95, time: '45 mins' },
    { name: 'Product Knowledge Quiz', type: 'Quiz', relevance: 90, time: '20 mins' },
    { name: 'Effective Communication in Call Centers', type: 'Article', relevance: 85, time: '15 mins' },
  ];

  return (
    <div className="font-sans m-0 p-0 bg-softgray">
      <nav className="bg-navy text-white p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h1 className="text-2xl font-bold">Agent Dashboard</h1>
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
      
      <div className="flex max-w-6xl mx-auto my-8 px-4">
        {/* Quick Links Sidebar */}
        <aside className="w-64 mr-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-navy mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {[
                { icon: Home, text: 'Return to Glance View', path: '/agent' },
                { icon: MessageSquare, text: 'Ask my AI Coach', onClick: () => setShowAIChat(true) },
                { icon: PlusCircle, text: 'Submit Coaching Request', onClick: () => setShowCoachingRequestForm(true) },
              ].map(({ icon: Icon, text, path, onClick }, index) => (
                <li key={index}>
                  <button 
                    onClick={onClick || (() => navigate(path))}
                    className="flex items-center w-full text-left bg-softgray text-navy px-4 py-2 rounded hover:bg-turquoise hover:text-white transition-colors"
                  >
                    <Icon className="mr-2" size={20} />
                    {text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">My Top Coaching Opportunities</h2>
            <table className="w-full">
              <thead>
                <tr className="bg-softgray">
                  <th className="p-2 text-left">Coaching Topic</th>
                  <th className="p-2 text-left">Count of Topic</th>
                  <th className="p-2 text-left">Assumed Impact</th>
                  <th className="p-2 text-left">Priority</th>
                </tr>
              </thead>
              <tbody>
                {coachingOpportunities.map((opportunity, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{opportunity.topic}</td>
                    <td className="p-2">{opportunity.count}</td>
                    <td className="p-2">{opportunity.impact}</td>
                    <td className="p-2">{opportunity.priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">My Top Customer Service Skills</h2>
            <table className="w-full">
              <thead>
                <tr className="bg-softgray">
                  <th className="p-2 text-left">Skill Name</th>
                  <th className="p-2 text-left">Brief Definition</th>
                  <th className="p-2 text-left">Count of Skill</th>
                </tr>
              </thead>
              <tbody>
                {topSkills.map((skill, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{skill.name}</td>
                    <td className="p-2">{skill.definition}</td>
                    <td className="p-2">{skill.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">Call Performance Metrics</h2>
            <table className="w-full">
              <thead>
                <tr className="bg-softgray">
                  <th className="p-2 text-left">Metric Name</th>
                  <th className="p-2 text-left">Current Value</th>
                  <th className="p-2 text-left">Target Value</th>
                  <th className="p-2 text-left">Trend</th>
                </tr>
              </thead>
              <tbody>
                {performanceMetrics.map((metric, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{metric.name}</td>
                    <td className="p-2">{metric.current}</td>
                    <td className="p-2">{metric.target}</td>
                    <td className="p-2">
                      {metric.trend === 'up' ? (
                        <TrendingUp className="text-green-500" />
                      ) : (
                        <TrendingDown className="text-red-500" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">Recent Feedback from Supervisors</h2>
            <table className="w-full">
              <thead>
                <tr className="bg-softgray">
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">Supervisor</th>
                  <th className="p-2 text-left">Call Topic</th>
                  <th className="p-2 text-left">Key Feedback</th>
                  <th className="p-2 text-left">Action Items</th>
                </tr>
              </thead>
              <tbody>
                {recentFeedback.map((feedback, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{feedback.date}</td>
                    <td className="p-2">{feedback.supervisor}</td>
                    <td className="p-2">{feedback.topic}</td>
                    <td className="p-2">{feedback.feedback}</td>
                    <td className="p-2">{feedback.actionItems}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">Tool Usage Analysis</h2>
            <table className="w-full">
              <thead>
                <tr className="bg-softgray">
                  <th className="p-2 text-left">Tool Name</th>
                  <th className="p-2 text-left">Usage Frequency</th>
                  <th className="p-2 text-left">Efficiency Score</th>
                  <th className="p-2 text-left">Tips for Improvement</th>
                </tr>
              </thead>
              <tbody>
                {toolUsage.map((tool, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{tool.name}</td>
                    <td className="p-2">{tool.frequency}</td>
                    <td className="p-2">{tool.efficiency}%</td>
                    <td className="p-2">{tool.tips}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">Customer Sentiment Trends</h2>
            <table className="w-full">
              <thead>
                <tr className="bg-softgray">
                  <th className="p-2 text-left">Sentiment Category</th>
                  <th className="p-2 text-left">Current Month %</th>
                  <th className="p-2 text-left">Previous Month %</th>
                  <th className="p-2 text-left">Trend</th>
                </tr>
              </thead>
              <tbody>
                {customerSentiment.map((sentiment, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{sentiment.category}</td>
                    <td className="p-2">{sentiment.current}</td>
                    <td className="p-2">{sentiment.previous}</td>
                    <td className="p-2">
                      {sentiment.trend === 'up' ? (
                        <TrendingUp className="text-green-500" />
                      ) : (
                        <TrendingDown className="text-red-500" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">Learning Resources</h2>
            <table className="w-full">
              <thead>
                <tr className="bg-softgray">
                  <th className="p-2 text-left">Resource Name</th>
                  <th className="p-2 text-left">Type</th>
                  <th className="p-2 text-left">Relevance Score</th>
                  <th className="p-2 text-left">Estimated Time</th>
                </tr>
              </thead>
              <tbody>
                {learningResources.map((resource, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{resource.name}</td>
                    <td className="p-2 flex items-center">
                      {resource.type === 'Video' && <Video className="mr-2" size={16} />}
                      {resource.type === 'Quiz' && <Clipboard className="mr-2" size={16} />}
                      {resource.type === 'Article' && <FileText className="mr-2" size={16} />}
                      {resource.type}
                    </td>
                    <td className="p-2">{resource.relevance}%</td>
                    <td className="p-2">{resource.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {showAIChat && <AICoachChat onClose={() => setShowAIChat(false)} />}
      {showCoachingRequestForm && <CoachingRequestForm onClose={() => setShowCoachingRequestForm(false)} />}
    </div>
  );
};

export default AgentCoachingPage;