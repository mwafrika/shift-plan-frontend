import React from 'react'
import Signup from './pages/auth/signup'
import { Provider } from 'react-redux';
import store from './redux/store';
import Onboarding from './pages/onboarding';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Provider store={store}>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
