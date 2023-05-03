import Layout from "../common/Layout";
import styled from "styled-components";
import React from "react";

const CommunityWrite = () => {
  return (
    <Layout>
      <CommunityBox>
        <div className="title-box">
          <div className="title">제목</div>
          <input />
        </div>
        <div className="content-box">
          <div className="content">내용</div>
          <textarea type="text" />
          <div className="button-container">
            <button className="submit-button">글올리기</button>
            <button className="cancel-button">취소</button>
          </div>
        </div>
      </CommunityBox>
    </Layout>
  );
};

const CommunityBox = styled.div`
  box-sizing: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;

  .title-box {
    width: 100vw;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;

    > .title {
      padding: 1rem;
      font-size: large;
      font-weight: bold;
      color: #333333;
    }

    input {
      width: 40vw;
      height: 4vh;
      border-radius: 1rem;
      padding: 0.5rem;
      font-size: 16px;
    }
  }

  .content-box {
    width: 100vw;
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
    }

    textarea {
      width: 80vw;
      height: 25vh;
      border-radius: 1rem;
      padding: 1rem;
      font-size: 16px;
      resize: vertical;
    }
    .button-container {
      display: flex;
      justify-content: space-around;
      width: 100%;
      padding: 1rem 0;
    }

    .submit-button {
      background-color: #f44336;
      border: none;
      color: white;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 1rem;
    }

    .cancel-button {
      background-color: #ccc;
      border: none;
      color: black;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 1rem;
    }
  }
`;

export default CommunityWrite;
