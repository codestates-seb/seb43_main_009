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

    .allcomm1 {
      background-color: white;
      width: 20vw;
      height: 50vh;
      margin-right: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
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
      border-radius: 5px;
      font-family: 'MaplestoryOTFBold';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFBold.woff')
        format('woff');
      font-weight: normal;
      font-style: normal;

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
