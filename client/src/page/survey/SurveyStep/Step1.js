import React, { useState } from 'react';
import doctor from '../../../../public/doctor.jpg';
import { getUserInfo } from '../../../utils/UserInfo';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100px);
    opacity: 0;
  }
`;
const AnimateContent = styled.div`
  ${({ animate }) =>
    animate === 'up'
      ? css`
          animation: ${slideUp} 1s;
        `
      : animate === 'down'
      ? css`
          animation: ${slideDown} 1s;
        `
      : ''}
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 400px;
  height: 560px;
  min-height: 400px;
  margin-top: 7%;
  background-color: white;
  font-size: 25px;
  border-radius: 15px;
  @media screen and (max-height: 800px) {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 700;
    width: 300px;
    height: 360px;
  }

  transition: all 0.2s;
  box-shadow: 12px 12px 2px 1px rgba(80, 80, 80, 0.2);
  &:hover {
    box-shadow: -12px 12px 2px -1px rgba(80, 80, 80, 0.2);
  }

  box-shadow: 0 5px 5px -5px black;
`;

const Doctor = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 15px 15px 0 0 / 15px 15px 0 0;
`;

const Recommend = styled.div`
  margin-top: 20px;
  font-weight: bold;
`;

const Comment = styled.div`
  margin-top: 20px;
`;

const Start = styled.button`
  margin: 20px;
  width: 120px;
  height: 50px;
  border-radius: 15px;
  border: none;
  background-color: #f05858;
  font-size: 25px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #d32f2f;
  }
  @media screen and (max-height: 700px) {
    font-size: 16px;
  }
`;

const Step1Design = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 85vh;
  background-color: #f4f4f4;
`;

const Step1 = ({ nextSteps }) => {
  const [animate, setAnimate] = useState('up');
  const Navigate = useNavigate();
  const token = getUserInfo();

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
            <Recommend>맞춤추천</Recommend>
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
