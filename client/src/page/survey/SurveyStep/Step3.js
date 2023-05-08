import React from 'react';

const Step3 = ({ disease,  allergy, nextSteps, prevSteps}) => {
    return (
        <>
        <p>
            <label>병  </label> :
            <span  name="disease">{disease}</span>
        </p>

        <p>
            <label>직업  </label> :
            <span  name="allergy">{allergy}</span>
        </p>

        <p>
        <button onClick={prevSteps}>이전</button>
        <button onClick={nextSteps}>다음</button>
        </p>
        
    </>
    );
};

export default Step3;