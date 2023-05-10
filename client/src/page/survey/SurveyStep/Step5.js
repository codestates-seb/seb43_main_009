import React from 'react';
import styled from 'styled-components';
import high from '../../../../public/high.jpg';
import logo from '../../../../public/logo.png';

const SurveyResultDesign = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #f1f2f3;
  font-size: 22px;

  img {
    width: 150px;
    height: 50px;
  }
  .whoresult {
    border-bottom: 1px solid black;
    margin-top: 10vh;
  }

  div span {
    margin-left: 5vw;
  }
  .explain {
    margin-top: 7vh;
    margin-left: 5vw;
  }
  .explaindetail {
    width: 80vw;
    margin-top: 5vh;
  }
  .helppill {
    margin-top: 5vh;
    margin-left: 1vw;
  }

  .recommend {
    background-color: #f5d6d6;
    margin-top: 5vh;
    margin-left: 5vw;
    width: 80vw;
    height: 50vh;
    flex-wrap: wrap;
  }
  .efficacy {
    margin-top: 5vh;
  }

  .buynow {
    margin-left: 2vw;
    margin-top: 20px;
  }
  .retry {
    background-color: #f05858;
    border: none;
    margin-left: 5vw;
    width: 160px;
    height: 70px;
    font-size: 20px;
    color: white;
  }
  .high {
  }
`;

const Step5 = (/*{form}*/) => {
  // 소화 , 피부, 눈 , 면역, 피로

  let form = {
    disease: '소화',
  };

  let pill = ['유산균', '콜라겐', '비타민A', '진세노사이드', '비타민B'];
  let resultPill = '';
  if (form.disease === '소화') {
    resultPill = pill[0];
  } else if (form.disease === '피부') {
    resultPill = pill[1];
  } else if (form.disease === '눈') {
    resultPill = pill[2];
  } else if (form.disease === '면역') {
    resultPill = pill[3];
  } else if (form.disease === '피로') {
    resultPill = pill[4];
  }
  return (
    <SurveyResultDesign>
      <div className="whoresult">
        <span>name님의 필요영양성분</span>
      </div>

      <div className="explain">
        <div>옥타코사놀은 면역력 증진에 도움을 줄 수 있습니다.</div>
        <div className="explaindetail">
          옥타코사놀은 생리활성물질로 현미, 사탕수수, 사과/포도의 껍질에
          함유되어 있으며 철새의 장거리 이동하는 에너지의 근원이라는 연구도
          있습니다. 옥타코사놀을 매일 7mg이상 섭취하는 경우에 식약처에서는
          지구력 증진에 도움을 줄 수 있다고 인정하고 있습니다.
        </div>
      </div>
      <div className="recommend">
        <div className="helppill">
          <img src={logo} alt="logo" />
          에서 추천하는 옥타코사놀 영양제
        </div>
        <ul className="efficacy">
          <li>국내산 6년근 홍삼 사용</li>
          <li>면역력 증진을 위한 옥타코사놀</li>
          <li>천연 비타민 E의 황산화효과</li>
        </ul>
        <a className="buynow" href="https://www.naver.com">
          구매하러 가기
        </a>
        <button className="retry">맞춤검사 다시하기</button>
        <img className="high" src={high} alt="high" />
      </div>
    </SurveyResultDesign>
  );
};

export default Step5;
