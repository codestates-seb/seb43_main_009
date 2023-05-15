import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OAuthLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accessToken = params.get('access_token');
    const refreshToken = params.get('refresh_token');

    if (accessToken && refreshToken) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      location.reload();
    }
  }, [location]);
  return null;
};

export default OAuthLogin;
