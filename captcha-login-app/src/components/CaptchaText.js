import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import busyImage from './busyPattern.png'; // Adjust the path to where your busy.png is located

// Utility function to generate random characters
const generateCaptchaText = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  let text = '';
  for (let i = 0; i < 6; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return text;
};

// Component
const Captcha = () => {
  const [captchaText, setCaptchaText] = useState(generateCaptchaText());
  const [userInput, setUserInput] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  // Refresh captcha when component mounts
  useEffect(() => {
    setCaptchaText(generateCaptchaText());
  }, []);

  // Validate input
  const handleSubmit = () => {
    if (userInput === captchaText) {
      setIsVerified(true);
      alert('CAPTCHA verified!');
      navigate('/home');
    } else {
      alert('Incorrect, please try again.');
      setCaptchaText(generateCaptchaText()); // Refresh captcha
      setUserInput('');
    }
  };

  // Generate random lines for CAPTCHA
  const generateRandomLines = () => {
    const lines = [];
    for (let i = 0; i < 5; i++) {
      const x1 = Math.random() * 100;
      const y1 = Math.random() * 50;
      const x2 = Math.random() * 100;
      const y2 = Math.random() * 50;
      lines.push(
        <line
          key={i}
          x1={`${x1}%`}
          y1={`${y1}%`}
          x2={`${x2}%`}
          y2={`${y2}%`}
          stroke="black"
          strokeWidth="2"
        />
      );
    }
    return lines;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '200px',
          height: '50px',
          backgroundColor: 'transparent',
          border: '1px solid #ccc',
          overflow: 'hidden',
          fontSize: '30px',
          fontWeight: 'bold',
          fontFamily: 'monospace',
          textAlign: 'center',
          color: '#FDAE2C', // Make sure the text color is visible
          backgroundImage: `url(${busyImage})`, // Apply your image as the background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          lineHeight: '50px',
        }}
      >
        {/* SVG for background noise and lines */}
        <svg
          style={{
            position: 'absolute',
            top: 10,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 20,
          }}
        >
          {generateRandomLines()}
        </svg>
        {/* Display captcha text */}
        <span
          style={{
            position: 'relative',
            zIndex: 2,
            WebkitTextStroke: '1px black',
          }}
        >
          {captchaText}
        </span>
      </div>

      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter the text"
          style={{
            padding: '8px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            padding: '8px 16px',
            fontSize: '16px',
            marginLeft: '8px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#4CAF50',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Captcha;
