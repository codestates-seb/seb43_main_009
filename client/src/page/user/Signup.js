import React, { useState } from 'react';
import Layout from '../../common/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Wrapper,
  SignupWrapper,
  GoogleSignup,
  KakaoSignup,
  NaverSignup,
  EmailSignup,
  DisplayNameWrapper,
  DisplayNameLabel,
  DisplayNameInput,
  EmailWrapper,
  EmailLabel,
  EmailInput,
  PasswordWrapper,
  PasswordLabel,
  PasswordInput,
  SignupButton,
} from '../../style/SignupStyle';

const Signup = () => {
  const navigate = useNavigate();
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [DisplayNameInputValue, setDisplayNameInputValue] = useState('');
  window.scrollTo(0, 0);
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://server.dowajoyak.shop/users/signup', {
        email: emailInputValue,
        displayName: DisplayNameInputValue,
        password: passwordInputValue,
      });
      alert('회원가입 성공!');
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Layout>
      <SignupWrapper>
        <GoogleSignup href="https://server.dowajoyak.shop/oauth2/authorization/google">
          구글로 회원가입
        </GoogleSignup>
        <KakaoSignup href="https://server.dowajoyak.shop/oauth2/authorization/kakao">
          카카오로 회원가입
        </KakaoSignup>
        <NaverSignup href="https://server.dowajoyak.shop/oauth2/authorization/naver">
          네이버로 회원가입
        </NaverSignup>
        <EmailSignup onSubmit={handleSignup}>
          <DisplayNameWrapper>
            <DisplayNameLabel>닉네임</DisplayNameLabel>
          </DisplayNameWrapper>
          <DisplayNameInput
            type="name"
            onChange={(e) => setDisplayNameInputValue(e.target.value)}
          />
          <EmailWrapper>
            <EmailLabel>이메일</EmailLabel>
          </EmailWrapper>
          <EmailInput
            type="email"
            onChange={(e) => setEmailInputValue(e.target.value)}
          />
          <PasswordWrapper>
            <PasswordLabel>비밀번호</PasswordLabel>
          </PasswordWrapper>
          <PasswordInput
            type="password"
            onChange={(e) => setPasswordInputValue(e.target.value)}
          />
          <SignupButton type="submit">회원가입</SignupButton>
        </EmailSignup>
      </SignupWrapper>
    </Layout>
  );
};
export default Signup;
