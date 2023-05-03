import Layout from "../common/Layout";
import styled from "styled-components";
import React from "react";
import myImage from "../../public/logo.png";
import my from "../../public/high.jpg";

const ContentBox = styled.div`
  .img {
    width: 15rem;
    height: 5rem;
  }
`;

const Home = () => {
  return (
    <Layout>
      <ContentBox>
        <div>hi~ i'm home</div>
        <img className="img" src={myImage} alt="myImage" />
      </ContentBox>
    </Layout>
  );
};

export default Home;
