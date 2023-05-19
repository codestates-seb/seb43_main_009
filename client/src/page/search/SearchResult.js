import Layout from '../../common/Layout';
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { StyledTable, SGradiant } from '../../style/SearchStyle';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const SearchWrapper = styled.div`
  margin: 0px;
  padding: 0px;
  border: 0px;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  font-size: inherit;
  line-height: inherit;
  font-optical-sizing: inherit;
  font-kerning: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  vertical-align: baseline;
  background-color: rgb(249, 230, 230);
  width: 100vw;
  height: auto;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Noto Sans KR', sans-serif;
`;

export const SearchWrapper2 = styled.div`
  width: 80%;
  height: 100%;
  margin: 20px auto;
  background-color: #fff;
`;

const StyledBox = styled.div`
  display: flex;
  padding: 35px 35px 0px 35px;
`;

const SearchResult = () => {
  const { searchTerm } = useParams();
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

  // handleSearch 함수를 정의합니다.
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://server.dowajoyak.shop/search/${searchTerm}`,
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

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <Layout>
      <SearchWrapper>
        <SearchWrapper2>
          <StyledBox>
            <h1>약에대한 정보입니다</h1>
          </StyledBox>

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
        </SearchWrapper2>
      </SearchWrapper>
    </Layout>
  );
};
export default SearchResult;
