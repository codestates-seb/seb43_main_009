import React, { useEffect, useState } from 'react';
import Step1 from './SurveyStep/Step1';
import Step2 from './SurveyStep/Step2';
import Step3 from './SurveyStep/Step3';
import Step4 from './SurveyStep/Step4';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../common/Layout';
import { getUserInfo } from '../../utils/UserInfo';

const Survey = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    disease: '',
    allergy: '',
  });

  const userInfo = getUserInfo();

  const { disease, allergy } = form;

  const submitForm = async () => {
    try {
      const response = await axios.post(
        'https://server.dowajoyak.shop/surveys',
        {
          disease,
          allergy,
          userId: userInfo.userId,
        },
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
  const resetSteps = () => {
    setStep(step - 3);
  };

  console.log(form);

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
            submitForm={submitForm}
            form={form}
          />
        )}
        {step === 4 && <Step4 resetSteps={resetSteps} form={form} />}
      </div>
    </Layout>
  );
};

export default Survey;
