import React from "react";
import styled from "styled-components";
import dryskin from "../../../../public/dryskin.png";
import fatigue from "../../../../public/fatigue.png";
import { GiStomach } from "react-icons/gi";
import { ImEye } from "react-icons/im";
import { BsShieldPlus } from "react-icons/bs";

const StyledGistomach = styled(GiStomach)`
  margin-left: 37%;
  margin-right: 10px;
`;

const StyledImEye = styled(ImEye)`
  margin-left: 37%;
  margin-right: 10px;
`;

const StyledBsShieldPlus = styled(BsShieldPlus)`
  margin-left: 37%;
  margin-right: 10px;
`;

const Step2Design = styled.div`
  font-family: "Noto Sans KR", sans-serif;
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

const Step2 = ({ disease, changeInput, nextSteps }) => {
  const menu = {
    stomach: "소화",
    skin: "피부",
    eye: "눈",
    sheild: "면역",
    fatiuge: "피로",
    nothing: "없음",
  };

  const handleDiseaseClick = (e) => {
    changeInput({ target: { name: "disease", value: e.target.value } });
  };

  return (
    <Step2Design>
      <div className="choice">불편하시거나 걱정되시는 곳을 선택해 주세요! </div>
      <button
        className={disease === menu.stomach ? "selected" : ""}
        value="소화"
        onClick={handleDiseaseClick}
      >
        <StyledGistomach /> 소화, 장
      </button>
      <button
        className={disease === menu.skin ? "selected" : ""}
        value="피부"
        onClick={handleDiseaseClick}
      >
        <img src={dryskin} alt="dryskin" />
        피부
      </button>
      <button
        className={disease === menu.eye ? "selected" : ""}
        value="눈"
        onClick={handleDiseaseClick}
      >
        <StyledImEye /> 눈
      </button>
      <button
        className={disease === menu.sheild ? "selected" : ""}
        value="면역"
        onClick={handleDiseaseClick}
      >
        <StyledBsShieldPlus />
        면역
      </button>
      <button
        className={disease === menu.fatiuge ? "selected" : ""}
        value="피로"
        onClick={handleDiseaseClick}
      >
        <img src={fatigue} alt="fatiuge" /> 피로
      </button>
      <button
        className={disease === menu.nothing ? "selected" : ""}
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
