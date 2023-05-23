import React, { useState } from 'react';
import Layout from '../../common/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import googleLogo from '../../../public/googleLogo.png';
import naverLogo from '../../../public/naverLogo.png';
import kakaoLogo from '../../../public/kakaoLogo.png';
import {
  Wrapper,
  SignupWrapper,
  GoogleSignup,
  KakaoSignup,
  GoogleLogo,
  KakaoLogo,
  NaverLogo,
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
  WarningMessage,
  SignupButton,
} from '../../style/SignupStyle';

const Signup = () => {
  const navigate = useNavigate();
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [DisplayNameInputValue, setDisplayNameInputValue] = useState('');
  const [passwordWarning, setPasswordWarning] = useState('');
  window.scrollTo(0, 0);
  const handlePasswordChange = (e) => {
    setPasswordInputValue(e.target.value);
    const password = e.target.value;
    if (password.length < 8) {
      setPasswordWarning(
        '경고) 비밀번호의 길이는 최소 8자리 이상을 권장합니다',
      );
    } else if (
      !/[a-zA-Z]/.test(password) ||
      !/\d/.test(password) ||
      !/[\s~`!@#$%^&*()-_=+{}[\]|\\;:'",.<>/?]/.test(password)
    ) {
      setPasswordWarning(
        '경고) 비밀번호는 영문, 숫자, 특수문자의 조합을 권장합니다',
      );
    } else {
      setPasswordWarning('');
    }
  };
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
          <GoogleLogo src={googleLogo} alt="logo" />
          구글로 회원가입
        </GoogleSignup>
        <KakaoSignup href="https://server.dowajoyak.shop/oauth2/authorization/kakao">
          <KakaoLogo src={kakaoLogo} alt="logo" />
          카카오로 회원가입
        </KakaoSignup>
        <NaverSignup href="https://server.dowajoyak.shop/oauth2/authorization/naver">
          <NaverLogo src={naverLogo} alt="logo" />
          네이버로 회원가입
        </NaverSignup>
        <EmailSignup onSubmit={handleSignup}>
          <DisplayNameWrapper>
            <DisplayNameLabel>사용자명</DisplayNameLabel>
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
          <PasswordInput type="password" onChange={handlePasswordChange} />
          {passwordWarning && (
            <WarningMessage>{passwordWarning}</WarningMessage>
          )}
          <SignupButton type="submit">회원가입</SignupButton>
        </EmailSignup>
      </SignupWrapper>
    </Layout>
  );
};
export default Signup;
