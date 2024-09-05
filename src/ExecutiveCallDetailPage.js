import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ExecutiveCallDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentView, setCurrentView] = useState(location.state?.view || 'call-detail');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCountry, setFilterCountry] = useState('');

  // Fake data for the tables
  const callDetails = [
    { id: 1, country: 'USA', aht: '350s', time: '14:30', date: '2024-09-05', reason: 'Booking Inquiry' },
    { id: 2, country: 'UK', aht: '420s', time: '09:15', date: '2024-09-05', reason: 'Cancellation' },
    { id: 3, country: 'Canada', aht: '280s', time: '11:45', date: '2024-09-05', reason: 'Modification' },
    { id: 4, country: 'Australia', aht: '390s', time: '16:20', date: '2024-09-05', reason: 'Complaint' },
    { id: 5, country: 'Germany', aht: '310s', time: '13:00', date: '2024-09-05', reason: 'Information' },
  ];

  const contactDrivers = [
    { id: 1, driver: 'Flight Delay', frequency: '25%', impact: 'High', trend: 'Increasing' },
    { id: 2, driver: 'Booking Error', frequency: '15%', impact: 'Medium', trend: 'Stable' },
    { id: 3, driver: 'Refund Request', frequency: '20%', impact: 'High', trend: 'Decreasing' },
    { id: 4, driver: 'Lost Luggage', frequency: '10%', impact: 'Medium', trend: 'Stable' },
    { id: 5, driver: 'Itinerary Change', frequency: '30%', impact: 'Low', trend: 'Increasing' },
  ];

  const filteredCallDetails = callDetails.filter(call => 
    call.country.toLowerCase().includes(filterCountry.toLowerCase()) &&
    (call.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
     call.reason.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredContactDrivers = contactDrivers.filter(driver =>
    driver.driver.toLowerCase().includes(searchTerm.toLowerCase()) ||
    driver.trend.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderCallDetailTable = () => (
    <div>
      <div className="mb-4 flex justify-between">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          value={filterCountry}
          onChange={(e) => setFilterCountry(e.target.value)}
        >
          <option value="">All Countries</option>
          {Array.from(new Set(callDetails.map(call => call.country))).map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-navy text-white">
            <th className="p-3">Country</th>
            <th className="p-3">AHT</th>
            <th className="p-3">Time</th>
            <th className="p-3">Date</th>
            <th className="p-3">Reason</th>
          </tr>
        </thead>
        <tbody>
          {filteredCallDetails.map(call => (
            <tr key={call.id} className="border-b">
              <td className="p-3">{call.country}</td>
              <td className="p-3">{call.aht}</td>
              <td className="p-3">{call.time}</td>
              <td className="p-3">{call.date}</td>
              <td className="p-3">{call.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderAddNewMetric = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-2xl font-bold mb-4">Add New AI Insight Metric</h3>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Metric Name</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="e.g., Hotel HAR Offer Rate" />
        </div>
        <div>
          <label className="block mb-1">Data Source</label>
          <select className="w-full p-2 border rounded">
            <option>Call Transcripts</option>
            <option>Agent Notes</option>
            <option>Customer Feedback</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Analysis Type</label>
          <select className="w-full p-2 border rounded">
            <option>Keyword Detection</option>
            <option>Sentiment Analysis</option>
            <option>Pattern Recognition</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Threshold for Positive Detection</label>
          <input type="number" className="w-full p-2 border rounded" placeholder="e.g., 0.75" />
        </div>
        <button type="submit" className="bg-navy text-white px-4 py-2 rounded hover:bg-turquoise transition-colors">
          Add Metric
        </button>
      </form>
    </div>
  );

  const renderContactDrivers = () => (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search drivers..."
          className="p-2 border rounded w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-navy text-white">
            <th className="p-3">Driver</th>
            <th className="p-3">Frequency</th>
            <th className="p-3">Impact</th>
            <th className="p-3">Trend</th>
          </tr>
        </thead>
        <tbody>
          {filteredContactDrivers.map(driver => (
            <tr key={driver.id} className="border-b">
              <td className="p-3">{driver.driver}</td>
              <td className="p-3">{driver.frequency}</td>
              <td className="p-3">{driver.impact}</td>
              <td className="p-3">{driver.trend}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
          <h2 className="text-3xl font-bold text-navy mb-6">Call Detail View</h2>
          
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
                      onClick={() => setCurrentView('call-detail')}
                      className={`w-full text-left px-4 py-2 ${currentView === 'call-detail' ? 'bg-turquoise' : 'bg-navy'} text-white rounded hover:bg-turquoise transition-colors`}
                    >
                      Call Detail View
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setCurrentView('add-metric')}
                      className={`w-full text-left px-4 py-2 ${currentView === 'add-metric' ? 'bg-turquoise' : 'bg-navy'} text-white rounded hover:bg-turquoise transition-colors`}
                    >
                      Add New Metric
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setCurrentView('contact-drivers')}
                      className={`w-full text-left px-4 py-2 ${currentView === 'contact-drivers' ? 'bg-turquoise' : 'bg-navy'} text-white rounded hover:bg-turquoise transition-colors`}
                    >
                      Contact Drivers
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Dynamic Content */}
            <div className="col-span-3">
              {currentView === 'call-detail' && renderCallDetailTable()}
              {currentView === 'add-metric' && renderAddNewMetric()}
              {currentView === 'contact-drivers' && renderContactDrivers()}
            </div>
          </div>                
        </div>
      </main>
    </div>
  );
};

export default ExecutiveCallDetailPage;