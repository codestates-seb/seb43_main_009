import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 103;
`;
export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 600px;
  background-color: white;
  border-radius: 15px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: none;
`;
export const LoginWrapperForModal = styled.div`
  display: flex;
  align-items: center;
  height: 600px;
  justify-content: center;
  flex-direction: column;
  background-color: #f9e6e6;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  border-radius: 15px;
`;
export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #f9e6e6;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
`;

export const GoogleLogin = styled.a`
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

export const KakaoLogin = styled.a`
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

export const NaverLogin = styled.a`
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

export const EmailLogin = styled.form`
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
export const EmailWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
`;
export const EmailLabel = styled.div`
  margin: 20px 10px 2px 24px;
  font-weight: bold;
`;
export const EmailInput = styled.input`
  margin: 10px;
  width: 240px;
  height: 35px;
`;
export const PasswordWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const PasswordLabel = styled.div`
  margin-left: 26px;
  font-weight: bold;
`;
export const ForgotPassword = styled.a`
  margin-right: 26px;
  color: blue;
`;

export const PasswordInput = styled.input`
  margin: 10px;
  width: 240px;
  height: 35px;
`;

export const LoginButton = styled.button`
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
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 12px;
  margin-bottom: 10px;
`;
