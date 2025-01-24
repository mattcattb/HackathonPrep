import React from 'react'
import { Route, Routes as BrowserRoutes } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import HomePage from './pages/HomePage';
import LoginCallbackPage from './pages/auth/LoginCallbackPage';

const Routes = () => {
  return (
    <BrowserRoutes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route paht="/login/callback" element={<LoginCallbackPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/homepage" element={<HomePage/>}/>
    </BrowserRoutes>
  )
} 

export default Routes;
