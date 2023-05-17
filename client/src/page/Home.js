import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import Layout from '../common/Layout';
import OAuthLogin from './user/OAuthLogin';
import { Navigate, useNavigate } from 'react-router-dom';

import {
  SServiceInfoLayout,
  SServiceInfoSection,
  SIntroduceImg1,
  SIntroduceImg2,
  SIntroduceImg3,
  STextIntroduceSection,
  STextTitle1,
  STextSub1,
  STextTitle2,
  STextSub2,
} from '../style/ServiceInfoStyle';
import {
  SBackgroundLayout,
  SGradiant,
  STextInfoSection,
} from '../style/GreetingInfo';

const Home = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleButtonClick = () => {
    Navigate('/survey');
  };
  return (
    <>
      <OAuthLogin onLogin={() => dispatch(login())} />
      <Layout>
        <SBackgroundLayout>
          <SGradiant />
          <STextInfoSection>
            <h1>약 검색은 `도와조약`에서!</h1>
            <h2>
              🧚‍♂️ <span>맞춤추천</span>으로 나에게 맞는 <span>영양제</span>를
              알아보세요
            </h2>
            {/* <h2>커뮤니티에 증상을 공유하고 답변을 받아보세요</h2> */}
            <button onClick={handleButtonClick}>💁🏻‍♀️맞춤추천 받으러가기!</button>
          </STextInfoSection>
        </SBackgroundLayout>
        <SServiceInfoLayout>
          <SServiceInfoSection>
            <SIntroduceImg1 />
            <STextIntroduceSection>
              <STextTitle1>약의 성분 확인</STextTitle1>
              <STextSub1>
                가지고 있는 약이 알러지 성분을
                <br /> 가지고 있지는 않은지 확인해보세요.
              </STextSub1>
            </STextIntroduceSection>
          </SServiceInfoSection>
          <SServiceInfoSection>
            <STextIntroduceSection>
              <STextTitle2>영양제 맞춤 추천</STextTitle2>
              <STextSub2>
                지금 자신이 부족한 영양소가 뭔지
                <br /> 그에 맞는 영양제는 무엇인지 확인해보세요
              </STextSub2>
            </STextIntroduceSection>
            <SIntroduceImg2 />
          </SServiceInfoSection>
          <SServiceInfoSection>
            <SIntroduceImg3 />
            <STextIntroduceSection>
              <STextTitle1>다른 사람과 정보 공유</STextTitle1>
              <STextSub1>
                다른 사람들은 어떤 약을 사용하는지
                <br /> 본인은 어떤 약을 사용하는지 정보를 공유해보세요!
              </STextSub1>
            </STextIntroduceSection>
          </SServiceInfoSection>
        </SServiceInfoLayout>
      </Layout>
    </>
  );
};

export default Home;
