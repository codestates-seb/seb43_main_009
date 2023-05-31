import styled, { keyframes } from 'styled-components';

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
    outline: none;
  }
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
      border-color: red;
      outline: none;
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
    cursor: pointer;
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

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
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
    font-size: 21px;
    font-weight: 600;
    color: red;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  margin: 35px;
  justify-content: flex-end;
`;

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

export const StyledBox = styled.div`
  display: flex;
  padding: 35px 35px 0px 35px;
`;

export const GoWrite = styled.button`
  width: 20%;
  background-color: #f05858;
  color: white;
  padding: 14px 20px;
  margin: 8px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ffe0e0;
  }
`;
export const GoBack = styled.button`
  width: 20%;
  background-color: #f05858;
  color: white;
  padding: 14px 20px;
  margin: 8px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ffe0e0;
  }
`;
