import React, { useEffect, useState } from 'react';
import dryskin from '../../../../public/dryskin.png';
import fatigue from '../../../../public/fatigue.png';
import {
  AnimateContent,
  Step2Design,
  Step2Img,
  Step2Button,
  Step2Choice,
  Step2Next,
  StyledGistomach,
  StyledImEye,
  StyledBsShieldPlus,
} from '../../../style/SurveyStyle';

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
    if (selectedButton) {
      setAnimate('down');
      setTimeout(() => {
        nextSteps();
      }, 1000);
    } else {
      alert('최소 한가지의 값을 선택해주세요!');
    }
  };
  return (
    <Step2Design>
      <Step2Choice>불편하거나 걱정되는 곳을 한가지 선택해 주세요! </Step2Choice>
      <AnimateContent animate={animate}>
        <Step2Button
          className="intestine"
          value="INTESTINE"
          onClick={handleDiseaseClick}
          selected={disease === 'INTESTINE'}
        >
          <StyledGistomach /> 소화, 장
        </Step2Button>
        <Step2Button
          className="skin"
          value="SKIN"
          onClick={handleDiseaseClick}
          selected={disease === 'SKIN'}
        >
          <Step2Img src={dryskin} alt="dryskin" />
          피부
        </Step2Button>
        <Step2Button
          className="eye"
          value="EYE"
          onClick={handleDiseaseClick}
          selected={disease === 'EYE'}
        >
          <StyledImEye /> 눈
        </Step2Button>
        <Step2Button
          className="sheild"
          value="IMMUNE"
          onClick={handleDiseaseClick}
          selected={disease === 'IMMUNE'}
        >
          <StyledBsShieldPlus />
          면역
        </Step2Button>
        <Step2Button
          className="fatiuge"
          value="FATIGUE"
          onClick={handleDiseaseClick}
          selected={disease === 'FATIGUE'}
        >
          <Step2Img src={fatigue} alt="fatiuge" /> 피로
        </Step2Button>
        <Step2Button
          className="none"
          value="NONE"
          onClick={handleDiseaseClick}
          selected={disease === 'NONE'}
        >
          <Step2Next>없음</Step2Next>
        </Step2Button>
        <Step2Button onClick={handleNextClick} className="next">
          <Step2Next>다음 ▶︎</Step2Next>
        </Step2Button>
      </AnimateContent>
    </Step2Design>
  );
};

export default Step2;
