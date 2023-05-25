import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { MainContent } from '../style/LayoutStyle';

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
