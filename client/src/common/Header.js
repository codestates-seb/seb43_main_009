import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../public/logo.png';
import { Link, Navigate } from 'react-router-dom';
import { getUserInfo } from '../utils/UserInfo';
import { useEffect } from 'react';
import { login, logout } from '../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setStep } from '../redux/surveySlice';
import { Axios } from '../utils/api';
import LoginModal from '../page/user/LoginModal';

const GlobalFont = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 110px;
  border-top: 5px solid #f05758;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 100;
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
  color: black;
  &:hover {
    color: #f05758;
  }
`;

const Menu = styled.div`
  font-size: 20px;
  margin-left: 20px;
  color: black;
  text-decoration: none;
  &.login {
    cursor: pointer;
  }
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
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  height: 35px;
  text-decoration: none;
  position: fixed;
  top: 110px;
  width: 100%;
  background-color: white;
  z-index: 101;
  background-color: ${(props) => (props.showModal ? '#8A8A8A' : 'white')};
`;

export const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [username, setUsername] = useState(null);
  const userInfo = getUserInfo();
  const userId = userInfo ? userInfo.userId : null;
  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('accessToken');
    window.alert('로그아웃 성공!');
    window.location.reload();
  };

  const handleResetStep = () => {
    dispatch(setStep(1));
  };
  const handleScrollZero = () => {
    window.scrollTo(0, 0);
  };

  // useEffect(() => {
  //   const userInfo = getUserInfo();
  //   if (userInfo?.username) {
  //     const namePart = userInfo.username.split('@')[0];
  //     setUsername(namePart);
  //   } else {
  //     setUsername('Guest');
  //   }
  // }, [isLoggedIn]);
  useEffect(() => {
    // 사용자 정보를 가져오는 API 요청을 보냅니다.
    Axios.get(`/users/${userId}`)
      .then((response) => {
        // 응답 데이터에서 사용자 이름을 가져옵니다.
        const userInfo = getUserInfo();
        console.log(userInfo);
        // 기존 코드에서 차용한 방식으로 사용자 이름을 설정합니다.
        if (userInfo.username) {
          const namePart = userInfo.username.split('@')[0];
          setUsername(namePart);
        } else {
          setUsername('Guest');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [isLoggedIn, userId]);

  return (
    <GlobalFont>
      <HeaderWrapper>
        <Menu>❤️</Menu>
        <StyledLink to="/" onClick={handleScrollZero}>
          <Logo src={logo} />
        </StyledLink>
        <MenuWrapper>
          {isLoggedIn ? (
            <>
              <StyledLink to={`/users/${userId}`}>
                <UserName>{username}님 환영합니다! </UserName>
              </StyledLink>
              <Menu className="logout" onClick={handleLogout}>
                로그아웃
              </Menu>
            </>
          ) : (
            <>
              {/* <StyledLink to="/login" onClick={handleScrollZero}> */}
              <Menu className="login" onClick={handleLoginClick}>
                로그인
              </Menu>
              {showModal && (
                <LoginModal
                  showModal={showModal}
                  onClose={handleModalClose}
                ></LoginModal>
              )}
              {/* </StyledLink> */}
              <StyledLink to="/signup" onClick={handleScrollZero}>
                <Menu className="signup">회원가입</Menu>
              </StyledLink>
            </>
          )}
        </MenuWrapper>
      </HeaderWrapper>
      <UnderMenuWrapper showModal={showModal}>
        <StyledLink
          to="/survey"
          onClick={() => {
            handleResetStep();
            window.scrollTo(0, 0);
          }}
        >
          <Menu>맞춤추천</Menu>
        </StyledLink>
        <StyledLink to="/commu" onClick={handleScrollZero}>
          <Menu>커뮤니티</Menu>
        </StyledLink>
        <StyledLink to="/search" onClick={handleScrollZero}>
          <Menu>의약품검색</Menu>
        </StyledLink>
      </UnderMenuWrapper>
    </GlobalFont>
  );
};
export default Header;
