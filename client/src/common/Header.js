import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../public/logo.png';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../utils/UserInfo';
import { useEffect } from 'react';
import { login, logout } from '../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setStep } from '../redux/surveySlice';
const GlobalFont = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 110px;
  border-top: 5px solid #f05858;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 1;
`;
const Logo = styled.img`
  height: 50px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const UserName = styled.div`
  font-weight: 600;
  margin-top: 0.1rem;
`;

const Menu = styled.div`
  font-size: 20px;
  margin-left: 20px;
  color: black;
  text-decoration: none;
  &.signup {
    margin-right: 20px;
  }
  &.logout {
    margin-right: 20px;
    cursor: pointer;
  }
`;

const UnderMenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  /* border-bottom: 0.5px solid var(--gray-200); */
  height: 35px;
  text-decoration: none;
  position: fixed;
  top: 110px;
  width: 100%;
  background-color: white;
  z-index: 1;
`;

export const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [username, setUsername] = useState(null);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('accessToken');
    window.alert('로그아웃 성공!');
  };

  const handleResetStep = () => {
    dispatch(setStep(1));
  };

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo?.username) {
      const namePart = userInfo.username.split('@')[0];
      setUsername(namePart);
    } else {
      setUsername('Guest');
    }
  }, [isLoggedIn]);

  return (
    <GlobalFont>
      <HeaderWrapper>
        <Menu>❤️</Menu>
        <StyledLink to="/">
          <Logo src={logo} />
        </StyledLink>
        <MenuWrapper>
          {isLoggedIn ? (
            <>
              <UserName> {username}님 환영합니다! </UserName>
              <Menu className="logout" onClick={handleLogout}>
                로그아웃
              </Menu>
            </>
          ) : (
            <>
              <StyledLink to="/login">
                <Menu>로그인</Menu>
              </StyledLink>
              <StyledLink to="/signup">
                <Menu className="signup">회원가입</Menu>
              </StyledLink>
            </>
          )}
        </MenuWrapper>
      </HeaderWrapper>
      <UnderMenuWrapper>
        <StyledLink to="/survey" onClick={handleResetStep}>
          <Menu>맞춤추천</Menu>
        </StyledLink>
        <StyledLink to="/commu">
          <Menu>커뮤니티</Menu>
        </StyledLink>
        <StyledLink to="/search">
          <Menu>의약품검색</Menu>
        </StyledLink>
      </UnderMenuWrapper>
    </GlobalFont>
  );
};
export default Header;
