import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Static set of credentials
  const validCredentials = [
    { username: 'ben', password: 'sniffles' },
    { username: 'erica', password: 'chilldaddy' },
    { username: 'david', password: 'iamgay' },// Add more credential pairs as needed
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validCredentials.some(
      cred => cred.username === username && cred.password === password
    );

    if (isValid) {
      navigate('/landing');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-soft-gray">
      <h1 className="text-5xl font-bold mb-8 text-navy">ContactVantage</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          className="w-full px-3 py-2 border rounded mb-4"
        />
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