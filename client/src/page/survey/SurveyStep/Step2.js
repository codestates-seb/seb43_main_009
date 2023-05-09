import React from 'react';

const Step2 = ({ disease, changeInput, nextSteps }) => {
  const handleDiseaseClick = (e) => {
    changeInput({ target: { name: "disease", value: e.target.value } });
  };

  return (
    <>
      <p>
        <label>불편한곳 </label> :
        <button value="소화" onClick={handleDiseaseClick}>
          소화, 장
        </button>
        <button value="피부" onClick={handleDiseaseClick}>
          피부
        </button>
        <button value="눈" onClick={handleDiseaseClick}>
          눈
        </button>
        <button value="면역" onClick={handleDiseaseClick}>
          면역
        </button>
        <button value="피로" onClick={handleDiseaseClick}>
          피로
        </button>
      </p>
      <p>
        <button onClick={nextSteps}>다음</button>
      </p>
    </>
  );
};

export default Step2;