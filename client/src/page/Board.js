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
  box-sizing: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .up-box {
    border: 1px solid black;
    width: 100vw;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .title-box {
      border: 1px solid red;
      width: 80%;
      height: 80%;
    }
  }

  .down-box {
    border: 1px solid black;
    width: 100vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .comment-content {
      border: 1px solid orange;
      width: 50%;
      height: 30%;
      font-size: large;
    }

    .comment-write {
      border: 1px solid blueviolet;
      width: 50%;
      height: 30%;
      font-size: large;
    }
  }
`;

export default Board;
