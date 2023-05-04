import Layout from "../common/Layout";
import styled from "styled-components";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBoardData } from "../redux/counterSlice";

const Board = () => {
  const dispatch = useDispatch();
  const boardData = useSelector((state) => state.counter.data);
  const boardStatus = useSelector((state) => state.counter.status);
  const boardError = useSelector((state) => state.counter.error);

  useEffect(() => {
    if (boardStatus === "idle") {
      dispatch(fetchBoardData());
    }
  }, [boardStatus, dispatch]);

  return (
    <Layout>
      <CommunityBox>
        <div className="up-box">
          <div className="button-box">
            <button>게시글 수정</button>
            <button>게시글 삭제</button>
          </div>
          <div className="title-box">
            {boardStatus === "succeeded" && (
              <div>
                <h3>{boardData.title}</h3>
                <p>{boardData.content}</p>
                <p>작성자: {boardData.displayName}</p>
                <p>작성시간: {boardData.createdAt}</p>
                <p>조회수: {boardData.view}</p>
              </div>
            )}
            {boardStatus === "failed" && (
              <div>
                <p>Error: {boardError}</p>
              </div>
            )}
          </div>
        </div>

        <div className="down-box">
          <div className="comment-content">
            {boardStatus === "succeeded" && (
              <div>
                {boardData.commentList.map((comment, index) => (
                  <div key={index}>
                    <p>댓글 작성자: {comment.displayName}</p>
                    <p>댓글 내용: {comment.content}</p>
                    <p>댓글 작성시간: {comment.createdAt}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="comment-write">댓글달기</div>
        </div>
      </CommunityBox>
    </Layout>
  );
};

const CommunityBox = styled.div`
  box-sizing: border-box;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;

  .up-box {
    border: 1px solid #e0e0e0;
    width: 100vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;

    .button-box {
      width: 80%;
      display: flex;
      justify-content: flex-end;

      button {
        background-color: #f06868;
        border: none;
        color: white;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 12px;
        padding: 8px 24px;
        transition-duration: 0.4s;

        &:hover {
          background-color: white;
          color: #f06868;
          border: 1px solid #f06868;
        }
      }
    }

    .title-box {
      border: 1px solid #e0e0e0;
      width: 80%;
      height: 70%;
      padding: 16px;
      box-sizing: border-box;
    }
  }

  .down-box {
    border: 1px solid #e0e0e0;
    width: 100vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;

    .comment-content {
      border: 1px solid #e0e0e0;
      width: 50%;
      height: 30%;
      font-size: 14px;
      padding: 16px;
      box-sizing: border-box;
      background-color: #f5f5f5;
    }

    .comment-write {
      border: 1px solid #f06868;
      width: 50%;
      height: 30%;
      font-size: 14px;
      padding: 16px;
      box-sizing: border-box;
      background-color: #f5f5f5;
      text-align: center;
      cursor: pointer;
      transition-duration: 0.4s;

      &:hover {
        background-color: #f06868;
        color: white;
      }
    }
  }
`;

export default Board;
