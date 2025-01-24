// src/pages/LoginCallback.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginCallbackPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Extract the authorization code or token from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const token = urlParams.get('token');

    if (code) {
      // Send the code to your backend to exchange it for an access token
      console.log('Authorization Code:', code);
      navigate('/'); // Redirect to home after login
    } else if (token) {
      // Handle the token (e.g., store it in local storage)
      console.log('Token:', token);
      localStorage.setItem('token', token);
      navigate('/');
    } else {
      console.error('No code or token found in the URL');
      navigate('/login'); // Redirect to login if something went wrong
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default LoginCallbackPage;