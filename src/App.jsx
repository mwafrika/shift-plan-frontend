import React from 'react'
import Signup from './pages/auth/signup'
import Onboarding from './pages/onboarding';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
  )
}

export default App
