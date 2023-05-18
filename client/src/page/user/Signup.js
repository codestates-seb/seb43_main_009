import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../common/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 1000px;
  margin-top: 50px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  background-color: #f4f4f4;
`;

const SignupWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 700px;
`;

const GoogleSignup = styled.a`
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

const KakaoSignup = styled.a`
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

const NaverSignup = styled.a`
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

const EmailSignup = styled.form`
  display: flex;
  width: 290px;
  height: 400px;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid #c9c9c9;
  border-radius: 3px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const DisplayNameWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
`;
const DisplayNameLabel = styled.div`
  margin: 30px 10px 2px 24px;
  font-weight: bold;
`;
const DisplayNameInput = styled.input`
  margin: 10px;
  width: 240px;
  height: 35px;
`;
const EmailWrapper = styled.div`
  display: flex;
  justify-content: start;

  align-items: center;
  width: 100%;
`;
const EmailLabel = styled.div`
  margin: 10px 10px 2px 24px;
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
  color: #0995ff;
`;

const PasswordInput = styled.input`
  margin: 10px;
  width: 240px;
  height: 35px;
`;

const SignupButton = styled.button`
  margin: 10px;
  width: 246px;
  height: 35px;
  color: white;
  border-radius: 3px;
  background-color: #f05858;
  border: none;
  font-size: 17px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;
const Signup = () => {
  const navigate = useNavigate();
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [DisplayNameInputValue, setDisplayNameInputValue] = useState('');

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
      <Wrapper>
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
              {/* <ForgotPassword>Forgot password?</ForgotPassword> */}
            </PasswordWrapper>
            <PasswordInput
              type="password"
              onChange={(e) => setPasswordInputValue(e.target.value)}
            />
            <SignupButton type="submit">회원가입</SignupButton>
          </EmailSignup>
        </SignupWrapper>
      </Wrapper>
    </Layout>
  );
};
export default Signup;
