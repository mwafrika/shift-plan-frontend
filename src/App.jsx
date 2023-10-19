import React from 'react'
import Signup from './pages/auth/signup'
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Signup />
      </div>
    </Provider>
  )
}

export default App
