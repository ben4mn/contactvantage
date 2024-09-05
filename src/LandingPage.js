// LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
const navigate = useNavigate();
const handleNavigation = (path) => {
navigate(path);
};
return (
<div className="flex flex-col items-center min-h-screen bg-soft-gray text-navy font-sans p-8">
<h1 className="text-5xl font-bold mb-8 text-navy">ContactVantage</h1>
Copy  <div className="max-w-3xl text-center mb-12">
    <p className="mb-8">
      Welcome to the ContactVantage Demo. This is a limited version release that seeks to use the evolving concepts of NLP and LLMs to create a closed loop quality solution that provides a vehicle for self sustaining improvements. 
    </p>
    <p className="mb-8">
      The key concept of this solution is not stop after using AI to generate valuable actionable insight, but to create a system that all user persona's can interact with. This system allows for the automation of closed loop action and completes the system vs merely generating insight. This system can also be evolved easily with revolving requirements. 
    </p>
    <p className="mb-8">
      This demo is evolving and will continue to be improved. The current version is focused on showcasing the ability of a UI and AI to provide a self sustaining quality solution. 
    </p>
    <p className="mb-2">
      Click on one of the following persona's to emulate that user experience. 
    </p>
  </div>

  <div className="flex flex-wrap justify-center gap-4">
    <button onClick={() => handleNavigation('/agent')} className="px-6 py-3 text-lg bg-softgray text-navy rounded-lg hover:bg-purple hover:text-softgray transition-colors duration-300">Agent</button>
    <button onClick={() => handleNavigation('/team-leader')} className="px-6 py-3 text-lg bg-softgray text-navy rounded-lg hover:bg-purple hover:text-softgray transition-colors duration-300">Team Leader</button>
    <button onClick={() => handleNavigation('/executive')} className="px-6 py-3 text-lg bg-softgray text-navy rounded-lg hover:bg-purple hover:text-softgray transition-colors duration-300">Executive</button>
    <button onClick={() => handleNavigation('/quality')} className="px-6 py-3 text-lg bg-softgray text-navy rounded-lg hover:bg-purple hover:text-softgray transition-colors duration-300">Quality</button>
  </div>
</div>
);
};
export default LandingPage;