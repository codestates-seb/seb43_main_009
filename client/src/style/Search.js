import styled from 'styled-components';
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
    border-color: #dd7b6a;
    outline: none;
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
