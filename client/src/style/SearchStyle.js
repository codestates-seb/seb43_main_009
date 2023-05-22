import styled, { css } from 'styled-components';
import { keyframes } from 'styled-components';

export const SearchWrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
`;
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;
export const StyledInput = styled.input`
  top: 150px;
  position: absolute;
  width: 120%;
  height: 35%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ffa1a1;
  border-radius: 50px;
  animation: ${fadeIn} 2s ease-in-out;
  font-size: large;
  /* text-align: center; */

  &:focus {
    border-color: red;
  }
`;

export const StyledButton = styled.button`
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

export const StyledTable = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: auto;
  margin: 35px 35px 0px;
  td {
    border: 1px solid #959595;
    text-align: left;
    padding: 8px;
  }

  td:first-child {
    font-weight: bold;
    background-color: #f9e6e6;
    width: 20%;
  }
  td:nth-child(2) {
    width: 40%;
  }
  tr:first-child td:nth-child(3) {
    background-color: #f9e6e6;
    font-weight: bold;
  }
  tr:nth-child(7) td:nth-child(2) {
    color: red;
  }
`;

export const SGradiant = styled.div`
  width: 100%;
  height: 180px;
`;

export const SGradiant2 = styled.div`
  width: 100%;
  height: 90px;
`;

export const ButtonBox = styled.div`
  display: flex;
  margin: 35px 35px 0px;
  justify-content: flex-end;
`;

export const SearchResultDesign = styled.div`
  .gobutton {
    width: 100px;
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
  }
`;
export const SearchlistDesign = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  width: 100vw;
  font-family: 'Noto Sans KR', sans-serif;
  vertical-align: baseline;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #f4f4f4;

  .search {
    width: 500px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #ffa1a1;
    border-radius: 4px;
    margin-top: 50px;
    &:focus {
      border: 2px solid #ffa1a1;
    }
  }

  .itemnumber {
    align-items: flex-start;
    font-size: 20px;
  }

  .searchbutton {
    width: 100px;
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
  }
  .result {
    font-size: 30px;
    margin-top: 30px;
    margin-top: 50px;
  }

  img {
    width: 110px;
    height: 100px;
    margin-right: 10px;
    margin-left: 10px;
  }

  .image {
    height: 30px;
    width: 130px;
  }
  .image,
  .name,
  .company {
    border-right: 1px solid white;
  }

  .itemnumber {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .table {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .sub {
    background-color: #fcb2b2;
    justify-content: center;
  }

  .list,
  .sub {
    display: flex;
    flex-direction: wrap;
    justify-content: center;
  }

  .name {
    width: 350px;
  }

  .image,
  .itemname,
  .name,
  .entpname,
  .company,
  .haveallergy,
  .allergy,
  .imgdiv {
    display: flex;
    align-items: center;
  }

  .image,
  .name,
  .company,
  .haveallergy,
  .entpname,
  .allergy {
    justify-content: center;
  }

  .itemname {
    padding-left: 20px;
    width: 330px;
  }

  .entpname,
  .company {
    width: 170px;
  }

  .haveallergy,
  .allergy {
    width: 180px;
  }

  .list {
    border-bottom: 1px dotted #999999;
    height: 120px;
  }

  .nosearch {
    width: 40vw;
    height: 40vh;
    margin-bottom: 50px;
  }

  .allergy {
    color: red;
  }
  .list.last-item {
    margin-bottom: 50px;
  }
`;
