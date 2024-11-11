import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fingerImage from './fingerpoint.jpg'; // The path to where finger.png is located

const FingerCaptcha = () => {
  const [rotation, setRotation] = useState(0); // Rotation angle in degrees
  const navigate = useNavigate();

  // Check if the rotation angle is approximately 90 degrees (within a small tolerance)
  const isCorrectRotation = () => {
    return rotation >= 85 && rotation <= 105;
  };

  // Handle slider change
  const handleSliderChange = (e) => {
    setRotation(parseInt(e.target.value, 10));
    console.log(rotation);
  };

  // Handle submit button click
  const handleSubmit = () => {
    
    //DEFENSE #1: Remove the 2 lines below
    const currentValue = document.querySelector('input[type="range"]').value;
    setRotation(parseInt(currentValue, 10));

    if (isCorrectRotation()) {
      alert('CAPTCHA verified!');
      navigate('/home'); // Redirect to home or another page on success
    } else {
      alert('Incorrect alignment. Please try again.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Rotate the finger to point to the right</h2>
      
      <div
        style={{
          display: 'inline-block',
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 0.2s',
          marginBottom: '20px',
        }}
      >
        <img src={fingerImage} alt="Pointing Finger" style={{ width: '200px', height: '200px' }} />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="range"
          min="0"
          max="180"
          value={rotation}
          onChange={handleSliderChange}
          style={{ width: '200px' }}
        />
      </div>

      <button
        onClick={handleSubmit}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#4CAF50',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default FingerCaptcha;
