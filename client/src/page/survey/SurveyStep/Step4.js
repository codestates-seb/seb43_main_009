import React from 'react';
import high from '../../../../public/high.jpg';
import logo from '../../../../public/logo.png';
import { SurveyResultDesign } from '../../../style/SurveyStyle';
import { getUserInfo } from '../../../utils/UserInfo';
import { choosenutrients } from './Nutrients';

const Step4 = ({ form, resetSteps }) => {
  // 소화 , 피부, 눈 , 면역, 피로
  console.log(form);
  console.log(form.disease);

  const nutrients = choosenutrients(form);
  const userInfo = getUserInfo();
  const namePart = userInfo.username.split('@')[0];
  return (
    <SurveyResultDesign>
      {nutrients && (
        <div className="result">
          <div className="whoresult">
            <span>{namePart}님의 필요영양성분</span>
          </div>

          <div className="explain">
            <div>{nutrients.help}</div>
            <div className="explaindetail">{nutrients.explain}</div>
          </div>

          <div className="danger">
            주의사항:<span className="caution">{nutrients.caution}</span>
          </div>

          <div className="recommend">
            <div className="recommend-content">
              <div className="helppill">
                <img className="logo" src={logo} alt="logo" />
                에서 추천하는 {nutrients.survey} 영양제
              </div>
              <ul className="efficacy">
                <li>{nutrients.listone}</li>
                <li>{nutrients.listtwo}</li>
                <li>{nutrients.listthree}</li>
              </ul>
              <div>
                <a className="buynow" href={nutrients.link}>
                  구매하러 가기
                </a>
                <button className="retry" onClick={resetSteps}>
                  맞춤검사 다시하기
                </button>
              </div>
            </div>
            <img
              className="nutrients"
              src={nutrients.picture}
              alt="nutrients"
            />
          </div>
        </div>
      )}
    </SurveyResultDesign>
  );
};

export default Step4;
