import React from 'react';
import { useNavigate } from 'react-router-dom';

const TeamLeaderPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 font-sans bg-soft-gray min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-navy">Quality Analyst View</h1>
      <p className="text-lg mb-8 text-navy">Welcome to your personalized Quality Analyst Landing Page.</p>
      <button 
        onClick={() => navigate('/landing')} 
        className="px-6 py-3 text-lg bg-turquoise text-white rounded-lg hover:bg-electric-orange transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-lime-green focus:ring-opacity-50"
      >
        Back to Home
      </button>
    </div>
  );
};

export default TeamLeaderPage;