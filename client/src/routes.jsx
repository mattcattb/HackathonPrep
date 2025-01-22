import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import OnePage from './pages/OnePage';
import TwoPage from './pages/TwoPage';

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/one" element={<OnePage/>}/>
      <Route path="/two" element={<TwoPage/>}/>
    </Router>
  )
}

export default Routes;
