import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GlobalFont = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
`;
export const HeaderWrapper = styled.div`
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
export const Logo = styled.img`
  height: 50px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const UserName = styled.div`
  font-weight: 600;
  margin-top: 0.1rem;
  color: black;
  &:hover {
    color: #f05758;
  }
`;

export const Menu = styled.div`
  font-size: 20px;
  margin-left: 20px;
  color: black;
  margin-top: 3px;
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

export const UnderMenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  height: 35px;
  text-decoration: none;
  position: fixed;
  top: 110px;
  width: 100%;
  background-color: white;
  z-index: ${(props) => (props.showModal ? -1 : 100)};
`;
