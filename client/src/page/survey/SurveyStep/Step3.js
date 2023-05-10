import React from 'react';
import styled from 'styled-components';
import { CiCoffeeCup } from 'react-icons/ci';
import penicillin from '../../../../public/penicillin.png';
import anticonvulsants from '../../../../public/anticonvulsants.png';
import aspirin from '../../../../public/aspirin.png';
import xray from '../../../../public/xray.png';

const DesginCiCoffeeCup = styled(CiCoffeeCup)`
  margin-left: 33%;
  margin-right: 10px;
`;

const Step3Design = styled.div`
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
    background-color: #f9e6e6;
    font-size: 35px;
    display: flex;
    align-items: center;
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

const Step3 = ({ allergy, prevSteps, nextSteps, changeInput }) => {
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
      <div className="choice">알레르기를 선택해주세요! </div>
      <button
        className={allergy === menu.caffeine ? 'selected' : ''}
        value="카페인"
        onClick={handleAllergyClick}
      >
        <DesginCiCoffeeCup />
        카페인
      </button>
      <button
        className={allergy === menu.aspirin ? 'selected' : ''}
        value="아스피린"
        onClick={handleAllergyClick}
      >
        <img className="aspirin" src={aspirin} alt="aspirin" />
        아스피린(소염진통제)
      </button>
      <button
        className={allergy === menu.penicillin ? 'selected' : ''}
        value="페니실린"
        onClick={handleAllergyClick}
      >
        <img className="penicillin" src={penicillin} alt="penicillin" />
        페니실린(항생제)
      </button>
      <button
        className={allergy === menu.anticonvulsants ? 'selected' : ''}
        value="항경련제"
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
        value="조영제"
        onClick={handleAllergyClick}
      >
        <img className="xray" src={xray} alt="xray" />
        조영제
      </button>
      <button
        className={allergy === menu.nothing ? 'selected' : ''}
        value="없음"
        onClick={handleAllergyClick}
      >
        <span className="nothing">없음</span>
      </button>
      <div className="goorback">
        <div className="previous" onClick={prevSteps}>
          ◀︎ 이전
        </div>
        <div className="next" onClick={nextSteps}>
          다음 ▶︎
        </div>
      </div>
    </Step3Design>
  );
};

export default Step3;
