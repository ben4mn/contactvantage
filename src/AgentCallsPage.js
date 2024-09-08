import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Clipboard, ArrowLeft, ArrowLeftCircle, Search, ArrowUp, ArrowDown } from 'lucide-react';

const mockCallData = [
  { id: 1, dateTime: '2024-09-07 10:30', qualityScore: 85, reasonForContact: 'Billing Inquiry', coachingIdentified: 'Yes - Improve product knowledge', aht: '00:08:45' },
  { id: 2, dateTime: '2024-09-07 11:15', qualityScore: 92, reasonForContact: 'Technical Support', coachingIdentified: 'No', aht: '00:12:30' },
  { id: 3, dateTime: '2024-09-08 13:45', qualityScore: 78, reasonForContact: 'Account Update', coachingIdentified: 'Yes - Enhance active listening', aht: '00:06:20' },
  { id: 4, dateTime: '2024-09-09 09:00', qualityScore: 88, reasonForContact: 'Product Information', coachingIdentified: 'No', aht: '00:10:15' },
  { id: 5, dateTime: '2024-09-10 14:20', qualityScore: 95, reasonForContact: 'Billing Inquiry', coachingIdentified: 'Yes - Excellent customer service', aht: '00:07:30' },
];

const mockQualityScoreDetails = {
    properGreeting: { value: 'yes', details: 'Agent used appropriate greeting' },
    friendlyTone: { value: 'yes', details: 'Agent maintained a friendly tone throughout the call' },
    restateCustomerIssues: { value: 'yes', details: `Agent restated: "I understand you're having issues with your recent bill."` },
    issueResolved: { value: 'yes', details: 'Agent explained the billing discrepancy and adjusted the account' },
    firstCallResolution: { value: 'yes', details: 'Issue was fully resolved during this call' },
    HAR: { value: 'no', details: 'Not applicable for this billing inquiry call' }
  };
  
  const mockTranscript = [
    { speaker: 'Agent', text: `Thank you for calling TravelPro. This is [REDACTED]. How may I assist you today?`, startTime: '00:00', endTime: '00:05' },
    { speaker: 'Customer', text: `Hi, I need help booking a business trip for next month.`, startTime: '00:06', endTime: '00:10' },
    { speaker: 'Agent', text: `Certainly, I'd be happy to help you with that. May I have your name and account number, please?`, startTime: '00:11', endTime: '00:16' },
    { speaker: 'Customer', text: `Of course. My name is [REDACTED] and my account number is [REDACTED].`, startTime: '00:17', endTime: '00:23' },
    { speaker: 'Agent', text: `Thank you, [REDACTED]. I've pulled up your account. Could you please provide me with the details of your trip, such as the destination and dates?`, startTime: '00:24', endTime: '00:32' },
    { speaker: 'Customer', text: `Sure. I need to go to Chicago for a conference from July 15th to July 18th.`, startTime: '00:33', endTime: '00:39' },
    { speaker: 'Agent', text: `Understood. And would you like me to book your flight and hotel, or just the flight?`, startTime: '00:40', endTime: '00:45' },
    { speaker: 'Customer', text: `Both, please. I'd prefer a hotel close to the conference center if possible.`, startTime: '00:46', endTime: '00:51' },
    { speaker: 'Agent', text: `Certainly. Let me check the available flights and hotels for those dates. Do you have a preferred airline or hotel chain?`, startTime: '00:52', endTime: '01:00' },
    { speaker: 'Customer', text: `I usually fly with United, and I like Marriott hotels if they're available.`, startTime: '01:01', endTime: '01:07' },
    { speaker: 'Agent', text: `Great, I'll prioritize those in my search. Give me a moment while I look for the best options.`, startTime: '01:08', endTime: '01:14' },
    { speaker: 'Customer', text: `Sure, take your time.`, startTime: '01:15', endTime: '01:17' },
    { speaker: 'Agent', text: `Thank you for your patience. I've found a United flight departing on the 15th at 9:00 AM and returning on the 18th at 6:00 PM. There's also a Marriott hotel about two blocks from the conference center. How do these options sound?`, startTime: '01:30', endTime: '01:45' },
    { speaker: 'Customer', text: `That sounds perfect. Can you give me the total cost for both?`, startTime: '01:46', endTime: '01:50' },
    { speaker: 'Agent', text: `Certainly. The total for the flight and three nights at the hotel comes to $1,250. Would you like me to proceed with the booking?`, startTime: '01:51', endTime: '02:00' },
    { speaker: 'Customer', text: `Yes, please go ahead and book it.`, startTime: '02:01', endTime: '02:04' },
    { speaker: 'Agent', text: `Excellent. I'll process that for you right away. Can you please confirm the credit card ending in [REDACTED] is still valid for this transaction?`, startTime: '02:05', endTime: '02:13' },
    { speaker: 'Customer', text: `Yes, that's the correct card.`, startTime: '02:14', endTime: '02:16' },
    { speaker: 'Agent', text: `Perfect. I've completed the booking. You'll receive a confirmation email shortly with all the details. Is there anything else I can help you with today?`, startTime: '02:17', endTime: '02:26' },
    { speaker: 'Customer', text: `No, that's all. Thank you for your help.`, startTime: '02:27', endTime: '02:30' },
    { speaker: 'Agent', text: `You're welcome. Thank you for choosing TravelPro. Have a great day and enjoy your trip!`, startTime: '02:31', endTime: '02:37' },
    { speaker: 'Customer', text: `Thanks, you too. Goodbye.`, startTime: '02:38', endTime: '02:40' },
    { speaker: 'Agent', text: `Goodbye.`, startTime: '02:41', endTime: '02:42' },
  ];

