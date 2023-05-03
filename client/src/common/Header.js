import styled from "styled-components";
import React from "react";
import logo from "../../public/logo.png";
import Home from "../page/Home";
import Community from "../page/Community"
import Login from "../page/Login"
import Survey from "../page/Survey"
import { Link } from "react-router-dom";

export const Header = () => {
  return(
    <>
      <div>hi~i'm header</div>
      <Link to="/login">login</Link>
    </>
  );
};

export default Header;
