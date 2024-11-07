import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

const HumanCheck = () => {
  const [isHuman, setIsHuman] = useState(false);
  const navigate = useNavigate();
  const siteKey = "6LcdWXgqAAAAAJRpvNVHuoZw1YmxbOyG-TyJDe-8"; // Replace with your reCAPTCHA site key

  const handleContinue = () => {
    if (isHuman) {
      navigate('/home');
    } else {
      alert('Please complete the CAPTCHA to continue.');
    }
  };

  const handleCaptchaChange = (value) => {
    if (value) {
      setIsHuman(true);
    } else {
      setIsHuman(false);
    }
  };

  return (
    <div className="form">
      <h1>I'm a Human</h1>
      <div>
        <ReCAPTCHA
          sitekey={siteKey}
          onChange={handleCaptchaChange}
        />
      </div>
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default HumanCheck;
