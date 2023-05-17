import styled from 'styled-components';
import high from '../../public/medicine.jpg';
const landingTitle = high;
import { keyframes } from 'styled-components';

const slideFromLeft = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  60% {
    transform: translateY(10px);
    opacity: 1;
  }
  80% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }

`;
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;
export const SBackgroundLayout = styled.div`
  font-family: 'MaplestoryOTFBold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFBold.woff')
    format('woff');
  font-weight: normal;
  font-style: normal;
  flex-basis: 100%;
  width: 100%;
  height: 900px;
  background-image: url(${landingTitle});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center 2 0px;
  /* background-attachment: fixed; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;

  * {
    text-decoration: none;
  }

  @media only screen and (max-width: 300px) {
    background-image: url(${landingTitle});
    background-size: contain;
    background-position: center center;
    background-attachment: fixed;
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
  position: absolute;
  top: 60px;
  color: var(--gray-900);
  font-size: 2rem;
  color: #f06868;
  padding: 1.4rem;

  h1 {
    font-size: 65px;
    font-weight: 500;
    /* padding-bottom: 30px; */
    color: #f06868;
    animation: ${slideFromLeft} 2.5s ease-out;
  }
  h2 {
    /* font-family: sans-serif; */
    font-size: 30px;
    font-weight: 350;
    color: #f09c8d;
    opacity: 0;
    animation: ${fadeIn} 3s ease-in 0.5s forwards;
    position: absolute;
    bottom: 0;
  }

  h3 {
    font-size: 25px;
    font-weight: 350;
    color: #ee9a9a;
  }

  button {
    font-family: 'MaplestoryOTFBold';
    width: 40%;
    height: 40%;
    position: absolute;
    margin-top: 15rem;
    border-radius: 50px;
    border: none;
    opacity: 0.6;
    font-size: 25px;
    color: var(--peach-600);
    background-color: rgba(47, 138, 241, 0);
    cursor: pointer;
    animation: ${bounce} 2s ease-in-out infinite;
    animation-fill-mode: both;
    &:hover {
      background-color: var(--peach-50);
      animation-play-state: paused;
      animation: none;
      opacity: 0.8;
      box-shadow: 0px 12px 20px -10px rgba(0, 0, 0, 0.25),
        0px 24px 40px -20px rgba(0, 0, 0, 0.3);
    }
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
