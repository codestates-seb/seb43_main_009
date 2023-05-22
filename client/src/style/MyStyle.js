import styled from 'styled-components';

export const MyDesign = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  background-color: #f9e6e6;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Noto Sans KR', sans-serif;

  .allcomm {
    display: flex;
    margin-bottom: 10%;
    align-items: center;

    .allcomm1 {
      background-color: white;
      width: 30vw;
      height: 50vh;
      margin-right: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 30px;

      img {
        width: 80%;
        height: auto;
      }
    }

    .allcomm2 {
      background-color: white;
      width: 50vw;
      height: 50vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: 'MaplestoryOTFBold';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFBold.woff')
        format('woff');
      font-weight: normal;
      font-style: normal;
      border: 1px solid #dee2e6;
      border-radius: 5px;

      .information-box {
        width: 70%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }

      .content-box {
        width: 70%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        padding: 1rem;

        input {
          height: 2rem;
          width: 70%;
        }
      }
    }
  }

  .writepost {
    font-size: 18px;
  }
  .writeinfo {
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    justify-content: space-around;
  }
`;

export const InformationBox = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #343a40;
`;

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 2em;
  border: none;
  border-radius: 3px;
  color: #fff;
  background-color: #f27b60;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f05758;
    cursor: pointer;
  }
`;
