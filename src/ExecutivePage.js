import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const ExecutivePage = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('D');

  // Separate data for each FCR pie chart
  const fcrData1 = [
    { name: 'Resolved', value: 66 },
    { name: 'Unresolved', value: 33},
  ];
  const fcrData2 = [
    { name: 'Resolved', value: 82 },
    { name: 'Unresolved', value: 18 },
  ];
  const fcrData3 = [
    { name: 'Resolved', value: 68 },
    { name: 'Unresolved', value: 32 },
  ];

  // Separate colors for each chart
  const COLORS1 = ['#00BFA6', '#1D3557']; // turquoise and navy
  const COLORS2 = ['#FF6F00', '#1D3557']; // electric-orange and navy
  const COLORS3 = ['#8E44AD', '#1D3557']; // purple and navy

  const renderPieChart = (data, colors, title, subtext) => (
    <div className="bg-softgray p-4 rounded-lg">
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="text-center mt-2">
        <span className="font-bold text-navy">{title}: {data[0].value}%</span>
        <p className="text-sm text-gray-600 mt-1">{subtext}</p>
      </div>
    </div>
  );

  const ahtData = [
    {
      reason: "Complicated International Exchange",
      aht: "1250 sec",
      change: "+180 sec",
      insight: "The main increase is happening in Europe due to the recent change in baggage policy with British Airways causing many travelers to rebook last minute"
    },
    {
      reason: "Hotel Cancellation",
      aht: "1925 sec",
      change: "+906 sec",
      insight: "This is increasing in a specific pod of NA volume where clients are cancelling lots of hotels in Vegas due to the Super Bowl being moved and requiring many agent outbound calls to hotel"
    },
    {
      reason: "Multi-City Itinerary Booking",
      aht: "1680 sec",
      change: "+320 sec",
      insight: "Increase due to new corporate policy requiring carbon footprint calculation for each leg, adding complexity to the booking process"
    },
    {
      reason: "Travel Insurance Claims",
      aht: "2100 sec",
      change: "+450 sec",
      insight: "Recent natural disasters have led to a surge in complex insurance claims, requiring more time for documentation and processing"
    },
    {
      reason: "Group Booking Modifications",
      aht: "1800 sec",
      change: "+275 sec",
      insight: "New integration with third-party event management software is causing delays in syncing group booking changes"
    },
    {
      reason: "Loyalty Program Upgrades",
      aht: "1350 sec",
      change: "+210 sec",
      insight: "Recent merger of two major airline loyalty programs has created confusion and requires additional explanation time for upgrade requests"
    }
  ];

  const shiftTrendsData = [
    { reason: "Int'l Exchange", change: "+3.1%" },
    { reason: "Hotel Cancel", change: "+2.1%" },
    { reason: "Multi-City Book", change: "+1.8%" },
    { reason: "Insurance Claim", change: "-1.2%" },
    { reason: "Group Modify", change: "-1.1%" },
    { reason: "Loyalty Upgrade", change: "-0.8%" }
  ];

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
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-navy">Contact Footprint</h2>
            <div className="text-right">
              <div className="flex space-x-2 mb-2">
                {['D', 'W', 'M'].map((view) => (
                  <button
                    key={view}
                    onClick={() => setCurrentView(view)}
                    className={`px-3 py-1 rounded w-10 ${
                      currentView === view
                        ? 'bg-navy text-white'
                        : 'bg-softgray text-navy hover:bg-turquoise hover:text-white'
                    } transition-colors duration-200`}
                  >
                    {view}
                  </button>
                ))}
              </div>
              <p className="text-sm text-navy h-5">
                {currentView === 'D' ? 'Previous 24hr' : currentView === 'W' ? 'Previous 7D' : 'Previous FULL Month'}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-softgray p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-navy">Quick Actions</h3>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => navigate('/ask-ai')} 
                      className="w-full text-left px-4 py-2 bg-navy text-white rounded hover:bg-turquoise transition-colors"
                    >
                      Ask AI
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => navigate('/executive-reporting')} 
                      className="w-full text-left px-4 py-2 bg-navy text-white rounded hover:bg-turquoise transition-colors"
                    >
                      Reporting
                    </button>
                  </li>
                </ul>
              </div>
              <div className="bg-softgray p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-navy">Contact Insight</h3>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => navigate('/executive-call-detail', { state: { view: 'call-detail' } })}
                      className="w-full text-left px-4 py-2 bg-navy text-white rounded hover:bg-turquoise transition-colors"
                    >
                      Call Detail View
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => navigate('/executive-call-detail', { state: { view: 'add-metric' } })}
                      className="w-full text-left px-4 py-2 bg-navy text-white rounded hover:bg-turquoise transition-colors"
                    >
                      Add New Metric
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => navigate('/executive-call-detail', { state: { view: 'contact-drivers' } })}
                      className="w-full text-left px-4 py-2 bg-navy text-white rounded hover:bg-turquoise transition-colors"
                    >
                      Contact Drivers
                    </button>
                  </li>
                </ul>
              </div>
              <div className="bg-softgray p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-navy">Coaching Insight</h3>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => navigate('/executive-coaching', { state: { view: 'coaching-dashboard' } })}
                      className="w-full text-left px-4 py-2 bg-navy text-white rounded hover:bg-turquoise transition-colors"
                    >
                      Coaching Dashboard
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => navigate('/executive-coaching', { state: { view: 'coaching-health-details' } })}
                      className="w-full text-left px-4 py-2 bg-navy text-white rounded hover:bg-turquoise transition-colors"
                    >
                      Coaching Health Details
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => navigate('/executive-coaching', { state: { view: 'add-edit-coaching-focus' } })}
                      className="w-full text-left px-4 py-2 bg-navy text-white rounded hover:bg-turquoise transition-colors"
                    >
                      Add/Edit Coaching Focus
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - FCR Charts and Lists */}
            <div className="col-span-3">
              <div className="grid grid-cols-3 gap-6 mb-6">
                {renderPieChart(fcrData1, COLORS1, "HAR", "Hotel Attachment Rate")}
                {renderPieChart(fcrData2, COLORS2, "Tvl/Arr", "Travel Arrangements")}
                {renderPieChart(fcrData3, COLORS3, "FCR", "First Call Resolution")}
              </div>
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="bg-softgray p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2 text-navy">Main Reasons for Contacts</h4>
                  <ul className="space-y-1">
                    <li className="flex justify-between"><span>1. Air - New Booking</span></li>
                    <li className="flex justify-between"><span>2. Air/Hotel - New Booking</span></li>
                    <li className="flex justify-between"><span>3. Air/Hotel - Modification</span></li>
                    <li className="flex justify-between"><span>4. Train - New Booking</span></li>
                    <li className="flex justify-between"><span>5. Train - Modification</span></li>
                    <li className="flex justify-between"><span>6. Hotel - Cancellation</span></li>
                  </ul>
                </div>
                <div className="bg-softgray p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2 text-navy">Contact Shift Trends</h4>
                  <ul className="space-y-1">
                    {shiftTrendsData.map((item, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{item.reason}</span>
                        <span className={item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                          {item.change.startsWith('+') ? '↑' : '↓'} {item.change}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-softgray p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2 text-navy">Main Coaching Gaps</h4>
                  <ul className="space-y-1">
                    <li className="flex justify-between"><span>1. Restating request details</span></li>
                    <li className="flex justify-between"><span>2. Showing empathy to situation</span></li>
                    <li className="flex justify-between"><span>3. Making an effort to relate</span></li>
                    <li className="flex justify-between"><span>4. Generic communication difficulties </span></li>
                    <li className="flex justify-between"><span>5. Lack of ownership for issue</span></li>
                    <li className="flex justify-between"><span>6. Lack of effort by agent</span></li>
                  </ul>
                </div>
              </div>
              <div className="bg-softgray p-4 rounded-lg col-span-3">
                <h4 className="text-lg font-semibold mb-2 text-navy">Longest AHT Drivers</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-navy">
                    <thead className="text-xs uppercase bg-navy text-white">
                      <tr>
                        <th scope="col" className="px-6 py-3">Contact Reason</th>
                        <th scope="col" className="px-6 py-3">AHT</th>
                        <th scope="col" className="px-6 py-3">AHT Change</th>
                        <th scope="col" className="px-6 py-3">Insight</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ahtData.map((item, index) => (
                        <tr key={index} className="bg-white border-b">
                          <td className="px-6 py-4">{item.reason}</td>
                          <td className="px-6 py-4">{item.aht}</td>
                          <td className="px-6 py-4">{item.change}</td>
                          <td className="px-6 py-4">{item.insight}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>                
        </div>
      </main>
    </div>
  );
};

export default ExecutivePage;