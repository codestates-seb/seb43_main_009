import React from "react";
import styled from "styled-components";
import logo from "../../public/logo.png";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  border-top : 3px solid #F05858;
`;
const Logo = styled.img`
  height: 40px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;
const Menu = styled.div`
  font-size : 20px;
  margin-left: 20px;
  text-decoration-line: none;
  &.signup{
    margin-right: 20px;
  }


`;

const UnderMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-bottom : 1px solid gray;
  height : 20px;
`;
;

export const Header = () => {
  
  return(
    <>
      <HeaderWrapper>
        <Menu>❤️</Menu>

        <Link to="/">
          <Logo src={logo}/>
        </Link>
        <MenuWrapper>
            <Link to="/login">
              <Menu>로그인</Menu>
            </Link>
            <Link to="/login">
              <Menu className="signup">회원가입</Menu>
            </Link>
        </MenuWrapper>
      </HeaderWrapper>
      <UnderMenuWrapper>
          <Link to="/survey">
            <Menu>맞춤추천</Menu>
          </Link>
          <Link to="/commu">
            <Menu>커뮤니티</Menu>
          </Link>
          <Link to="/login">
            <Menu>의약품검색</Menu>
          </Link>
      </UnderMenuWrapper>
    </>
  );
};
export default Header;
