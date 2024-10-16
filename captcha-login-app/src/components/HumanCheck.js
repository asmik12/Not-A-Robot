// src/components/HumanCheck.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HumanCheck = () => {
  const [isHuman, setIsHuman] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (isHuman) {
      navigate('/home');
    } else {
      alert('Please confirm you are human');
    }
  };

  return (
    <div className="form">
      <h1>I'm a Human</h1>
      <div>
        <input
          type="checkbox"
          checked={isHuman}
          onChange={() => setIsHuman(!isHuman)}
        />{' '}
        <span>Confirm you're a human</span>
      </div>
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default HumanCheck;
