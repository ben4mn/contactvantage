import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import LandingPage from './LandingPage';
import AgentPage from './AgentPage';
import TeamLeaderPage from './TeamLeaderPage';
import ExecutivePage from './ExecutivePage';
import QualityPage from './QualityPage';
import AskAIPage from './AskAIPage';
import ExecutiveReportingPage from './ExecutiveReportingPage';
import ExecutiveCallDetailPage from './ExecutiveCallDetailPage';
import ExecutiveCoachingPage from './ExecutiveCoachingPage'; 
import AgentCallsPage from './AgentCallsPage';
import AgentCoachingPage from './AgentCoachingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/agent" element={<AgentPage />} />
        <Route path="/team-leader" element={<TeamLeaderPage />} />
        <Route path="/executive" element={<ExecutivePage />} />
        <Route path="/quality" element={<QualityPage />} />
        <Route path="/executive-dashboard" element={<ExecutivePage />} />
        <Route path="/ask-ai" element={<AskAIPage />} />
        <Route path="/executive-reporting" element={<ExecutiveReportingPage />} />
        <Route path="/executive-call-detail" element={<ExecutiveCallDetailPage />} />
        <Route path="/executive-coaching" element={<ExecutiveCoachingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/agent-calls" element={<AgentCallsPage />} />
        <Route path="/agent-coaching" element={<AgentCoachingPage />} />
      </Routes>
    </Router>
  );
};

export default App;