import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const MainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 145px;
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
