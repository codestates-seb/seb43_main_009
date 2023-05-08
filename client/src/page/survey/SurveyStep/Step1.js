import React from 'react';

const Step1 = ({ disease, changeInput, nextSteps }) => {
  const handleDiseaseClick = (e) => {
    changeInput({ target: { name: "disease", value: e.target.value } });
  };

  return (
    <p>
    <button onClick={nextSteps}>시작하기</button>
    </p>
  );
};

export default Step1;