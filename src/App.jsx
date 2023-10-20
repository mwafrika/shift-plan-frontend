import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import LoginPage from './components/login/LoginPage.tsx'
import ResetPassword from './components/reset-password/ResetPassword.tsx'
import ConfirmPassword from './components/reset-password/ConfirmPassword.tsx'

function App() {
  const [currentPage, setCurrentPage] = useState('reset'); // 'reset' or 'confirm'

  const switchToConfirmPage = () => {
    setCurrentPage('confirm');
  };

  return (
    <div className="App">
      {currentPage === 'reset' && (
        <ResetPassword switchToConfirmPage={switchToConfirmPage} />
      )}
      {currentPage === 'confirm' && <ConfirmPassword />}
    </div>
  );
}

export default App
