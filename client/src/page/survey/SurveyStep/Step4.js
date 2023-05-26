import React, { useEffect } from 'react';
import logo from '../../../../public/logo.png';
import { getUserInfo } from '../../../utils/UserInfo';
import { choosenutrients } from './Nutrients';
import {
  SurveyResultDesign,
  Li,
  Logo,
  Whoresult,
  Span,
  Explain,
  Danger,
  Caution,
  Expliandetail,
  Helppill,
  Step4Recommend,
  RecommendContent,
  Nutrients,
  Efficacy,
  ButtonWrapper,
  Buynow,
  Retry,
} from '../../../style/SurveyStyle';

const Step4 = ({ form, resetSteps }) => {
  // 소화 , 피부, 눈 , 면역, 피로
  const nutrients = choosenutrients(form);
  const userInfo = getUserInfo();
  const namePart = userInfo.username.split('@')[0];
  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.remove('gsc-overflow-hidden');
    window.scrollTo(0, 0);
  }, []);
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

          <Step4Recommend>
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
          </Step4Recommend>
        </div>
      )}
    </SurveyResultDesign>
  );
};

export default Step4;
