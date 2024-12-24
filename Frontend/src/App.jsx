import React from 'react';
import { Routes, Route } from "react-router-dom";
import First from './pages/First.jsx';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import Home from './pages/Home';
 
const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<First/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/signup" element={<UserSignup/>} />
        <Route path="/login-captain" element={<CaptainLogin/>} />
        <Route path="/signup-captain" element={<CaptainSignup/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App;
