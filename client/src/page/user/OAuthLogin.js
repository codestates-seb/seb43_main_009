import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const OAuthLogin = ({ onLogin }) => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accessToken = params.get('access_token');
    const refreshToken = params.get('refresh_token');

    if (accessToken && refreshToken) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      onLogin();
    }
  }, [location, onLogin]);

  return null;
};

export default OAuthLogin;
