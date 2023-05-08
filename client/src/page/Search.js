import Layout from "../common/Layout";
import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";

const SearchWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #ffffff;
`;

const StyledInput = styled.input`
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ffa1a1;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  width: 20%;
  background-color: #f05858;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const StyledTable = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;

  td {
    border: 1px solid #000000;
    text-align: left;
    padding: 8px;
  }

  td:first-child {
    background-color: #f9e6e6;
    width: 30%;
  }
  td:nth-child(2) {
    width: 30%;
  }
  tr:first-child td:nth-child(3) {
    background-color: #f9e6e6;
  }
`;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/search?searchTerm=${searchTerm}`
      );
      setData(response.data);
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
          <thead>
            <tr>
              <td>제품명</td>
              <td>제품명</td>
              <td>약 이미지</td>
            </tr>
            <tr>
              <td>회사명</td>
              <td>회사명</td>
              <td rowSpan="5">약 이미지</td>
            </tr>
            <tr>
              <td>효능</td>
              <td>효능</td>
            </tr>
            <tr>
              <td>복용방법(사용법)</td>
              <td>복용방법(사용법)</td>
            </tr>
            <tr>
              <td>사용상 주의사항</td>
              <td>사용상 주의사항</td>
            </tr>
            <tr>
              <td>사용중 주의사항(약,음식)</td>
              <td>사용중 주의사항(약,음식)</td>
            </tr>
            <tr></tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.itemName}>
                <td>{row.itemName}</td>
                <td>{row.entpName}</td>
                <td>{row.efcyQesitm}</td>
                <td>{row.useMethodQesitm}</td>
                <td>{row.atpnQesitm}</td>
                <td>{row.intrcQesitm}</td>
                <td>
                  <img src={row.itemImage} alt={row.itemName} />
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </SearchWrapper>
    </Layout>
  );
};

export default Search;
