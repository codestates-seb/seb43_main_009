import Layout from '../../common/Layout';
import React, { useState } from 'react';
import { StyledInput } from '../../style/Search';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SetParams, GetSearch } from '../../redux/SearchSlice';
import {
  SBackgroundLayout,
  SGradiant,
  STextInfoSection,
} from '../../style/GreetingInfo';

const SearchMain = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (searchTerm.length >= 2) {
        const url = `/search/list/${searchTerm}`;
        navigate(url);
        dispatch(GetSearch(searchTerm));
        dispatch(SetParams(searchTerm));
      } else {
        window.alert('검색어는 최소 2글자 이상 입력해야 합니다.');
      }
    }
  };

  return (
    <Layout>
      <SBackgroundLayout>
        <SGradiant />
        <STextInfoSection>
          <div className="pills">💊알고싶은 약의 성분을 확인해보세요!</div>
          <h3>
            가지고 계신 🤧<span>알러지</span>를 표기해드립니다
          </h3>
          <StyledInput
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="🔎 게보린, 아스피린"
            onKeyDown={handleKeyDown}
          />
          {showAlert && <div className="alert">검색어를 입력해주세요.</div>}
          <div className="example">
            아직 본인이 가진 알러지를 설정하지 않으셨다면,<br></br> 맞춤
            추천에서 설정 후 검색을 추천드립니다
          </div>
        </STextInfoSection>
      </SBackgroundLayout>
    </Layout>
  );
};

export default SearchMain;
