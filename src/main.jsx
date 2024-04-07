import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// REACT ROUTER

import { UserLogin } from './pages/login.jsx';
import { UserSignUp } from './pages/signUp.jsx';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route Component={App} path='/'/>
        <Route Component={UserSignUp} path='/signup'/>
        <Route Component={UserLogin} path='/login'/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
