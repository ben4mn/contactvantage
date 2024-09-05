import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';

const ExecutiveCoachingPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentView, setCurrentView] = useState(location.state?.view || 'coaching-dashboard');

  // Sample data for charts and tables
  const coachingOpportunities = [
    { topic: 'Active Listening', frequency: 120, impact: 'High', region: 'Global' },
    { topic: 'Empathy', frequency: 95, impact: 'Medium', region: 'North America' },
    { topic: 'Product Knowledge', frequency: 80, impact: 'High', region: 'Europe' },
    { topic: 'Upselling Techniques', frequency: 65, impact: 'Medium', region: 'Asia Pacific' },
    { topic: 'Call Control', frequency: 50, impact: 'Low', region: 'Latin America' },
  ];

  const coachingSuccessRate = [
    { month: 'Jan', rate: 65 },
    { month: 'Feb', rate: 68 },
    { month: 'Mar', rate: 72 },
    { month: 'Apr', rate: 75 },
    { month: 'May', rate: 79 },
    { month: 'Jun', rate: 82 },
  ];

  const coachingTopics = [
    { id: 1, name: 'Showing more empathy in active listening', frequency: 120, region: 'Global', source: 'AI' },
    { id: 2, name: 'Improving product knowledge for luxury hotels', frequency: 95, region: 'Europe', source: 'Manual' },
    { id: 3, name: 'Enhancing problem-solving skills for complex itineraries', frequency: 80, region: 'North America', source: 'AI' },
    { id: 4, name: 'Mastering upselling techniques for business class upgrades', frequency: 65, region: 'Asia Pacific', source: 'Manual' },
    { id: 5, name: 'Developing better call control for high-volume periods', frequency: 50, region: 'Latin America', source: 'AI' },
  ];

  const renderCoachingDashboard = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-navy">Coaching Dashboard</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Top Coaching Opportunities</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={coachingOpportunities}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="topic" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="frequency" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Coaching Success Rate Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={coachingSuccessRate}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="rate" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Coaching Opportunities by Region</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {coachingOpportunities.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{item.topic}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.frequency}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.impact}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderCoachingHealthDetails = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-navy">Coaching Health Details</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Coaching Success Rate by Team</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { team: 'Team A', rate: 85 },
              { team: 'Team B', rate: 78 },
              { team: 'Team C', rate: 92 },
              { team: 'Team D', rate: 70 },
              { team: 'Team E', rate: 88 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="team" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="rate" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Coaching Improvement Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={[
              { month: 'Jan', improvement: 5 },
              { month: 'Feb', improvement: 8 },
              { month: 'Mar', improvement: 12 },
              { month: 'Apr', improvement: 15 },
              { month: 'May', improvement: 18 },
              { month: 'Jun', improvement: 22 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="improvement" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const renderAddEditCoachingFocus = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-navy">Add/Edit Coaching Focus</h2>
      <button className="bg-turquoise text-white px-4 py-2 rounded hover:bg-navy transition-colors">
        Add Coaching Topic
      </button>
      <div className="bg-white p-4 rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {coachingTopics.map((topic) => (
                <tr key={topic.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{topic.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{topic.frequency}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{topic.region}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{topic.source}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

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
          <h2 className="text-3xl font-bold text-navy mb-6">Coaching Insight</h2>
          
          <div className="grid grid-cols-4 gap-6">
            {/* Left Column - Quick Actions */}
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
                  <li>
                    <button 
                      onClick={() => setCurrentView('coaching-dashboard')}
                      className={`w-full text-left px-4 py-2 ${currentView === 'coaching-dashboard' ? 'bg-turquoise' : 'bg-navy'} text-white rounded hover:bg-turquoise transition-colors`}
                    >
                      Coaching Dashboard
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setCurrentView('coaching-health-details')}
                      className={`w-full text-left px-4 py-2 ${currentView === 'coaching-health-details' ? 'bg-turquoise' : 'bg-navy'} text-white rounded hover:bg-turquoise transition-colors`}
                    >
                      Coaching Health Details
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setCurrentView('add-edit-coaching-focus')}
                      className={`w-full text-left px-4 py-2 ${currentView === 'add-edit-coaching-focus' ? 'bg-turquoise' : 'bg-navy'} text-white rounded hover:bg-turquoise transition-colors`}
                    >
                      Add/Edit Coaching Focus
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Dynamic Content */}
            <div className="col-span-3">
              {currentView === 'coaching-dashboard' && renderCoachingDashboard()}
              {currentView === 'coaching-health-details' && renderCoachingHealthDetails()}
              {currentView === 'add-edit-coaching-focus' && renderAddEditCoachingFocus()}
            </div>
          </div>                
        </div>
      </main>
    </div>
  );
};

export default ExecutiveCoachingPage;