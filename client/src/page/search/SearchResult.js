import Layout from '../../common/Layout';
import React, { useState } from 'react';
import axios from 'axios';
import {
  SearchWrapper,
  StyledInput,
  StyledButton,
  StyledTable,
} from '../../style/Search';

const SearchResult = () => {
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
      <SearchWrapper>
        <StyledInput
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <StyledButton onClick={handleSearch}>Search</StyledButton>
        <div>
          <h1>검색하신 약에대한 정보입니다</h1>
        </div>
        <StyledTable>
          {data.slice(0, 1).map((row) => (
            <tbody key={row.itemName}>
              <tr>
                <td>제품명</td>
                <td>{row.itemName}</td>
                <td>약 이미지</td>
              </tr>
              <tr>
                <td>회사명</td>
                <td>{row.entpName}</td>
                <td rowSpan="3">
                  <img
                    src={row.itemImage}
                    alt={row.itemName}
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                </td>
              </tr>
              <tr>
                <td>효능</td>
                <td>{row.efcyQesitm}</td>
              </tr>
              <tr>
                <td>복용방법(사용법)</td>
                <td>{row.useMethodQesitm}</td>
              </tr>
              <tr>
                <td>사용상 주의사항</td>
                <td colspan="2">{row.atpnQesitm}</td>
              </tr>
              <tr>
                <td>사용중 주의사항(약,음식)</td>
                <td colspan="2">{row.intrcQesitm}</td>
              </tr>
              <tr>
                <td>사용자 주의사항</td>
                <td colspan="2">정보</td>
              </tr>
            </tbody>
          ))}
        </StyledTable>
      </SearchWrapper>
    </Layout>
  );
};

export default SearchResult;
