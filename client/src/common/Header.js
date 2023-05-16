/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../public/logo.png';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../utils/UserInfo';
import { useEffect } from 'react';

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
  }
`;

const UnderMenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 0.5px solid var(--gray-200);
  height: 35px;
  text-decoration: none;
`;

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem('accessToken'),
  );

  const [username, setUsername] = useState(null);
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
              <Menu
                className="logout"
                onClick={() => {
                  localStorage.removeItem('accessToken');
                  setIsLoggedIn(false);
                }}
              >
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
        <StyledLink to="/survey">
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
