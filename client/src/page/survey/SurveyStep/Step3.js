import React, { useEffect, useState } from 'react';
import penicillin from '../../../../public/penicillin.png';
import anticonvulsants from '../../../../public/anticonvulsants.png';
import aspirin from '../../../../public/aspirin.png';
import GoogleSearch from '../../../common/GoogleSearch';
import {
  AnimateContent,
  Step3Design,
  Step3Choice,
  Step3Choice2,
  Step3Img,
  Nothing,
  Step3Button,
  Step3Input,
  Goorback,
  DesginCiCoffeeCup,
} from '../../../style/SurveyStyle';

const Step3 = ({ allergy, prevSteps, nextSteps, changeInput, submitForm }) => {
  const [animate, setAnimate] = useState('up');
  const [selectedButton, setSelectedButton] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [googleSearchValue, setGoogleSearchValue] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0);
    localStorage.setItem('hasLoaded', 'false');
  }, []);

  const handleAllergyClick = (e) => {
    if (selectedButton === e.currentTarget) {
      changeInput({ target: { name: 'allergy', value: '' } });
      setSelectedButton(null);
    } else {
      changeInput({
        target: { name: 'allergy', value: e.currentTarget.value },
      });
      setSelectedButton(e.currentTarget);
    }
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
    changeInput({ target: { name: 'allergy', value: e.target.value } });
  };

  const handleInputBlur = () => {
    changeInput({ target: { name: 'allergy', value: userInput } });
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      setAnimate('down');
      setTimeout(() => {
        submitForm();
        nextSteps();
      }, 1000);
    }
  };

  const handleNextClick = () => {
    if (selectedButton || googleSearchValue) {
      setAnimate('down');
      setTimeout(() => {
        submitForm();
        nextSteps();
      }, 1000);
    } else {
      alert('해당하는 알러지를 최소 한가지 설정해주세요!');
    }
  };

  return (
    <Step3Design>
      <Step3Choice>해당하는 약물 알러지를 선택해주세요 </Step3Choice>
      <Step3Choice2>
        의약품검색 페이지에서 알러지정보가 반영됩니다!
      </Step3Choice2>
      <AnimateContent animate={animate}>
        <Step3Button
          className="caffeine"
          value="CAFFEINE"
          onClick={handleAllergyClick}
          selected={allergy === 'CAFFEINE'}
        >
          <DesginCiCoffeeCup /> 카페인
        </Step3Button>
        <Step3Button
          className="aspirin"
          value="PAINKILLER"
          onClick={handleAllergyClick}
          selected={allergy === 'PAINKILLER'}
        >
          <Step3Img className="aspirin" src={aspirin} alt="aspirin" />
          아스피린(소염진통제)
        </Step3Button>
        <Step3Button
          className="penicillin "
          value="ANTIBIOTIC"
          onClick={handleAllergyClick}
          selected={allergy === 'ANTIBIOTIC'}
        >
          <Step3Img className="penicillin" src={penicillin} alt="penicillin" />
          페니실린(항생제)
        </Step3Button>
        <Step3Button
          className="anticonvulsants "
          value="ANTICONVULSANT"
          onClick={handleAllergyClick}
          selected={allergy === 'ANTICONVULSANT'}
        >
          <Step3Img
            className="anticonvulsants"
            src={anticonvulsants}
            alt="anticonvulsants"
          />
          항경련제
        </Step3Button>
        {/* <button className="xray" value="CONTRAST" onClick={handleAllergyClick}>
              <img className="xray" src={xray} alt="xray"/>
              조영제 
              </button> */}
        {/* <Step3Input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          placeholder="기타 알러지를 입력하세요 ex: 유당"
        /> */}
        <div>
          <GoogleSearch
            changeInput={changeInput}
            nextStep={nextSteps}
            setAnimate={setAnimate}
            onInput={setGoogleSearchValue}
          />
        </div>
        <Step3Button
          className="nonono"
          value="NONE"
          onClick={handleAllergyClick}
          selected={allergy === 'NONE'}
        >
          <Nothing>없음</Nothing>
        </Step3Button>
        <Goorback>
          <Step3Button className="previous" onClick={prevSteps}>
            ◀︎ 이전
          </Step3Button>
          <Step3Button className="next" onClick={handleNextClick}>
            다음 ▶︎
          </Step3Button>
        </Goorback>
      </AnimateContent>
    </Step3Design>
  );
};

export default Step3;
