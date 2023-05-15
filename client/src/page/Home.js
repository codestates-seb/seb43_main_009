import React from 'react';
import Layout from '../common/Layout';
import KakaoLogin from './user/KakaoLogin';

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
  return (
    <>
      <KakaoLogin />
      <Layout>
        <SBackgroundLayout>
          <SGradiant />
          <STextInfoSection>
            <h1>건강 고민은 다나아에서</h1>
            <h2>
              건강 고민, 다나아 커뮤니티에 남기고 의학 전문가의 답변을
              받아보세요!
            </h2>
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
