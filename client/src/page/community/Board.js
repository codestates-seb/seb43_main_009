import Layout from "../../common/Layout";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchBoardData,
  deletePost,
  updatePost,
  submitComment,
} from "../../redux/counterSlice";

const Board = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const boardData = useSelector((state) => state.counter.data);
  const boardStatus = useSelector((state) => state.counter.status);
  const boardError = useSelector((state) => state.counter.error);

  const [showEditForm, setShowEditForm] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [comment, setComment] = useState("");

  const commentList = boardData.commentList || [];

  const handleSubmitComment = useCallback(() => {
    dispatch(submitComment({ commuId: boardData.commuId, comment }));
    setComment("");
  }, [dispatch, boardData.commuId, comment]);

  //수정
  const handleEditClick = () => {
    setShowEditForm(true);
    setEditedTitle(boardData.title);
    setEditedContent(boardData.content);
  };
  //수정 저장
  const handleSaveEdit = useCallback(() => {
    dispatch(
      updatePost({
        commuId: boardData.commuId,
        title: editedTitle,
        content: editedContent,
      })
    );
    setShowEditForm(false);
  }, [dispatch, boardData.commuId, editedTitle, editedContent]);

  //게시글이 삭제 전에 확인메세지를 표시하고, 삭제가 완료된 후에 페이지 이동
  //혹시 delete확인이 필요하지 않다면 navigate hook을 제거할 것
  const handleDeletePost = useCallback(async () => {
    if (window.confirm("정말로 이 게시글을 삭제하시겠습니까?")) {
      await dispatch(deletePost(boardData.commuId));
      navigate("/commu");
    }
  }, [dispatch, navigate, boardData.commuId]);

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
            {showEditForm ? (
              <>
                <button onClick={handleSaveEdit}>저장</button>
                <button onClick={() => setShowEditForm(false)}>취소</button>
              </>
            ) : (
              <>
                <button onClick={handleEditClick}>게시글 수정</button>
                <button onClick={handleDeletePost}>게시글 삭제</button>
              </>
            )}
          </div>
          <div className="title-box">
            {showEditForm ? (
              <div>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <textarea
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                ></textarea>
              </div>
            ) : (
              boardStatus === "succeeded" && (
                <div>
                  <h3>{boardData.title}</h3>
                  <p>{boardData.content}</p>
                  <p>작성자: {boardData.displayName}</p>
                  <p>작성시간: {boardData.createdAt}</p>
                  <p>조회수: {boardData.view}</p>
                </div>
              )
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
                {commentList.map((comment, index) => (
                  <div key={index}>
                    <p>댓글 작성자: {comment.displayName}</p>
                    <p>댓글 내용: {comment.content}</p>
                    <p>댓글 작성시간: {comment.createdAt}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="write-box">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="댓글을 입력하세요"
            />
            <button onClick={handleSubmitComment}>댓글달기</button>
          </div>
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
    width: 100vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;

    .button-box {
      width: 70%;
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
      border-radius: 20px;
      width: 70%;
      height: 70%;
      padding: 16px;
      box-sizing: border-box;

      input {
        width: 80%;
      }

      textarea {
        width: 80%;
      }
    }
  }

  .down-box {
    width: 100vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;

    .comment-content {
      border: 1px solid #e0e0e0;
      width: 60%;
      height: 30%;
      font-size: 14px;
      padding: 16px;
      box-sizing: border-box;
      background-color: #f5f5f5;
      margin-bottom: 2rem;
    }

    .write-box {
      display: flex;
      /* border: 1px solid black; */
      width: 60%;
      justify-content: space-between;
      align-items: center;
      margin-left: 1rem;

      input {
        width: 50vw;
        height: 70%;
        border: 1px solid #e0e0e0;
        border-radius: 10px;
      }

      button {
        background-color: #e0e0e0;
        border: none;
        color: white;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 12px;
        padding: 8px 24px;
        transition-duration: 0.4s;

        &:hover {
          background-color: #f06868;
          color: white;
        }
      }
    }
  }
`;

export default Board;
