import React from 'react';
import styled from 'styled-components';
import doctor from '../../../../public/doctor.jpg';

const Step1Design = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #f1f2f3;

  .stepone {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 40%;
    height: 80%;
    margin-top: 70px;
    background-color: #fffbfb;
    font-size: 30px;
    border-radius: 15px;
    .doctor {
      width: 100%;
      height: 60%;
      border-radius: 15px 15px 0 0 / 15px 15px 0 0;
    }
    .recommend {
      margin-top: 10px;
      font-weight: bold;
    }
    .comment {
      margin-top: 10px;
    }
    .start {
      margin-top: 15px;
      width: 120px;
      height: 50px;
      border-radius: 15px;
      border: none;
      background-color: #f05858;
      font-size: 25px;
      color: white;
      cursor: pointer;
      &:hover {
        background-color: #d32f2f;
      }
    }
  }
`;

const Step1 = ({ disease, changeInput, nextSteps }) => {
  const handleDiseaseClick = (e) => {
    changeInput({ target: { name: 'disease', value: e.target.value } });
  };

  return (
    <Step1Design>
      <div className="stepone">
        <img className="doctor" src={doctor} alt="doctor"></img>
        <div>
          <div className="recommend">맞춤추천</div>
          <div className="comment">
            올바른 영양제 섭취를 위해 <br />
            개인별 필요 성분과 제품을 알려드려요
          </div>
          <button className="start" onClick={nextSteps}>
            시작하기
          </button>
        </div>
      </div>
    </Step1Design>
  );
};

export default Step1;
