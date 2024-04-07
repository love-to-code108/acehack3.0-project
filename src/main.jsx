import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// REACT ROUTER

import { UserLogin } from './pages/login.jsx';
import { UserSignUp } from './pages/signUp.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserLogin/>
  </React.StrictMode>,
)
