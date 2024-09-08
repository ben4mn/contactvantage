import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Clipboard, Home, TrendingUp, TrendingDown, Book, Video, FileText } from 'lucide-react';

const AgentCoachingPage = () => {
  const navigate = useNavigate();

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
              <h1 className="text-2xl font-bold">Agent Coaching Dashboard</h1>
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
              ].map(({ icon: Icon, text, path }, index) => (
                <li key={index}>
                  <button 
                    onClick={() => navigate(path)}
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
    </div>
  );
};

export default AgentCoachingPage;