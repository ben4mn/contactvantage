import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'mcdonalds') {
      navigate('/landing');
    } else {
      setError('Incorrect password');
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-soft-gray">
      <h1 className="text-5xl font-bold mb-8 text-navy">ContactVantage</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="w-full px-3 py-2 border rounded mb-4"
        />
        <button type="submit" className="w-full bg-navy text-white py-2 rounded hover:bg-purple transition-colors duration-300">
          Login
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default Login;