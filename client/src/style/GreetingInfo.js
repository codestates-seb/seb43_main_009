import styled from "styled-components";
import high from "../../public/home.png";
const landingTitle = high;

export const SBackgroundLayout = styled.div`
  font-family: "MaplestoryOTFBold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFBold.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  flex-basis: 100%;
  width: 100%;
  height: 900px;
  background-image: url(${landingTitle});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  * {
    text-decoration: none;
  }
  @media only screen and (max-width: 500px) {
    background-image: url(${landingTitle});
    background-size: contain;
    height: 290px;
  }
`;

export const SGradiant = styled.div`
  width: 100%;
  height: 180px;
  background: linear-gradient(180deg, var(--white), rgb(255 255 255 / 9%));
  position: absolute;
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export const STextInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 150px;
  color: var(--gray-900);
  h1 {
    font-size: 65px;
    font-weight: 500;
    padding-bottom: 40px;
  }
  h2 {
    font-size: 30px;
    font-weight: 500;
  }
  @media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 50px;
    color: var(--gray-900);
    margin: 0 0 0 0;
    h1 {
      font-size: 35px;
      font-weight: 500;
      padding-bottom: 25px;
    }
    h2 {
      font-size: 15px;
      font-weight: 500;
      padding-bottom: 40px;
    }
  }
`;
