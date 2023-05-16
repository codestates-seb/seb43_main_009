import styled from 'styled-components';

export const CommunitypostDesign = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  vertical-align: baseline;

  .list {
    display: flex;
    background-color: #ffffff;
    border-bottom: 1px solid #d9d9d9;
    margin: 0px 0px 0px 0px;
    white-space: nowrap;
    align-items: center;
    height: 4px;
    line-height: 4px;
    cursor: pointer;
    &:hover {
      background-color: #ffe0e0;
    }
    .postid {
      flex: 0.2;
    }
    .postname {
      flex: 0.4;
    }
    .posttitle {
      flex: 1;
    }
    .postview {
      flex: 0.4;
    }
    .postcreat {
      flex: 0.3;
    }
  }

  .pagestyle {
    background-color: white;
    margin: 37px 0px 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    width: 80%;
    border: none;
    height: 7px;
    margin-left: 8vw;
    font-size: 15px;
    cursor: pointer;
    color: #999999;
  }
  .active {
    border: 1px solid black;
    width: 30px;
    color: #ff0033;
    text-decoration: underline;
  }

  .pagelink:hover {
    color: #333333;
    text-decoration: underline;
  }
  .previous,
  .next {
    color: #333333;
  }
`;

export const CommunityDesign = styled.div`
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

  .flexcontent {
    display: flex;
    justify-content: space-between;
    flex-direction: wrap;

    .community {
      text-align: left;
      font-size: 32px;
      margin-bottom: 15px;
      margin-top: 15px;
      margin-left: 15px;
      font-family: 'MaplestoryOTFBold';
    }
    .writebutton {
      background-color: #f05858;
      border-radius: 3px;
      border: none;
      color: white;
      width: 60px;
      height: 40px;
      margin-bottom: 15px;
      margin-top: 15px;
      cursor: pointer;
      text-align: right;
      margin-right: 25px;
      font-family: 'MaplestoryOTFBold';
      &:hover {
        background-color: #d32f2f;
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    padding: 16px 0px;
    background-color: #fcb2b2;
    font-weight: 500;

    .infoid {
      flex: 0.2;
    }
    .infoperson {
      flex: 0.4;
    }
    .infotitle {
      flex: 1;
    }
    .infoview {
      flex: 0.4;
    }
    .infocreat {
      flex: 0.3;
    }
  }

  .allcomm {
    justify-content: center;
    background-color: white;
    width: 80vw;
    height: 95vh;
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

export const CommunityBox = styled.div`
  box-sizing: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title-box {
    margin-top: 3rem;
    width: 90vw;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;

    > .title {
      margin-right: 34%;
      padding: 1rem;
      font-size: large;
      font-weight: bold;
      color: #333333;
    }

    input {
      margin-left: 4rem;
      width: 38vw;
      height: 4vh;
      padding: 0.5rem;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 1rem;
      outline: none;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: border-color 0.3s, box-shadow 0.3s;

      &:focus {
        border-color: #fdd7a0;
        box-shadow: 0 2px 4px rgba(244, 67, 54, 0.3);
      }
    }
  }

  .content-box {
    margin-top: 1rem;
    margin-left: 0.5rem;
    width: 90%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;

    > .content {
      padding: 1rem;
      font-size: large;
      font-weight: bold;
      color: #333333;
      margin-right: 38%;
    }

    textarea {
      margin-left: 4rem;
      width: 47%;
      height: 50vh;
      padding: 1rem;
      font-size: 16px;
      resize: vertical;
      border: 1px solid #ccc;
      border-radius: 1rem;
      outline: none;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: border-color 0.3s, box-shadow 0.3s;

      &:focus {
        border-color: #fdd7a0;
        box-shadow: 0 2px 4px rgba(244, 67, 54, 0.3);
      }
    }
    .button-container {
      display: flex;
      justify-content: flex-end;
      width: 53%;
      padding: 1rem 0;
      margin-top: 1rem;
    }

    .submit-button,
    .cancel-button {
      border: none;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 0.5rem;
      cursor: pointer;
      border-radius: 1rem;
      transition: background-color 0.3s, color 0.3s;
    }

    .submit-button {
      background-color: #f06868;
      color: white;

      &:hover {
        background-color: #d32f2f;
      }
    }

    .cancel-button {
      background-color: #ccc;
      color: black;

      &:hover {
        background-color: #999;
      }
    }
  }
`;
