import styled, { keyframes, css } from 'styled-components';
import { GiStomach } from 'react-icons/gi';
import { ImEye } from 'react-icons/im';
import { BsShieldPlus } from 'react-icons/bs';
import { CiCoffeeCup } from 'react-icons/ci';

const slideUp = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100px);
    opacity: 0;
  }
`;
export const AnimateContent = styled.div`
  ${({ animate }) =>
    animate === 'up'
      ? css`
          animation: ${slideUp} 1s;
        `
      : animate === 'down'
      ? css`
          animation: ${slideDown} 1s;
        `
      : ''}
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 400px;
  height: 560px;
  min-height: 400px;
  margin-top: 7%;
  background-color: white;
  font-size: 25px;
  border-radius: 15px;
  @media screen and (max-height: 800px) {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 700;
    width: 300px;
    height: 360px;
  }

  transition: all 0.2s;
  box-shadow: 12px 12px 2px 1px rgba(80, 80, 80, 0.2);
  &:hover {
    box-shadow: -12px 12px 2px -1px rgba(80, 80, 80, 0.2);
  }

  box-shadow: 0 5px 5px -5px black;
`;

export const Doctor = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 15px 15px 0 0 / 15px 15px 0 0;
`;

export const Step1Recommend = styled.div`
  margin-top: 20px;
  font-weight: bold;
`;

export const Comment = styled.div`
  margin-top: 20px;
`;

export const Start = styled.button`
  margin: 20px;
  width: 120px;
  height: 50px;
  border-radius: 15px;
  border: none;
  background-color: #f05858;
  font-size: 25px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #d32f2f;
  }
  @media screen and (max-height: 700px) {
    font-size: 16px;
  }
`;

export const Step1Design = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 85vh;
  background-color: #f4f4f4;
`;

export const Step2Design = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  height: 1000px;
  background-color: #f4f4f4;
`;

export const Step2Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

export const Step2Button = styled.button`
  width: 30vw;
  height: 75px;
  border: none;
  border-radius: 20px;
  background-color: ${({ selected }) => (selected ? '#f16060' : 'white')};
  font-size: 25px;
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  display: flex;
  align-items: center;
  margin: 30px auto;
  justify-content: center;
  transition: background-color 0.5s;

  &.next {
    width: 14vw;
    height: 60px;
    font-size: 20px;
    background-color: black;
    color: white;
    box-shadow: none;
    margin: 30px auto 0;
    transition: background-color 0.5s;
    :focus {
      background-color: var(--gray-500);
    }
  }
`;

export const Step2Choice = styled.div`
  font-size: 25px;
  margin-top: 30px;
  animation: none;
`;

export const Step2Next = styled.span`
  margin: 0 auto;
`;

export const StyledGistomach = styled(GiStomach)`
  margin-right: 10px;
`;

export const StyledImEye = styled(ImEye)`
  margin-right: 10px;
`;

export const StyledBsShieldPlus = styled(BsShieldPlus)`
  margin-right: 10px;
`;

export const Step3Design = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  height: 1000px;
  background-color: #f4f4f4;
  /* 구글 자동완성 CSS */
  .gsc-input-box {
    height: 50px !important;
    width: 31vw;
    background-color: rgba(0, 0, 0, 0);
    margin-top: 30px;
    border: none;
    margin-left: -6px;
  }
  .gsc-control-cse {
    display: none;
  }
  input {
    &.gsc-input {
      height: 75px !important;
      border-radius: 2px;
      border-style: solid;
      border-color : red;
      text-align: center;
      font-size:20px;
      background: none !important;
      background-color: white !important;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important;
    }
    &.gsc-input::placeholder {
      color: var(--main);
      font-size: 20px;
  }
  }

  button {
    &.gsc-search-button {
      display: none;
    }
  }
`;

export const Step3Choice = styled.div`
  font-size: 23px;
  margin-top: 30px;
`;

export const Step3Choice2 = styled.div`
  font-size: 23px;
  margin-top: 10px;
`;

export const Step3Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

export const Nothing = styled.span`
  margin: 0 auto;
`;

export const Step3Button = styled.button`
  width: 30vw;
  height: 75px;
  border: none;
  border-radius: 20px;
  font-size: 35px;
  display: flex;
  align-items: center;
  outline: none;
  background-color: ${({ selected }) => (selected ? '#f16060' : 'white')};
  font-size: 25px;
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  transition: background-color 0.5s;
  &.nonono {
    margin-top: 60px;
  }

  &.next,
  &.previous {
    width: 14vw;
    height: 60px;
    font-size: 20px;
    background-color: black;
    color: white;
    box-shadow: none;
    margin-top: 40px;

    &:focus {
      background-color: var(--gray-500);
    }
  }

  &.gsc-search-button {
    display: none;
  }
`;

export const Step3Input = styled.input`
  width: 30vw;
  height: 75px;
  margin-top: 30px;
  font-size: 18px;
  border-radius: 20px;
  border: none;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0 px10 px15 px-3 px,
    rgba(0, 0, 0, 0.05) 0 px4 px6 px-2 px;
  &:focus {
    outline: 3px solid var(--main);
  }
`;

export const Goorback = styled.div`
  width: 30vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DesginCiCoffeeCup = styled(CiCoffeeCup)`
  margin-right: 10px;
`;

export const SurveyResultDesign = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 1100px;
  background-color: #f4f4f4;
  font-size: 22px;
`;

export const Li = styled.li`
  margin-bottom: 3 px;
`;

export const Logo = styled.img`
  width: 100px;
`;

export const Whoresult = styled.div`
  border-bottom: 1px solid black;
  margin-top: 10vh;
  padding-bottom: 10px;
  font-size: 30px;
  font-weight: 700;
  font-family: 'MaplestoryOTFBold';
`;

export const Span = styled.span`
  margin-left: 10vw;
`;

export const Explain = styled.div`
  margin-top: 5vh;
  margin-left: 10vw;
`;

export const Danger = styled.div`
  margin-top: 7vh;
  margin-left: 10vw;
  color: red;
  width: 80vw;
`;

export const Caution = styled.span`
  color: black;
  margin-top: 0;
  margin-left: 5px;
`;

export const Expliandetail = styled.div`
  width: 80vw;
  margin-top: 5vh;
`;

export const Helppill = styled.div`
  margin-top: 5vh;
  margin-left: 37px;
  margin-right: 5px;
`;

export const Step4Recommend = styled.div`
  background-color: #f5d6d6;
  margin-top: 5vh;
  margin-left: 10vw;
  margin-bottom: 5vh;
  border-radius: 14px;
  width: 80vw;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const RecommendContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Nutrients = styled.img`
  margin-left: auto;
  margin-top: 30px;
  margin-right: 3vw;
  height: 300px;
  width: 300px;
`;

export const Efficacy = styled.div`
  margin-top: 5vh;
  margin-left: 20px;
`;

export const ButtonWrapper = styled.div`
  margin-left: 45px;
  margin-top: 3vh;
`;

export const Buynow = styled.button`
  background-color: #d4f8ff;
  margin-bottom: 30px;
  width: 160px;
  height: 70px;
  font-size: 20px;
  border: none;
  border-radius: 14px;
  font-weight: 700;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    width: 100px;
    height: 30px;
  }
`;

export const Retry = styled.button`
  background-color: #f05858;
  border-radius: 14px;
  margin-left: 2vw;
  width: 160px;
  height: 70px;
  border: none;
  font-size: 20px;
  color: white;
  font-weight: 700;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    width: 100px;
    height: 30px;
  }
`;

