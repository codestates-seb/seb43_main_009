import React from 'react';
import Layout from '../../common/Layout';

import {
  SBackgroundLayout,
  SGradiant,
  STextInfoSection,
} from '../../style/GreetingInfo';

const Search = () => {
  return (
    <Layout>
      <SBackgroundLayout>
        <SGradiant />
        <STextInfoSection>
          <h1>건강 고민은 다나아에서</h1>
          <h2>
            건강 고민, 다나아 커뮤니티에 남기고 의학 전문가의 답변을 받아보세요!
          </h2>
        </STextInfoSection>
      </SBackgroundLayout>
    </Layout>
  );
};

export default Search;
