import styled from 'styled-components';

export const SignupWrapper = styled.div`
  width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  background-color: #f9e6e6;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 800px;
`;

export const GoogleSignup = styled.a`
  margin-top: 100px;
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

export const KakaoSignup = styled.a`
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

export const NaverSignup = styled.a`
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

export const EmailSignup = styled.form`
  display: flex;
  width: 290px;
  height: 400px;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: none;
  border-radius: 3px;
`;

export const DisplayNameWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
`;
export const DisplayNameLabel = styled.div`
  margin: 30px 10px 2px 24px;
  font-weight: bold;
`;
export const DisplayNameInput = styled.input`
  margin: 10px;
  width: 240px;
  height: 35px;
`;
export const EmailWrapper = styled.div`
  display: flex;
  justify-content: start;

  align-items: center;
  width: 100%;
`;
export const EmailLabel = styled.div`
  margin: 10px 10px 2px 24px;
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

export const PasswordInput = styled.input`
  margin: 10px;
  width: 240px;
  height: 35px;
`;

export const SignupButton = styled.button`
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
