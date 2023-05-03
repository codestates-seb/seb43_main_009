import React from "react";
import styled from "styled-components";
import logo from "../../public/logo.png";
import { Link } from "react-router-dom";

const GlobalFont = styled.div`
  font-family: "Noto Sans KR";
  font-weight: 700;
`
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 110px;
  border-top : 5px solid #F05858;
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

const Menu = styled.div`
  font-size : 20px;
  margin-left: 20px;
  color : black;
  text-decoration: none;
  &.signup{
    margin-right: 20px;
  }
`;

const UnderMenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  box-shadow: 0 3px 3px -3px black;
  height : 35px;

`;


export const Header = () => {
  
  return(
    <GlobalFont>
      <HeaderWrapper>
        <Menu>❤️</Menu>
        <StyledLink to="/">
          <Logo src={logo}/>
        </StyledLink>
        <MenuWrapper >
            <StyledLink to="/login">
              <Menu>로그인</Menu>
            </StyledLink>
            <StyledLink to="/login">
              <Menu className="signup">회원가입</Menu>
            </StyledLink>
        </MenuWrapper>
      </HeaderWrapper>
      <UnderMenuWrapper>
          <StyledLink to="/survey">
            <Menu>맞춤추천</Menu>
          </StyledLink>
          <StyledLink to="/commu">
            <Menu>커뮤니티</Menu>
          </StyledLink>
          <StyledLink to="/signup">
            <Menu>의약품검색</Menu>
          </StyledLink>
      </UnderMenuWrapper>
    </GlobalFont>
  );
};
export default Header;
