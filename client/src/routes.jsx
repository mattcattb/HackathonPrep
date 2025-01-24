import React from 'react'
import { Route, Routes as BrowserRoutes } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import HomePage from './pages/HomePage';

import { useAuthStore } from './hooks/authStore';


const Routes = () => {

  const {authUser} = useAuthStore();

  return (
    <BrowserRoutes>
      <Route path="/" element={!authUser? <LandingPage/> : <HomePage/>}/>
      <Route path="/login" element={!authUser? <LoginPage/> : <HomePage/>}/>
      <Route path="/signup" element={!authUser? <SignupPage/> : <HomePage/>}/>
      <Route path="/homepage" element={authUser? <HomePage/> : <SignupPage/>}/>
    </BrowserRoutes>
  )
} 

export default Routes;
