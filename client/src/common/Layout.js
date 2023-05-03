import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import React from "react";

const MainContent = styled.div`
  display: flex;
`;

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
};

export default Layout;
