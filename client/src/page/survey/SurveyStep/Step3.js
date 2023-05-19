import React, { useState } from 'react';
import penicillin from '../../../../public/penicillin.png';
import anticonvulsants from '../../../../public/anticonvulsants.png';
import aspirin from '../../../../public/aspirin.png';
import xray from '../../../../public/xray.png';
import { Step3Design, DesginCiCoffeeCup } from '../../../style/SurveyStyle';
import GoogleSearch from '../../../common/GoogleSearch';

const Step3 = ({ allergy, prevSteps, nextSteps, changeInput, submitForm }) => {
  const menu = {
    caffeine: '카페인',
    aspirin: '아스피린',
    penicillin: '페니실린',
    anticonvulsants: '항경련제',
    xray: '조영제',
    nothing: '없음',
  };
  const [userInput, setUserInput] = useState('');
  const handleAllergyClick = (e) => {
    changeInput({ target: { name: 'allergy', value: e.currentTarget.value } });
  };
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleInputBlur = () => {
    changeInput({ target: { name: 'allergy', value: userInput } });
  };

  return (
    <Step3Design>
      <div className="choice">해당하는 약물 알러지를 선택해주세요 </div>
      <div className="choice2">
        의약품검색 페이지에서 알러지정보가 반영됩니다!
      </div>
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
      {/* <button
        className={allergy === menu.xray ? 'selected' : ''}
        value="CONTRAST"
        onClick={handleAllergyClick}
      >
        <img className="xray" src={xray} alt="xray" />
        조영제
      </button> */}
      {/* <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        placeholder="이외 알러지 입력 ex) 유당"
      /> */}
      <GoogleSearch changeInput={changeInput} />
      <div className="etc">이외 알러지 입력 ex: 유당</div>
      <button className="nonono" value="NONE" onClick={handleAllergyClick}>
        <span className="nothing">없음</span>
      </button>
      <div className="goorback">
        <button className="previous" onClick={prevSteps}>
          ◀︎ 이전
        </button>
        <button
          className="next"
          onClick={() => {
            nextSteps();
            submitForm();
          }}
        >
          다음 ▶︎
        </button>
      </div>
    </Step3Design>
  );
};

export default Step3;
