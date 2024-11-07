// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import HumanCheck from './components/HumanCheck';
import Home from './components/Home';
import Captcha from './components/CaptchaText';
import FingerCaptcha from './components/CaptchaRotate';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/human-check" element={<HumanCheck />} />
          <Route path="/captcha" element={<Captcha />} />
          <Route path="/finger-captcha" element={<FingerCaptcha />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
