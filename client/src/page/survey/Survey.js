import React, { useEffect, useState } from 'react';
import Step1 from './SurveyStep/Step1';
import Step2 from './SurveyStep/Step2';
import Step3 from './SurveyStep/Step3';
import Step4 from './SurveyStep/Step4';
import Step5 from './SurveyStep/Step5';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../utils/cookies';
import axios from 'axios';
import Layout from '../../common/Layout';

const Survey = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    disease: '',
    allergy: '',
  });

  const { disease, allergy } = form;

  const submitForm = async () => {
    try {
      const response = await axios.post(
        'http://ec2-3-34-134-67.ap-northeast-2.compute.amazonaws.com:8080/surveys',
        form,
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const changeInput = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const nextSteps = () => {
    setStep(step + 1);
  };
  const prevSteps = () => {
    setStep(step - 1);
  };

  console.log(form);

  // 로그인 안했으면 회원가입 페이지로 보냄
  // useEffect(() => {
  //     if (getCookie("token") === "null") {
  //       navigate("/signup");
  //     }
  //   });

  return (
    <Layout>
      <div className="wrap">
        {step === 1 && <Step1 nextSteps={nextSteps} />}
        {step === 2 && (
          <Step2
            disease={disease}
            changeInput={changeInput}
            prevSteps={prevSteps}
            nextSteps={nextSteps}
          />
        )}
        {step === 3 && (
          <Step3
            allergy={allergy}
            changeInput={changeInput}
            prevSteps={prevSteps}
            nextSteps={nextSteps}
          />
        )}
        {step === 4 && (
          <Step4
            disease={disease}
            allergy={allergy}
            changeInput={changeInput}
            prevSteps={prevSteps}
            nextSteps={nextSteps}
            submitForm={submitForm}
            form={form}
          />
        )}
        {step === 5 && <Step5 form={form} />}
      </div>
    </Layout>
  );
};

export default Survey;
