import React from 'react';

const Step5 = ({form}) => {
    // 소화 , 피부, 눈 , 면역, 피로
    let pill = ["유산균","콜라겐","비타민A","진세노사이드","비타민B"];
    let resultPill = "";
    if(form.disease === "소화"){
        resultPill = pill[0];
    }else if (form.disease === "피부"){
        resultPill = pill[1];
    }else if (form.disease === "눈"){
        resultPill = pill[2];
    }else if (form.disease === "면역"){
        resultPill = pill[3];
    }else if (form.disease === "피로"){
        resultPill = pill[4];
    }
    return (
    <>
        <div>당신의 병은 {form.disease} 입니다.</div>
        <div>당신을 위한 약은 {resultPill} 입니다.</div>

        
    </>
    );
};

export default Step5;