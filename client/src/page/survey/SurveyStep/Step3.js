import React from 'react';
import penicillin from '../../../../public/penicillin.png';
import anticonvulsants from '../../../../public/anticonvulsants.png';
import aspirin from '../../../../public/aspirin.png';
import xray from '../../../../public/xray.png';
import { Step3Design, DesginCiCoffeeCup } from '../../../style/SurveyStyle';

const Step3 = ({ allergy, prevSteps, nextSteps, changeInput, submitForm }) => {
  const menu = {
    caffeine: '카페인',
    aspirin: '아스피린',
    penicillin: '페니실린',
    anticonvulsants: '항경련제',
    xray: '조영제',
    nothing: '없음',
  };

  const handleAllergyClick = (e) => {
    changeInput({ target: { name: 'allergy', value: e.target.value } });
  };
  return (
    <Step3Design>
      <div className="choice">해당하는 약물 알러지를 선택해주세요! </div>
      <button
        className={allergy === menu.caffeine ? 'selected' : ''}
        value="CAFFEINE"
        onClick={handleAllergyClick}
      >
        <DesginCiCoffeeCup />
        카페인
      </button>
      <button
        className={allergy === menu.aspirin ? 'selected' : ''}
        value="PAINKILLER"
        onClick={handleAllergyClick}
      >
        <img className="aspirin" src={aspirin} alt="aspirin" />
        아스피린(소염진통제)
      </button>
      <button
        className={allergy === menu.penicillin ? 'selected' : ''}
        value="ANTIBIOTIC"
        onClick={handleAllergyClick}
      >
        <img className="penicillin" src={penicillin} alt="penicillin" />
        페니실린(항생제)
      </button>
      <button
        className={allergy === menu.anticonvulsants ? 'selected' : ''}
        value="ANTICONVULSANT"
        onClick={handleAllergyClick}
      >
        <img
          className="anticonvulsants"
          src={anticonvulsants}
          alt="anticonvulsants"
        />
        항경련제
      </button>
      <button
        className={allergy === menu.xray ? 'selected' : ''}
        value="CONTRAST"
        onClick={handleAllergyClick}
      >
        <img className="xray" src={xray} alt="xray" />
        조영제
      </button>
      <button
        className={allergy === menu.nothing ? 'selected' : ''}
        value="NONE"
        onClick={handleAllergyClick}
      >
        <span className="nothing">없음</span>
      </button>
      <div className="goorback">
        <div className="previous" onClick={prevSteps}>
          ◀︎ 이전
        </div>
        <div
          className="next"
          onClick={() => {
            nextSteps();
            submitForm();
          }}
        >
          다음 ▶︎
        </div>
      </div>
    </Step3Design>
  );
};

export default Step3;
