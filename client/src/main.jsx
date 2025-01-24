import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'

import {BrowserRouter as Router} from 'react-router-dom'

import {Auth0Provider} from '@auth0/auth0-react'

const domain = import.meta.env.REACT_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.REACT_APP_AUTH0_CLIENT_ID;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <Router>
        <App />  
      </Router>
    </Auth0Provider>
  </StrictMode>,
)
