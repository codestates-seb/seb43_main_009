import Layout from '../../common/Layout';
import React, { useState } from 'react';
import axios from 'axios';
import {
  SearchWrapper,
  StyledInput,
  StyledButton,
  StyledTable,
} from '../../style/Search';

import {
  SBackgroundLayout,
  SGradiant,
  STextInfoSection,
} from '../../style/GreetingInfo';

const SearchMain = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  const dummy = [
    {
      itemName: '정보없음',
      entpName: '정보없음',
      efcyQesitm: '정보없음',
      useMethodQesitm: '정보없음',
      atpnQesitm: '정보없음',
      intrcQesitm: '정보없음',
      itemImage: '정보없음',
    },
  ];
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://server.dowajoyak.shop/search?itemName=${searchTerm}`,
      );
      if (typeof response.data === 'object') {
        setData(response.data);
      } else setData(dummy);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Layout>
      <SBackgroundLayout>
        <SGradiant />
        <STextInfoSection>
          {/* <h1>약 검색은 도와조약에서</h1> */}
          <h2>가지고 계신 약의 성분을 확인해보세요!</h2>
          <StyledInput
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </STextInfoSection>
      </SBackgroundLayout>
    </Layout>
  );
};

export default SearchMain;
