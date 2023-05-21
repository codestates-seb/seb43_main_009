import styled from 'styled-components';
import { GiStomach } from 'react-icons/gi';
import { ImEye } from 'react-icons/im';
import { BsShieldPlus } from 'react-icons/bs';
import { CiCoffeeCup } from 'react-icons/ci';

export const Step1Design = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 85vh;
  background-color: #f4f4f4;

  .card {
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

    .doctor {
      width: 100%;
      height: 50%;
      border-radius: 15px 15px 0 0 / 15px 15px 0 0;
    }
    .recommend {
      margin-top: 20px;
      font-weight: bold;
    }
    .comment {
      margin-top: 20px;
    }
    .start {
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
    }
  }
`;
export const Step2Design = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
  img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }

  button {
    width: 30vw;
    height: 75px;
    border: none;
    border-radius: 20px;
    background-color: white;
    font-size: 25px;
    font-weight: 600;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    display: flex;
    align-items: center;
    margin-top: 30px;
    justify-content: center;
    &.next {
      width: 14vw;
      height: 60px;
      font-size: 20px;
      background-color: black;
      color: white;
      box-shadow: none;
      margin-top: 40px;
      :focus {
        background-color: var(--gray-500);
      }
    }
    :focus {
      background-color: #f16060;
    }
  }
  .selected {
    background-color: #f05858;
  }
  .choice {
    font-size: 25px;
    margin-top: 30px;
  }
  .next,
  .nothing {
    margin: 0 auto;
  }
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
  height: 100vh;
  background-color: #f4f4f4;
  .gsc-input-box {
    height: 50px !important;
    width: 30vw;
  }
  .choice {
    font-size: 23px;
    margin-top: 30px;
  }
  .choice2 {
    font-size: 23px;
    margin-top: 10px;
  }
  .etc {
    font-size: 17px;
    margin-top: 40px;
  }
  img {
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }

  .nothing {
    margin: 0 auto;
  }
  .selected {
    background-color: #f05858;
  }
  .gsc-input-box {
    background-color: rgba(0, 0, 0, 0);
    margin-top: 30px;
    border: none;
    width: 32vw;
    margin-left: 16px;
  }
  .gsc-control-cse {
    display: none;
  }
  .gsc-input {
    height: 75px !important;
  }

  button {
    width: 30vw;
    height: 75px;
    border: none;
    border-radius: 20px;

    background-color: #eaddca;
    font-size: 35px;
    display: flex;
    align-items: center;
    outline: none;

    background-color: white;
    font-size: 25px;
    font-weight: 600;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    :focus {
      background-color: #f16060;
    }
    &.nonono {
      margin-top: 20px;
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
      :focus {
        background-color: var(--gray-500);
      }
    }
    &.gsc-search-button {
      display: none;
    }
  }
  input {
    width: 30vw;
    height: 75px;
    margin-top: 30px;
    font-size: 18px;
    border-radius: 20px;
    border: none;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
  .goorback {
    width: 30vw;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const DesginCiCoffeeCup = styled(CiCoffeeCup)`
  margin-right: 10px;
`;

export const SurveyResultDesign = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: #f4f4f4;
  font-size: 22px;
  li {
    margin-bottom: 3px;
  }

  .logo {
    width: 100px;
  }
  .whoresult {
    border-bottom: 1px solid black;
    margin-top: 10vh;
    padding-bottom: 10px;
    font-size: 30px;
    font-weight: 700;
    font-family: 'MaplestoryOTFBold';
  }

  div span {
    margin-left: 10vw;
  }
  .explain {
    margin-top: 5vh;
    margin-left: 10vw;
  }
  .danger {
    margin-top: 7vh;
    margin-left: 10vw;
    color: red;
    width: 80vw;
  }
  .caution {
    color: black;
    margin-top: 0;
    margin-left: 1vw;
  }

  .explaindetail {
    width: 80vw;
    margin-top: 5vh;
  }
  .helppill {
    margin-top: 5vh;
    margin-left: 4vw;
  }

  .recommend {
    background-color: #f5d6d6;
    margin-top: 5vh;
    margin-left: 10vw;
    margin-bottom: 5vh;
    border-radius: 14px;
    width: 80vw;
    height: 50vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
  .recommend-content {
    display: flex;
    flex-direction: column;
  }

  .nutrients {
    margin-left: auto;
    margin-top: 30px;
    margin-right: 3vw;
    height: 300px;
    width: 300px;
  }

  .efficacy {
    margin-top: 5vh;
    margin-left: 20px;
  }
  .buttonWrapper {
    margin-left: 45px;
    margin-top: 3vh;
  }

  .buynow {
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
  }
  .retry {
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
  }
`;
