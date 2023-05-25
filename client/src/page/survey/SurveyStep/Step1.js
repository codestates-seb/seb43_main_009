import React, { useEffect, useState } from 'react';
import doctor from '../../../../public/doctor.jpg';
import { getUserInfo } from '../../../utils/UserInfo';
import { useNavigate } from 'react-router-dom';
import {
  AnimateContent,
  Card,
  Doctor,
  Step1Recommend,
  Comment,
  Start,
  Step1Design,
} from '../../../style/SurveyStyle';

const Step1 = ({ nextSteps }) => {
  const [animate, setAnimate] = useState('up');
  const Navigate = useNavigate();
  const token = getUserInfo();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleStartClick = () => {
    if (token) {
      setAnimate('down');
      setTimeout(() => {
        nextSteps();
      }, 1000);
    } else {
      alert('로그인 후 사용가능합니다.');
      Navigate('/login');
    }
  };

  return (
    <Step1Design>
      <AnimateContent animate={animate}>
        <Card>
          <Doctor src={doctor} alt="doctor"></Doctor>
          <div>
            <Step1Recommend>맞춤추천</Step1Recommend>
            <Comment>
              올바른 영양제 섭취를 위해 <br />
              개인별 필요 성분과 제품을 알려드려요
            </Comment>
            <Start onClick={handleStartClick}>시작하기</Start>
          </div>
        </Card>
      </AnimateContent>
    </Step1Design>
  );
};

export default Step1;
