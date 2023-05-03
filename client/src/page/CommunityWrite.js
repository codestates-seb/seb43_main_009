import Layout from "../common/Layout";
import styled from "styled-components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { plus, minus } from "../redux/counterSlice";

const CommunityWrite = () => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

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
            <button className="submit-button" onClick={() => dispatch(minus())}>
              글올리기
            </button>
            Value: {count}
            <button className="cancel-button" onClick={() => dispatch(plus())}>
              취소
            </button>
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

  .title-box {
    margin-top: 3rem;
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
      margin-left: 2rem;
      width: 47vw;
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
      justify-content: space-around;
      width: 100%;
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
      margin: 4px 2px;
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

export default CommunityWrite;
