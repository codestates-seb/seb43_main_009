import React from 'react';

const Step4 = ({ disease,  allergy, nextSteps, prevSteps, form, submitForm}) => {
    console.log(form);
    return (
    <>
        <p>
            <label>병</label> :
            <span  name="disease">{disease}</span>
        </p>

        <p>
            <label>직업</label> :
            <span  name="allergy">{allergy}</span>
        </p>

        <p>
        <button onClick={prevSteps}>이전</button>
        <button onClick={submitForm}>제출</button>
        </p>
        
    </>
    );
};

export default Step4;