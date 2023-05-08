
import React, { useState } from 'react'; // useState import 
import Step1 from './SurveyStep/Step1';  
import Step2 from './SurveyStep/Step2';
import Step3 from './SurveyStep/Step3';
import Step4 from './SurveyStep/Step4'; //스텝별로 만들어둔 컴포넌트 import
import Layout from "../common/Layout";

const Survey = () => {
    const[step, setStep] = useState(1) //페이지 전환을 위한 useState
    const[form, setForm] = useState(
        {
            disease : '',
            allergy : '',
        }
    ) //사용자로부터 입력받을 값들 초기화(default값 설정)
    
    const {disease, allergy} = form
    //JSX내에서 간단하게 사용하기 위해 비구조할당

    const changeInput = (e)=>{ 		//input란에 이벤트(e)가 생길경우 
        const {value, name} = e.target //그 value값을 해당 name(속성값)에 받아서
        setForm({
            ...form, 			//기존 데이터는 그대로 유지하는 스프래드연산spread
            [name] : value 		// 입력 받은 값으로 저장해라!
        })
    }

    const nextSteps =()=>{
        setStep(step+1)			//다음 페이지로
    } 
    const prevSteps =()=>{
        setStep(step-1)			//이전 페이지로
    } 

    console.log(form);

    return (
      <Layout>
        <div className="wrap">
            {
                step === 1 &&
                <Step1 
                
                disease={disease}
                changeInput={changeInput}
                prevSteps={prevSteps}
                nextSteps={nextSteps}
                />
            }{
                step ===2 &&
                <Step2
                allergy = {allergy}
                changeInput={changeInput}
                prevSteps={prevSteps}
                nextSteps={nextSteps}
                />
            }{
                step===3 &&
                <Step3
                disease={disease}
                allergy = {allergy}
                changeInput={changeInput}
                prevSteps={prevSteps}
                nextSteps={nextSteps}
                />
            }{
                step ===4 &&
                <Step4
                form={form}
                />
            }
            
        </div>
      </Layout>

    );
};

export default Survey;