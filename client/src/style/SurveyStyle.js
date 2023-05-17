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
    width: 440px;
    height: 600px;
    margin-top: 70px;
    background-color: white;
    font-size: 25px;
    border-radius: 15px;
    transition: all 0.2s;
    box-shadow: 12px 12px 2px 1px rgba(80, 80, 80, 0.2);
    &:hover {
      box-shadow: -12px 12px 2px -1px rgba(80, 80, 80, 0.2);
    }
    .doctor {
      width: 100%;
      height: 60%;
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
      margin-top: 30px;
      width: 120px;
      height: 50px;
      border-radius: 15px;
      border: none;
      background-color: #f05858;
      font-size: 25px;
      color: white;
      cursor: pointer;
      &:hover {
        background-color: #d32f2f;
      }
    }
  }
`;
export const Step2Design = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
  background-color: #f1f2f3;

  img {
    width: 35px;
    height: 35px;
    margin-left: 37%;
    margin-right: 10px;
  }

  button {
    width: 30vw;
    height: 60px;
    border: 1px solid black;
    border-radius: 20px;
    background-color: #f9e6e6;
    font-size: 35px;
    display: flex;
    align-items: center;
  }
  .selected {
    background-color: #f05858;
  }
  .choice {
    font-size: 35px;
  }
  .next,
  .nothing {
    margin: 0 auto;
  }
`;

export const StyledGistomach = styled(GiStomach)`
  margin-left: 37%;
  margin-right: 10px;
`;

export const StyledImEye = styled(ImEye)`
  margin-left: 37%;
  margin-right: 10px;
`;

export const StyledBsShieldPlus = styled(BsShieldPlus)`
  margin-left: 37%;
  margin-right: 10px;
`;

export const Step3Design = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
  background-color: #f1f2f3;

  .choice {
    font-size: 35px;
  }

  img {
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }
  .aspirin {
    margin-left: 10%;
  }
  .penicillin {
    margin-left: 17%;
  }
  .anticonvulsants {
    margin-left: 29%;
  }
  .xray {
    margin-left: 33%;
  }
  .nothing {
    margin: 0 auto;
  }
  .selected {
    background-color: #f05858;
  }

  button {
    width: 30vw;
    height: 60px;
    border: 1px solid black;
    border-radius: 20px;
    background-color: #eaddca;
    font-size: 35px;
    display: flex;
    align-items: center;
    outline: none;
  }
  .goorback {
    width: 30vw;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .previous,
  .next {
    width: 14vw;
    height: 60px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    border-radius: 20px;
    background-color: #f9e6e6;
  }
`;

export const DesginCiCoffeeCup = styled(CiCoffeeCup)`
  margin-left: 33%;
  margin-right: 10px;
`;

export const SurveyResultDesign = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: #f1f2f3;
  font-size: 22px;

  li {
    margin-bottom: 3px;
  }

  .logo {
    width: 150px;
    height: 50px;
  }
  .whoresult {
    border-bottom: 1px solid black;
    margin-top: 10vh;
  }

  div span {
    margin-left: 5vw;
  }
  .explain {
    margin-top: 7vh;
    margin-left: 5vw;
  }
  .danger {
    margin-top: 7vh;
    margin-left: 5vw;
    color: red;
    width: 80vw;
  }
  .caution {
    color: black;
    margin-top: 0;
    margin-left: 7px;
  }

  .explaindetail {
    width: 80vw;
    margin-top: 5vh;
  }
  .helppill {
    margin-top: 5vh;
    margin-left: 1vw;
  }

  .recommend {
    background-color: #f5d6d6;
    margin-top: 5vh;
    margin-left: 5vw;
    margin-bottom: 5vh;
    width: 80vw;
    height: 50vh;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  .recommend-content {
    display: flex;
    flex-direction: column;
  }

  .nutrients {
    margin-left: auto;
    margin-top: 30px;
    margin-right: 7vw;
    height: 300px;
    width: 300px;
  }

  .efficacy {
    margin-top: 5vh;
  }

  .buynow {
    margin-left: 2vw;
    margin-top: 20px;
  }
  .retry {
    background-color: #f05858;
    border: none;
    margin-left: 5vw;
    width: 160px;
    height: 70px;
    font-size: 20px;
    color: white;
  }
`;
