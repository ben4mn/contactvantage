import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExecutiveReporting = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('custom');

  const customReports = [
    { id: 1, name: "Customer Satisfaction Trends", lastRun: "2023-09-04" },
    { id: 2, name: "AHT by Booking Type", lastRun: "2023-09-03" },
    { id: 3, name: "Top 10 Customer Pain Points", lastRun: "2023-09-02" },
    { id: 4, name: "Agent Performance Overview", lastRun: "2023-09-01" },
  ];

  const renderReportList = () => (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-xl font-bold mb-4">Your Custom Reports</h3>
      <ul className="space-y-2">
        {customReports.map(report => (
          <li key={report.id} className="flex justify-between items-center bg-softgray p-3 rounded">
            <span>{report.name}</span>
            <div>
              <span className="text-sm text-gray-500 mr-2">Last run: {report.lastRun}</span>
              <button className="bg-navy text-white px-2 py-1 rounded text-sm hover:bg-turquoise transition-colors">
                Run
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderReportBuilder = () => (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-xl font-bold mb-4">Create New Report</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Report Name</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Data Source</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
            <option>Call Transcripts</option>
            <option>Customer Feedback</option>
            <option>Booking Data</option>
            <option>Agent Performance Metrics</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Metrics to Include</label>
          <div className="mt-2 space-y-2">
            <div><input type="checkbox" className="mr-2" /> Customer Satisfaction Score</div>
            <div><input type="checkbox" className="mr-2" /> Average Handling Time</div>
            <div><input type="checkbox" className="mr-2" /> First Call Resolution Rate</div>
            <div><input type="checkbox" className="mr-2" /> Booking Conversion Rate</div>
          </div>
        </div>
        <button type="submit" className="bg-navy text-white px-4 py-2 rounded hover:bg-turquoise transition-colors">
          Create Report
        </button>
      </form>
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
          <h2 className="text-3xl font-bold text-navy mb-6">Executive Reporting</h2>
          
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
                    <button className="w-full text-left px-4 py-2 bg-navy text-white rounded hover:bg-turquoise transition-colors">
                      Export All Reports
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left px-4 py-2 bg-navy text-white rounded hover:bg-turquoise transition-colors">
                      Schedule Email Report
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Report Content */}
            <div className="col-span-3">
              <div className="mb-4">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex">
                    <button
                      className={`mr-8 py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'custom'
                          ? 'border-navy text-navy'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                      onClick={() => setActiveTab('custom')}
                    >
                      Custom Reports
                    </button>
                    <button
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'build'
                          ? 'border-navy text-navy'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                      onClick={() => setActiveTab('build')}
                    >
                      Build New Report
                    </button>
                  </nav>
                </div>
              </div>
              
              {activeTab === 'custom' ? renderReportList() : renderReportBuilder()}
            </div>
          </div>                
        </div>
      </main>
    </div>
  );
};

export default ExecutiveReporting;