const AgentCallsPage = () => {
  const navigate = useNavigate();
  const [selectedCall, setSelectedCall] = useState(null);
  const [viewMode, setViewMode] = useState('details');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const filteredAndSortedCalls = useMemo(() => {
    let filteredCalls = mockCallData.filter(call => {
      const callDate = new Date(call.dateTime);
      const isInDateRange = (!startDate || callDate >= new Date(startDate)) &&
                            (!endDate || callDate <= new Date(endDate));
      const matchesSearch = Object.values(call).some(value => 
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
      return isInDateRange && matchesSearch;
    });

    if (sortConfig.key) {
      filteredCalls.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    return filteredCalls;
  }, [mockCallData, startDate, endDate, searchTerm, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const renderDetailsView = () => (
    <>
      <h3 className="text-xl font-bold mb-4">Call Details</h3>
      <p><strong>Date/Time:</strong> {selectedCall.dateTime}</p>
      <p><strong>Quality Score:</strong> {selectedCall.qualityScore}</p>
      <p><strong>Reason for Contact:</strong> {selectedCall.reasonForContact}</p>
      <p><strong>Coaching Identified:</strong> {selectedCall.coachingIdentified}</p>
      <p><strong>AHT:</strong> {selectedCall.aht}</p>
      <div className="mt-4 space-x-2">
        <button 
          onClick={() => setViewMode('quality')}
          className="bg-navy text-white px-4 py-2 rounded hover:bg-turquoise transition-colors"
        >
          Show Quality Score Details
        </button>
        <button 
          onClick={() => setViewMode('transcript')}
          className="bg-navy text-white px-4 py-2 rounded hover:bg-turquoise transition-colors"
        >
          Show Transcript
        </button>
      </div>
    </>
  );

  const renderQualityView = () => (
    <>
      <h3 className="text-xl font-bold mb-4">Quality Score Details</h3>
      {Object.entries(mockQualityScoreDetails).map(([key, { value, details }]) => (
        <div key={key} className="mb-2">
          <p><strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> {value}</p>
          <p className="ml-4 text-sm">{details}</p>
        </div>
      ))}
      <button 
        onClick={() => setViewMode('details')}
        className="mt-4 flex items-center bg-navy text-white px-4 py-2 rounded hover:bg-turquoise transition-colors"
      >
        <ArrowLeftCircle className="mr-2" size={20} />
        Back to Details
      </button>
    </>
  );

  const renderTranscriptView = () => (
    <>
      <h3 className="text-xl font-bold mb-4">Call Transcript</h3>
      {mockTranscript.map((entry, index) => (
        <div key={index} className="mb-2">
          <p><strong>{entry.speaker}:</strong> {entry.text}</p>
          <p className="text-sm text-gray-500">{entry.startTime} - {entry.endTime}</p>
        </div>
      ))}
      <button 
        onClick={() => setViewMode('details')}
        className="mt-4 flex items-center bg-navy text-white px-4 py-2 rounded hover:bg-turquoise transition-colors"
      >
        <ArrowLeftCircle className="mr-2" size={20} />
        Back to Details
      </button>
    </>
  );

  return (
    <div className="font-sans m-0 p-0 bg-softgray">
      <nav className="bg-navy text-white p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h1 className="text-2xl font-bold">Agent Calls</h1>
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
              <li>
                <button 
                  onClick={() => navigate('/agent')}
                  className="flex items-center w-full text-left bg-softgray text-navy px-4 py-2 rounded hover:bg-turquoise hover:text-white transition-colors"
                >
                  <ArrowLeft className="mr-2" size={20} />
                  Return to Glance View
                </button>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-navy mb-4">Recent Calls</h2>
            
            {/* Filters and Search */}
            <div className="mb-4 flex flex-wrap items-center gap-4">
              <div>
                <label htmlFor="startDate" className="mr-2">Start Date:</label>
                <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="border rounded p-1"
                />
              </div>
              <div>
                <label htmlFor="endDate" className="mr-2">End Date:</label>
                <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="border rounded p-1"
                />
              </div>
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search calls..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border rounded p-2 pl-8"
                  />
                  <Search className="absolute left-2 top-2 text-gray-400" size={20} />
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-softgray">
                    {[
                      { key: 'dateTime', label: 'Date/Time of Call' },
                      { key: 'qualityScore', label: 'Quality Score' },
                      { key: 'reasonForContact', label: 'Reason for Contact' },
                      { key: 'coachingIdentified', label: 'Coaching Identified' },
                      { key: 'aht', label: 'AHT' },
                    ].map(({ key, label }) => (
                      <th
                        key={key}
                        className="p-2 text-left cursor-pointer"
                        onClick={() => requestSort(key)}
                      >
                        {label}
                        {sortConfig.key === key && (
                          sortConfig.direction === 'ascending' ? <ArrowUp size={14} className="inline ml-1" /> : <ArrowDown size={14} className="inline ml-1" />
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredAndSortedCalls.map((call) => (
                    <tr 
                      key={call.id} 
                      onClick={() => { setSelectedCall(call); setViewMode('details'); }}
                      className="cursor-pointer hover:bg-gray-100 transition-colors"
                    >
                      <td className="p-2">{call.dateTime}</td>
                      <td className="p-2">{call.qualityScore}</td>
                      <td className="p-2">{call.reasonForContact}</td>
                      <td className="p-2">{call.coachingIdentified}</td>
                      <td className="p-2">{call.aht}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Detail View Modal */}
      {selectedCall && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto">
            {viewMode === 'details' && renderDetailsView()}
            {viewMode === 'quality' && renderQualityView()}
            {viewMode === 'transcript' && renderTranscriptView()}
            {viewMode === 'details' && (
              <button 
                onClick={() => setSelectedCall(null)}
                className="mt-4 bg-navy text-white px-4 py-2 rounded hover:bg-turquoise transition-colors"
              >
                Close
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentCallsPage;