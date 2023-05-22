import React, { useEffect, useState } from 'react';
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
import styled, { keyframes, css } from 'styled-components';

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
const Step2Design = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  height: 1000px;
  background-color: #f4f4f4;
`;
const AnimateContent = styled.div`
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

const Choice = styled.div`
  font-size: 25px;
  margin-top: 30px;
  animation: none;
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
  const [animate, setAnimate] = useState('up');
  const [selectedButton, setSelectedButton] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleDiseaseClick = (e) => {
    if (selectedButton === e.currentTarget) {
      changeInput({ target: { name: 'disease', value: '' } });
      setSelectedButton(null);
    } else {
      changeInput({
        target: { name: 'disease', value: e.currentTarget.value },
      });
      setSelectedButton(e.currentTarget);
    }
  };
  const handleNextClick = () => {
    setAnimate('down');
    setTimeout(() => {
      nextSteps();
    }, 1000);
  };

  return (
    <Step2Design>
      <Choice>불편하거나 걱정되는 곳을 한가지 선택해 주세요! </Choice>
      <AnimateContent animate={animate}>
        <Button
          className="intestine"
          value="INTESTINE"
          onClick={handleDiseaseClick}
          selected={disease === 'INTESTINE'}
        >
          <StyledGistomach /> 소화, 장
        </Button>
        <Button
          className="skin"
          value="SKIN"
          onClick={handleDiseaseClick}
          selected={disease === 'SKIN'}
        >
          <Img src={dryskin} alt="dryskin" />
          피부
        </Button>
        <Button
          className="eye"
          value="EYE"
          onClick={handleDiseaseClick}
          selected={disease === 'EYE'}
        >
          <StyledImEye /> 눈
        </Button>
        <Button
          className="sheild"
          value="IMMUNE"
          onClick={handleDiseaseClick}
          selected={disease === 'IMMUNE'}
        >
          <StyledBsShieldPlus />
          면역
        </Button>
        <Button
          className="fatiuge"
          value="FATIGUE"
          onClick={handleDiseaseClick}
          selected={disease === 'FATIGUE'}
        >
          <Img src={fatigue} alt="fatiuge" /> 피로
        </Button>
        <Button
          className="none"
          value="NONE"
          onClick={handleDiseaseClick}
          selected={disease === 'NONE'}
        >
          <Next>없음</Next>
        </Button>
        <Button onClick={handleNextClick} className="next">
          <Next>다음 ▶︎</Next>
        </Button>
      </AnimateContent>
    </Step2Design>
  );
};

export default Step2;
