// src/components/Register.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  // Check if user is already registered
  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setIsRegistered(true);
    }
  }, []);

  const handleRegister = () => {
    if (username && password) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      alert('Registration successful!');
      navigate('/login');
    } else {
      alert('Please enter both a username and password');
    }
  };

  return (
    <div className="form">
      <h1>Register</h1>
      <div className="field">
        <span>Username:</span>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
      </div>
      <div className="field">
        <span>Password:</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </div>
      <button onClick={handleRegister}>Register</button>

      {/* Show the 'Go to Login' option if the user is already registered */}
      {isRegistered && (
        <div>
          <p>Already registered?</p>
          <button onClick={() => navigate('/login')}>Go to Login</button>
        </div>
      )}
    </div>
  );
};

export default Register;
