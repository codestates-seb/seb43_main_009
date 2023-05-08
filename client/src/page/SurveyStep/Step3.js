import React from 'react';

const Step3 = ({name, age, addr, tel, job, email, sex, interest, nextSteps, prevSteps}) => {
    return (
        <>
        <p>
            <label>이름  </label> :
            <span name="name">{name}</span>
        </p>
        <p>
            <label>나이  </label> :
            <span  name="age">{age}</span>
        </p>
        <p>
            <label>주소  </label> :
            <span  name="addr">{addr}</span>
        </p>
        <p>
            <label>연락처  </label> :
            <span  name="tel">{tel}</span>
        </p>
        <p>
            <label>직업  </label> :
            <span  name="job">{job}</span>
        </p>
        <p>
            <label>이메일  </label> :
            <span name="email">{email}</span>
        </p>
        <p>
            <label>성별  </label> :
            <span  name="sex">{sex}</span>
        </p>
        <p>
            <label>관심분야  </label> :
            <span name="interest">{interest}</span>
        </p>
        <p>
        <button onClick={prevSteps}>이전</button>
        <button onClick={nextSteps}>다음</button>
        </p>
        
    </>
    );
};

export default Step3;