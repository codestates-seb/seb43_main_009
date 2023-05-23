import React from 'react';
import doctor from '../../../../public/doctor.jpg';
import { Step1Design } from '../../../style/SurveyStyle';

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
