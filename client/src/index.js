import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './assets/scss/app.css'
import { UsersContextProvider } from './context/usersContext';
import { AuthContextProvider } from './context/AuthContext';

ReactDOM.render(

  <AuthContextProvider>
    <UsersContextProvider>
      <App />
    </UsersContextProvider>
  </AuthContextProvider>,
  document.getElementById('root')
)
