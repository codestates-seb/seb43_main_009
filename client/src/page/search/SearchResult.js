import Layout from '../../common/Layout';
import React, { useState } from 'react';
import axios from 'axios';
import {
  SpinnerContainer,
  Spinner,
  StyledTable,
  ButtonBox,
  SearchWrapper,
  SearchWrapper2,
  StyledBox,
  GoWrite,
  GoBack,
} from '../../style/SearchStyle';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import noimg from '../../../public/noimg.jpg';
import { useNavigate } from 'react-router-dom';

const SearchResult = () => {
  const { searchTerm } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  let num = 1;
  let sub = num - 1;
  const nothing = '이미지가 존재하지 않습니다.';
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

  const goback = () => {
    navigate(-1);
  };
  const gowrite = () => {
    navigate('/commu');
    window.scrollTo(0, 0);
  };

  // handleSearch 함수를 정의합니다.
  const handleSearch = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const config = {
        withCredentials: true,
      };
      if (token) {
        config.headers = {
          Authorization: `${token}`,
        };
      }
      const response = await axios.get(
        `https://server.dowajoyak.shop/search/${searchTerm}`,
        config,
      );
      console.log(response.data);

      if (typeof response.data === 'object') {
        setData(response.data);
        console.log('oject일때');
        if (response.data.length === 0) {
          setData(dummy);
          console.log('null일때');
        }
      } else {
        setData(dummy);
        console.log('더미일때');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await handleSearch();
      } finally {
        setIsLoading(false);
      }
      window.scrollTo(0, 0);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <SearchWrapper>
        <SearchWrapper2>
          {isLoading ? (
            // 로딩 화면을 표시하는 컴포넌트 또는 로딩 상태에 따른 처리
            <SpinnerContainer>
              <Spinner></Spinner>
            </SpinnerContainer>
          ) : (
            <>
              <StyledBox>
                <h1>약에 대한 정보입니다</h1>
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
                          src={
                            row.itemImage === nothing ? noimg : row.itemImage
                          }
                          alt={row.itemName}
                          style={{ width: '100%', height: '100%' }}
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
              <ButtonBox>
                <GoBack onClick={goback}>뒤로가기</GoBack>
                <GoWrite onClick={gowrite}>커뮤니티</GoWrite>
              </ButtonBox>
            </>
          )}
        </SearchWrapper2>
      </SearchWrapper>
    </Layout>
  );
};
export default SearchResult;
