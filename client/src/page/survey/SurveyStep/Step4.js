import React from 'react';
import high from '../../../../public/high.jpg';
import logo from '../../../../public/logo.png';
import { getUserInfo } from '../../../utils/UserInfo';
import { choosenutrients } from './Nutrients';
// import { SurveyResultDesign } from '../../../style/SurveyStyle';
import styled from 'styled-components';

const SurveyResultDesign = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 1100px;
  background-color: #f4f4f4;
  font-size: 22px;
`;

const Li = styled.li`
  margin-bottom: 3 px;
`;

const Logo = styled.img`
  width: 100px;
`;

const Whoresult = styled.div`
  border-bottom: 1px solid black;
  margin-top: 10vh;
  padding-bottom: 10px;
  font-size: 30px;
  font-weight: 700;
  font-family: 'MaplestoryOTFBold';
`;

const Span = styled.span`
  margin-left: 10vw;
`;

const Explain = styled.div`
  margin-top: 5vh;
  margin-left: 10vw;
`;

const Danger = styled.div`
  margin-top: 7vh;
  margin-left: 10vw;
  color: red;
  width: 80vw;
`;

const Caution = styled.span`
  color: black;
  margin-top: 0;
  margin-left: 10px;
`;

const Expliandetail = styled.div`
  width: 80vw;
  margin-top: 5vh;
`;

const Helppill = styled.div`
  margin-top: 5vh;
  margin-left: 4vw;
`;

const Recommend = styled.div`
  background-color: #f5d6d6;
  margin-top: 5vh;
  margin-left: 10vw;
  margin-bottom: 5vh;
  border-radius: 14px;
  width: 80vw;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const RecommendContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nutrients = styled.img`
  margin-left: auto;
  margin-top: 30px;
  margin-right: 3vw;
  height: 300px;
  width: 300px;
`;

const Efficacy = styled.div`
  margin-top: 5vh;
  margin-left: 20px;
`;

const ButtonWrapper = styled.div`
  margin-left: 45px;
  margin-top: 3vh;
`;

const Buynow = styled.button`
  background-color: #d4f8ff;
  margin-bottom: 30px;
  width: 160px;
  height: 70px;
  font-size: 20px;
  border: none;
  border-radius: 14px;
  font-weight: 700;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    width: 100px;
    height: 30px;
  }
`;

const Retry = styled.button`
  background-color: #f05858;
  border-radius: 14px;
  margin-left: 2vw;
  width: 160px;
  height: 70px;
  border: none;
  font-size: 20px;
  color: white;
  font-weight: 700;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    width: 100px;
    height: 30px;
  }
`;
const Step4 = ({ form, resetSteps }) => {
  // 소화 , 피부, 눈 , 면역, 피로

  const nutrients = choosenutrients(form);
  const userInfo = getUserInfo();
  const namePart = userInfo.username.split('@')[0];
  return (
    <SurveyResultDesign>
      {nutrients && (
        <div className="result">
          <Whoresult>
            <Span>{namePart}님의 필요영양성분</Span>
          </Whoresult>
          <Explain>
            <div>{nutrients.help}</div>
            <Expliandetail>{nutrients.explain}</Expliandetail>
          </Explain>

          <Danger>
            주의사항:<Caution>{nutrients.caution}</Caution>
          </Danger>

          <Recommend>
            <RecommendContent>
              <Helppill>
                <Logo src={logo} alt="logo" />
                에서 추천하는 {nutrients.survey} 영양제
              </Helppill>
              <Efficacy>
                <Li>{nutrients.listone}</Li>
                <Li>{nutrients.listtwo}</Li>
                <Li>{nutrients.listthree}</Li>
              </Efficacy>
              <ButtonWrapper>
                <Buynow onClick={() => window.open(nutrients.link, '_blank')}>
                  바로구매
                </Buynow>
                <Retry onClick={resetSteps}>맞춤검사 다시하기</Retry>
              </ButtonWrapper>
            </RecommendContent>
            <Nutrients src={nutrients.picture} alt="nutrients" />
          </Recommend>
        </div>
      )}
    </SurveyResultDesign>
  );
};

export default Step4;
