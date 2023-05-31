import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { login } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';

const OAuthLogin = ({ onLogin }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accessToken = params.get('access_token');
    const refreshToken = params.get('refresh_token');

    if (accessToken && refreshToken) {
      localStorage.setItem('accessToken', accessToken);
      const date = new Date();
      //쿠키 만료시간 7일뒤
      date.setDate(date.getDate() + 7);
      document.cookie = `refreshToken=${refreshToken}; expires=${date.toUTCString()}; path=/`;
      onLogin();
      dispatch(login());
      navigate('/');
    }
  }, [location, onLogin]);

  return null;
};

export default OAuthLogin;
