import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { MainContent } from '../style/LayoutStyle';
import styled from 'styled-components';

const LayoutStyle = styled.div`
  min-height: 100vh; // 뷰포트 높이의 100%를 최소 높이로 설정
`;

const Layout = (props) => {
  const { children } = props;
  return (
    <LayoutStyle>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutStyle>
  );
};

export default Layout;
