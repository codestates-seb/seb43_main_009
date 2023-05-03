import React from "react";
import styled from "styled-components";
import logo from "../../public/logo.png";
import Home from "../page/Home";
import Community from "../page/Community"
import Login from "../page/Login"
import Survey from "../page/Survey"
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  border : 1px solid black;
`;

export const Header = () => {
  return(
    <HeaderWrapper>
      <div>hi~i'm header</div>
      <Link to="/login">login</Link>
    </HeaderWrapper>
  );
};

export default Header;
