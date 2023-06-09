import React, { useState } from 'react';
import logo from '../../public/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { getUserInfo } from '../utils/UserInfo';
import { useEffect } from 'react';
import { login, logout } from '../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setStep } from '../redux/surveySlice';
import LoginModal from '../page/user/LoginModal.tsx';
import {
  GlobalFont,
  HeaderWrapper,
  Logo,
  MenuWrapper,
  StyledLink,
  UserName,
  Menu,
  UnderMenuWrapper,
} from '../../src/style/HeaderStyle';

export const Header = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [username, setUsername] = useState(null);
  const userInfo = getUserInfo();
  const userId = userInfo ? userInfo.userId : null;
  const [showModal, setShowModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();
  const tabmenu = {
    survey: '/survey',
    commu: '/commu',
    search: '/search',
  };
  const currentTab = pathname;
  const handleLoginClick = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setIsClosing(false);
    }, 200);
  };
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('accessToken');
    setShowModal(false);
    navigate('/');
    window.alert('로그아웃 성공!');
    window.location.reload();
  };

  const handleResetStep = () => {
    dispatch(setStep(1));
  };
  const handleScrollZero = () => {
    window.scrollTo(0, 0);
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
                  isClosing={isClosing}
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
          <Menu
            className={currentTab.startsWith(tabmenu.survey) ? 'selected' : ''}
          >
            맞춤추천
          </Menu>
        </StyledLink>
        <StyledLink to="/commu" onClick={handleScrollZero}>
          <Menu
            className={currentTab.startsWith(tabmenu.commu) ? 'selected' : ''}
          >
            커뮤니티
          </Menu>
        </StyledLink>
        <StyledLink to="/search" onClick={handleScrollZero}>
          <Menu
            className={currentTab.startsWith(tabmenu.search) ? 'selected' : ''}
          >
            의약품검색
          </Menu>
        </StyledLink>
      </UnderMenuWrapper>
    </GlobalFont>
  );
};
export default Header;
