import React from 'react';

const Step3 = ({allergy, prevSteps, nextSteps, changeInput}) => {
    const handleAllergyClick = (e) => {
        changeInput({ target: { name: "allergy", value: e.target.value } });
      };
    return (
        <>
            <p>
                <label>알레르기  </label> :
                <button value="카페인" onClick={handleAllergyClick}>
                카페인
                </button>
                <button value="아스피린" onClick={handleAllergyClick}>
                아스피린
                </button>
                <button value="항생제" onClick={handleAllergyClick}>
                항생제
                </button>
                <button value="소염진통제" onClick={handleAllergyClick}>
                소염진통제
                </button>
                <button value="ACE길항제" onClick={handleAllergyClick}>
                ACE길항제
                </button>
                <button value="잔틴산화억제제" onClick={handleAllergyClick}>
                잔틴산화억제제
                </button>
                <button value="유당" onClick={handleAllergyClick}>
                유당
                </button>
            </p>

            <p>
            <button onClick={prevSteps}>이전</button>
            <button onClick={nextSteps}>다음</button>
            </p>
            
        </>
    );
};

export default Step3;