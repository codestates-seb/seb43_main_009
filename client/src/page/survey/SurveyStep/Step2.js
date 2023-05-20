import React from 'react';
import dryskin from '../../../../public/dryskin.png';
import fatigue from '../../../../public/fatigue.png';
// import {
//   Step2Design,
//   StyledGistomach,
//   StyledImEye,
//   StyledBsShieldPlus,
// } from '../../../style/SurveyStyle';

import { GiStomach } from 'react-icons/gi';
import { ImEye } from 'react-icons/im';
import { BsShieldPlus } from 'react-icons/bs';
import styled from 'styled-components';

const Step2Design = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const Button = styled.button`
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
`;

const Choice = styled.div`
  font-size: 25px;
  margin-top: 30px;
`;

const Next = styled.span`
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

const Step2 = ({ disease, changeInput, nextSteps }) => {
  const handleDiseaseClick = (e) => {
    changeInput({ target: { name: 'disease', value: e.currentTarget.value } });
  };

  return (
    <Step2Design>
      <Choice>불편하거나 걱정되는 곳을 선택해 주세요! </Choice>
      <Button
        className="intestine"
        value="INTESTINE"
        onClick={handleDiseaseClick}
      >
        <StyledGistomach /> 소화, 장
      </Button>
      <Button className="skin" value="SKIN" onClick={handleDiseaseClick}>
        <Img src={dryskin} alt="dryskin" />
        피부
      </Button>
      <Button className="eye" value="EYE" onClick={handleDiseaseClick}>
        <StyledImEye /> 눈
      </Button>
      <Button className="sheild" value="IMMUNE" onClick={handleDiseaseClick}>
        <StyledBsShieldPlus />
        면역
      </Button>
      <Button className="fatiuge" value="FATIGUE" onClick={handleDiseaseClick}>
        <Img src={fatigue} alt="fatiuge" /> 피로
      </Button>
      <Button className="none" value="NONE" onClick={handleDiseaseClick}>
        <Next>없음</Next>
      </Button>
      <Button onClick={nextSteps} className="next">
        <Next>다음 ▶︎</Next>
      </Button>
    </Step2Design>
  );
};

export default Step2;
