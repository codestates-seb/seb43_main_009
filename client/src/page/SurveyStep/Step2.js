import React from 'react';

const Step2 = ({job, email, sex, interest, prevSteps, nextSteps, changeInput}) => {
    return (
        <>
            <p>
                <label>직업  </label> :
                <input type="text" value={job} name="job" onChange={changeInput}/>
            </p>
            <p>
                <label>이메일  </label> :
                <input type="text" value={email} name="email" onChange={changeInput}/>
            </p>
            <p>
                <label>성별  </label> :
                <input type="text" value={sex} name="sex" onChange={changeInput}/>
            </p>
            <p>
                <label>관심사  </label> :
                <input type="text" value={interest} name="interest" onChange={changeInput}/>
            </p>
            <p>
            <button onClick={prevSteps}>이전</button>
            <button onClick={nextSteps}>다음</button>
            </p>
            
        </>
    );
};

export default Step2;