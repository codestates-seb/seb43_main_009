import React from 'react';
import dryskin from '../../../../public/dryskin.png';
import fatigue from '../../../../public/fatigue.png';
import {
  Step2Design,
  StyledGistomach,
  StyledImEye,
  StyledBsShieldPlus,
} from '../../../style/SurveyStyle';

const Step2 = ({ disease, changeInput, nextSteps }) => {
  const menu = {
    stomach: '소화',
    skin: '피부',
    eye: '눈',
    sheild: '면역',
    fatiuge: '피로',
    nothing: '없음',
  };

  const handleDiseaseClick = (e) => {
    changeInput({ target: { name: 'disease', value: e.target.value } });
  };

  return (
    <Step2Design>
      <div className="choice">불편하시거나 걱정되시는 곳을 선택해 주세요! </div>
      <button
        className={disease === menu.stomach ? 'selected' : ''}
        value="소화"
        onClick={handleDiseaseClick}
      >
        <StyledGistomach /> 소화, 장
      </button>
      <button
        className={disease === menu.skin ? 'selected' : ''}
        value="피부"
        onClick={handleDiseaseClick}
      >
        <img src={dryskin} alt="dryskin" />
        피부
      </button>
      <button
        className={disease === menu.eye ? 'selected' : ''}
        value="눈"
        onClick={handleDiseaseClick}
      >
        <StyledImEye /> 눈
      </button>
      <button
        className={disease === menu.sheild ? 'selected' : ''}
        value="면역"
        onClick={handleDiseaseClick}
      >
        <StyledBsShieldPlus />
        면역
      </button>
      <button
        className={disease === menu.fatiuge ? 'selected' : ''}
        value="피로"
        onClick={handleDiseaseClick}
      >
        <img src={fatigue} alt="fatiuge" /> 피로
      </button>
      <button
        className={disease === menu.nothing ? 'selected' : ''}
        value="없음"
        onClick={handleDiseaseClick}
      >
        <span className="nothing">없음</span>
      </button>
      <button onClick={nextSteps}>
        <span className="next">다음 ▶︎</span>
      </button>
    </Step2Design>
  );
};

export default Step2;
