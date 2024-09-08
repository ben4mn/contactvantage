import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Phone, Clipboard } from 'lucide-react';

const dailyData = [
  { name: 'Mon', score: 4000 },
  { name: 'Tue', score: 3000 },
  { name: 'Wed', score: 2000 },
  { name: 'Thu', score: 2780 },
  { name: 'Fri', score: 1890 },
  { name: 'Sat', score: 2390 },
  { name: 'Sun', score: 3490 }
];

const weeklyData = [
  { name: 'Week 1', score: 3500 },
  { name: 'Week 2', score: 3200 },
  { name: 'Week 3', score: 3800 },
  { name: 'Week 4', score: 3100 },
  { name: 'Week 5', score: 3600 },
  { name: 'Week 6', score: 3400 }
];

const monthlyData = [
  { name: 'Jan', score: 15000 },
  { name: 'Feb', score: 14000 },
  { name: 'Mar', score: 16000 },
  { name: 'Apr', score: 14500 },
  { name: 'May', score: 15500 },
  { name: 'Jun', score: 16500 }
];

const AgentPage = () => {
  const navigate = useNavigate();
  const [timeFrame, setTimeFrame] = useState('D');
  
  const getChartData = () => {
    switch(timeFrame) {
      case 'W':
        return weeklyData;
      case 'M':
        return monthlyData;
      default:
        return dailyData;
    }
  };

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
                { icon: Phone, text: 'My Calls', path: '/agent-calls' },
                { icon: Clipboard, text: 'My Coaching', path: '/agent-coaching' },
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
        <main className="flex-1 relative">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-navy">At A Glance</h2>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2 bg-softgray p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h3 className="font-bold text-navy">Monit Scores</h3>
                  <div className="flex space-x-1">
                    {['D', 'W', 'M'].map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setTimeFrame(item)}
                        className={`px-2 rounded text-white transition-colors ${
                          timeFrame === item
                            ? ['bg-turquoise', 'bg-orange', 'bg-purple'][index]
                            : 'bg-gray-400 hover:bg-gray-500'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={getChartData()}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="score" stroke="#00BFA6" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="space-y-4">
                {['My Top Coaching Areas', 'My Top Skills'].map((title, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold mb-2 text-navy">{title}</h3>
                    <ol className="list-decimal list-inside text-navy">
                      {[1, 2, 3].map((item) => (
                        <li key={item}>{title === 'My Top Coaching Areas' ? `Focus ${item}` : `Skill ${item}`}</li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AgentPage;