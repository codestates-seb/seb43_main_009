import React, { useEffect, useState } from 'react';
import penicillin from '../../../../public/penicillin.png';
import anticonvulsants from '../../../../public/anticonvulsants.png';
import aspirin from '../../../../public/aspirin.png';
import xray from '../../../../public/xray.png';
import { CiCoffeeCup } from 'react-icons/ci';
// import { Step3Design, DesginCiCoffeeCup } from '../../../style/SurveyStyle';
import GoogleSearch from '../../../common/GoogleSearch';
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
const Step3Design = styled.div`
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
    width: 32vw;
    background-color: rgba(0, 0, 0, 0);
    margin-top: 30px;
    border: none;
    margin-left: -6px;
  }
  .gsc-control-cse {
    display: none;
  }
  .gsc-input {
    height: 75px !important;
    border-radius: 20px;
  }
  button {
    &.gsc-search-button {
      display: none;
    }
  }
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
const Choice = styled.div`
  font-size: 23px;
  margin-top: 30px;
`;

const Choice2 = styled.div`
  font-size: 23px;
  margin-top: 10px;
`;

const Etc = styled.div`
  font-size: 17px;
  margin-top: 40px;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const Nothing = styled.span`
  margin: 0 auto;
`;

const Button = styled.button`
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

    &:focus {
      background-color: var(--gray-500);
    }
  }

  &.gsc-search-button {
    display: none;
  }
`;

const Input = styled.input`
  width: 30vw;
  height: 75px;
  margin-top: 30px;
  font-size: 18px;
  border-radius: 20px;
  border: none;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0 px10 px15 px-3 px,
    rgba(0, 0, 0, 0.05) 0 px4 px6 px-2 px;
`;

const Goorback = styled.div`
  width: 30vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DesginCiCoffeeCup = styled(CiCoffeeCup)`
  margin-right: 10px;
`;
const Step3 = ({ allergy, prevSteps, nextSteps, changeInput, submitForm }) => {
  const [animate, setAnimate] = useState('up');
  const [selectedButton, setSelectedButton] = useState(null);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
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
  };
  const handleInputBlur = () => {
    changeInput({ target: { name: 'allergy', value: userInput } });
  };
  const handleNextClick = () => {
    setAnimate('down');
    setTimeout(() => {
      submitForm();
      nextSteps();
    }, 1000);
  };

  return (
    <Step3Design>
      <Choice>해당하는 약물 알러지를 선택해주세요 </Choice>
      <Choice2>의약품검색 페이지에서 알러지정보가 반영됩니다!</Choice2>
      <AnimateContent animate={animate}>
        <Button
          className="caffeine"
          value="CAFFEINE"
          onClick={handleAllergyClick}
          selected={allergy === 'CAFFEINE'}
        >
          <DesginCiCoffeeCup /> 카페인
        </Button>
        <Button
          className="aspirin"
          value="PAINKILLER"
          onClick={handleAllergyClick}
          selected={allergy === 'PAINKILLER'}
        >
          <Img className="aspirin" src={aspirin} alt="aspirin" />
          아스피린(소염진통제)
        </Button>
        <Button
          className="penicillin "
          value="ANTIBIOTIC"
          onClick={handleAllergyClick}
          selected={allergy === 'ANTIBIOTIC'}
        >
          <Img className="penicillin" src={penicillin} alt="penicillin" />
          페니실린(항생제)
        </Button>
        <Button
          className="anticonvulsants "
          value="ANTICONVULSANT"
          onClick={handleAllergyClick}
          selected={allergy === 'ANTICONVULSANT'}
        >
          <Img
            className="anticonvulsants"
            src={anticonvulsants}
            alt="anticonvulsants"
          />
          항경련제
        </Button>
        {/* <button className="xray" value="CONTRAST" onClick={handleAllergyClick}>
              <img className="xray" src={xray} alt="xray"/>
              조영제 
              </button> */}
        {/* <input type="text" value={userInput} onChange={handleInputChange} onBlur={handleInputBlur} placeholder="이외 알러지 입력 ex) 유당"/> */}
        <GoogleSearch changeInput={changeInput} />
        <Etc>이외 알러지 입력 ex: 유당</Etc>
        <Button
          className="nonono"
          value="NONE"
          onClick={handleAllergyClick}
          selected={allergy === 'NONE'}
        >
          <Nothing>없음</Nothing>
        </Button>
        <Goorback>
          <Button className="previous" onClick={prevSteps}>
            ◀︎ 이전
          </Button>
          <Button className="next" onClick={handleNextClick}>
            다음 ▶︎
          </Button>
        </Goorback>
      </AnimateContent>
    </Step3Design>
  );
};

export default Step3;
