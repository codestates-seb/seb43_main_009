import React, { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../common/AuthProvider";
import Layout from "../../common/Layout";
import { getCookie } from "../../utils/cookies";
import KakaoLogin from "./KakaoLogin"

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #f1f2f3;
`;

const GoogleLogin = styled.button`
  width: 290px;
  height: 37px;
  margin-bottom: 10px;
  background-color: grey;
  color: white;
  border-radius: 3px;
  border: none;
`;

const NaverLogin = styled.button`
  width: 290px;
  height: 37px;
  margin-bottom: 10px;
  background-color: #0ac157;
  color: white;
  border-radius: 3px;
  border: none;
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

  &:hover {
    cursor: pointer;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("hello@gmail.com");
  const [password, setPassword] = useState("1234");
  const { authState, setAuthState } = useAuthContext();

  console.log("before login", authState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://ec2-3-34-134-67.ap-northeast-2.compute.amazonaws.com:8080/users/login", {
        email,
        password,
      });
      setAuthState({
        token: response.headers.authorization,
        refresh: response.headers.refresh,
      });

      alert("로그인 성공!");
      navigate("/survey");
    } catch (error) {
      alert("로그인에 실패했습니다! Email과 Password를 다시 확인해주세요.");
      console.error(error);
    }
  };

  return (
    <Layout>
      <LoginWrapper>
          <GoogleLogin>Login with Google</GoogleLogin>
          <KakaoLogin>Login with Kakao</KakaoLogin>
          <NaverLogin>Login with Naver</NaverLogin>
        <EmailLogin onSubmit={handleSubmit}>
          <EmailWrapper>
            <EmailLabel>Email</EmailLabel>
          </EmailWrapper>
          <EmailInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordWrapper>
            <PasswordLabel>Password</PasswordLabel>
            <ForgotPassword>Forgot password?</ForgotPassword>
          </PasswordWrapper>
          <PasswordInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton type="submit">Log in</LoginButton>
        </EmailLogin>
      </LoginWrapper>
    </Layout>
  );
};
export default Login;
