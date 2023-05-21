/* eslint-disable */
import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from '../../common/Layout';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authSlice';
import { Link } from 'react-router-dom';
const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #f4f4f4;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
`;

const GoogleLogin = styled.a`
  width: 290px;
  height: 37px;
  margin-bottom: 10px;
  background-color: grey;
  color: white;
  border-radius: 3px;
  border: none;
  text-decoration-line: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const KakaoLogin = styled.a`
  width: 290px;
  height: 37px;
  margin-bottom: 10px;
  background-color: yellow;
  color: black;
  border-radius: 3px;
  border: none;
  text-decoration-line: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NaverLogin = styled.a`
  width: 290px;
  height: 37px;
  margin-bottom: 10px;
  background-color: #0ac157;
  color: white;
  border-radius: 3px;
  border: none;
  text-decoration-line: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmailLogin = styled.form`
  display: flex;
  width: 290px;
  height: 255px;
  flex-direction: column;
  align-items: center;
  border: 1px solid #bbbbbb;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
const EmailWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
`;
const EmailLabel = styled.div`
  margin: 20px 10px 2px 24px;
  font-weight: bold;
`;
const EmailInput = styled.input`
  margin: 10px;
  width: 240px;
  height: 35px;
`;
const PasswordWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const PasswordLabel = styled.div`
  margin-left: 26px;
  font-weight: bold;
`;
const ForgotPassword = styled.a`
  margin-right: 26px;
  color: blue;
`;

const PasswordInput = styled.input`
  margin: 10px;
  width: 240px;
  height: 35px;
`;

const LoginButton = styled.button`
  margin: 10px;
  width: 240px;
  height: 35px;
  color: white;
  background-color: #f05858;
  border-radius: 3px;
  border: none;
  font-size: 17px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color : black;
  font-size: 12px;
  margin-bottom : 10px;

`;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('hello@gmail.com');
  const [password, setPassword] = useState('1234');
  window.scrollTo(0, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://server.dowajoyak.shop/users/login',
        {
          username: email,
          password,
        },
      );
      const accessToken = response.headers['authorization'];
      const refreshToken = response.headers['refresh'];
      localStorage.setItem('accessToken', accessToken);
      const date = new Date();
      //쿠키 만료시간 7일뒤
      date.setDate(date.getDate() + 7);
      document.cookie = `refreshToken=${refreshToken}; expires=${date.toUTCString()}; path=/`;
      alert('로그인 성공!');
      navigate('/');
      dispatch(login());
    } catch (error) {
      alert('로그인에 실패했습니다! Email과 Password를 다시 확인해주세요.');
      console.error(error);
    }
  };

  return (
    <Layout>
      <LoginWrapper>
        <GoogleLogin href="https://server.dowajoyak.shop/oauth2/authorization/google">
          구글로 로그인
        </GoogleLogin>
        <KakaoLogin href="https://server.dowajoyak.shop/oauth2/authorization/kakao">
          카카오로 로그인
        </KakaoLogin>
        <NaverLogin href="https://server.dowajoyak.shop/oauth2/authorization/naver">
          네이버로 로그인
        </NaverLogin>
        <EmailLogin onSubmit={handleSubmit}>
          <EmailWrapper>
            <EmailLabel>이메일</EmailLabel>
          </EmailWrapper>
          <EmailInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordWrapper>
            <PasswordLabel>비밀번호</PasswordLabel>
          </PasswordWrapper>
          <PasswordInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton type="submit">로그인</LoginButton>
          <StyledLink to = '/signup'>회원가입</StyledLink>
        </EmailLogin>
      </LoginWrapper>
    </Layout>
  );
};
export default Login;
