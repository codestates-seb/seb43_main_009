import React from "react";
import Layout from "../common/Layout";
import styled from "styled-components";
import myImage from "../../public/logo.png";
import my from "../../public/high.jpg";
import {
  SServiceInfoLayout,
  SServiceInfoSection,
  SIntroduceImg1,
  SIntroduceImg2,
  SIntroduceImg3,
  STextIntroduceSection,
  STextTitle,
  STextSub,
} from "../style/ServiceInfoStyle";
const ContentBox = styled.div`
  .img {
    width: 15rem;
    height: 5rem;
  }
  .row {
    display: flex; /* 플렉스 박스로 설정 */
    flex-wrap: wrap; /* 넘칠 경우 자동 줄바꿈 */
    margin: 0 0px; /* 가장자리 여백 제거 */
  }

  .col-6 {
    height: 100%;
    width: 50%;
    padding: 0 0px; /* 가장자리 여백 */
  }
`;

const Home = () => {
  return (
    <Layout>
      <SServiceInfoLayout>
        <SServiceInfoSection>
          <SIntroduceImg1 />
          <STextIntroduceSection>
            <STextTitle>약의 성분 확인</STextTitle>
            <STextSub>
              가지고 있는 약이 알러지 성분을
              <br /> 가지고 있지는 않은지 확인해보세요.
            </STextSub>
          </STextIntroduceSection>
        </SServiceInfoSection>
        <SServiceInfoSection>
          <STextIntroduceSection>
            <STextTitle>영양제 맞춤 추천</STextTitle>
            <STextSub>
              지금 자신이 부족한 영양소가 뭔지
              <br /> 그에 맞는 영양제는 무엇인지 확인해보세요
            </STextSub>
          </STextIntroduceSection>
          <SIntroduceImg2 />
        </SServiceInfoSection>
        <SServiceInfoSection>
          <SIntroduceImg3 />
          <STextIntroduceSection>
            <STextTitle>다른 사람과 정보 공유</STextTitle>
            <STextSub>
              다른 사람들은 어떤 약을 사용하는지
              <br /> 본인은 어떤 약을 사용하는지 정보를 공유해보세요!
            </STextSub>
          </STextIntroduceSection>
        </SServiceInfoSection>
      </SServiceInfoLayout>
    </Layout>
  );
};

export default Home;
