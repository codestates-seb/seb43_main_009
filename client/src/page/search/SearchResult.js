import Layout from '../../common/Layout';
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {
  SearchWrapper,
  StyledButton,
  StyledTable,
  SGradiant,
} from '../../style/Search';

const StyledInput = styled.input`
  top: 125px;
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ffa1a1;
  border-radius: 10px;
  font-size: large;

  &:focus {
    border-color: red;
  }
`;

const StyledBox = styled.div`
  display: flex;
`;

const SearchResult = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  let num = 1;
  let sub = num - 1;
  const dummy = [
    {
      itemName: '정보없음',
      entpName: '정보없음',
      efcyQesitm: '정보없음',
      useMethodQesitm: '정보없음',
      atpnQesitm: '정보없음',
      intrcQesitm: '정보없음',
      itemImage: '정보없음',
      allergy: '정보없음',
    },
  ];
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://server.dowajoyak.shop/search?itemName=${searchTerm}`,
      );

      if (typeof response.data === 'object') {
        setData(response.data);
      } else {
        setData(dummy);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <SearchWrapper>
        <StyledBox>
          <StyledInput
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <StyledButton onClick={handleSearch}>Search</StyledButton>
        </StyledBox>

        <div>
          <h1>검색하신 약에대한 정보입니다</h1>
        </div>
        <StyledTable>
          {data.slice(sub, num).map((row) => (
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
                <td colSpan="2">{row.atpnQesitm}</td>
              </tr>
              <tr>
                <td>사용중 주의사항(약,음식)</td>
                <td colSpan="2">{row.intrcQesitm}</td>
              </tr>
              <tr>
                <td>사용자 주의사항</td>
                <td colSpan="2">{row.allergy}</td>
              </tr>
            </tbody>
          ))}
        </StyledTable>
        <SGradiant />
      </SearchWrapper>
    </Layout>
  );
};
export default SearchResult;
