import React from 'react'
import { Route, Routes as BrowserRoutes } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import OnePage from './pages/OnePage';
import TwoPage from './pages/TwoPage';

const Routes = () => {
  return (
    <BrowserRoutes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/one" element={<OnePage/>}/>
      <Route path="/two" element={<TwoPage/>}/>
    </BrowserRoutes>
  )
} 

export default Routes;
