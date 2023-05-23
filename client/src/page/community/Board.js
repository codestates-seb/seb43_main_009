import Layout from '../../common/Layout';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useId } from 'react';
import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchBoardData,
  deletePost,
  updatePost,
  submitComment,
  checkToken,
} from '../../redux/boardSlice';
import { getUserInfo } from '../../utils/UserInfo';
import questionsmark from '../../../public/questionsmark.png';
import {
  CommunityBox,
  Author,
  CommentText,
  Timestamp,
  ImgBox,
} from '../../style/BoardStyle';

const Board = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const boardData = useSelector((state) => state.board.data);
  const boardStatus = useSelector((state) => state.board.status);
  const boardError = useSelector((state) => state.board.error);
  const token = useSelector((state) => state.board.token);
  // const submitData = useSelector((state) => state.counter.data);
  // const submitStatus = useSelector((state) => state.counter.status);

  const { commuId } = useParams();
  const [showEditForm, setShowEditForm] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const [comment, setComment] = useState('');
  const userInfo = getUserInfo();
  const userId = userInfo && userInfo.userId;

  useEffect(() => {
    {
      dispatch(fetchBoardData(commuId));
      dispatch(checkToken());
    }
  }, [dispatch, commuId]);

  const commentList = (boardData.comments || []).slice();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 2자리 숫자로 표시
    const day = date.getDate().toString().padStart(2, '0');
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');

    return `${year}/${month}/${day} ${hour}:${minute}`;
  };

  const handleSubmitComment = useCallback(() => {
    if (comment.trim() === '') {
      // 댓글 내용이 비어있는 경우
      alert('댓글 내용을 입력해주세요.');
      return;
    }
    const token = localStorage.getItem('accessToken');
    if (token === null) {
      alert('가입정보가 없습니다. 회원가입 페이지로 이동합니다.');
      navigate('/signup');
    }

    dispatch(submitComment({ commuId: boardData.commuId, comment }))
      .then(() => {
        setComment('');
      })
      .catch((error) => {
        console.error(error);
        navigate('/signup');
      });
  }, [dispatch, boardData.commuId, comment, navigate]);

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
      }),
    ).then(() => {
      dispatch(fetchBoardData(boardData.commuId));
    });
    setShowEditForm(false);
  }, [dispatch, boardData.commuId, editedTitle, editedContent]);

  //게시글이 삭제 전에 확인메세지를 표시하고, 삭제가 완료된 후에 페이지 이동
  //혹시 delete확인이 필요하지 않다면 navigate hook을 제거할 것
  const handleDeletePost = useCallback(async () => {
    if (window.confirm('정말로 이 게시글을 삭제하시겠습니까?')) {
      await dispatch(deletePost(boardData.commuId));
      navigate('/commu');
    }
  }, [dispatch, navigate, boardData.commuId]);

  const handleImgClick = () => {
    const token = localStorage.getItem('accessToken');
    if (token === null) {
      alert('가입정보가 없습니다. 로그인 페이지로 이동합니다.');
      navigate('/login');
    } else {
      navigate('/commu/posts', { replace: true });
    }
  };
  return (
    <Layout>
      <CommunityBox>
        <ImgBox onClick={handleImgClick}></ImgBox>
        <div className="up-box">
          <div className="title-box">
            <div className="button-box">
              {showEditForm ? (
                <>
                  <button onClick={handleSaveEdit}>저장</button>
                  <button onClick={() => setShowEditForm(false)}>취소</button>
                </>
              ) : (
                <>
                  {userId === boardData.userId && ( // 만약 게시글 작성자와 로그인한 사용자가 같다면 버튼을 보여줍니다.
                    <>
                      <button onClick={handleEditClick}>게시글 수정</button>
                      <button onClick={handleDeletePost}>게시글 삭제</button>
                    </>
                  )}
                </>
              )}
            </div>

            {showEditForm ? (
              <div className="retouch-box">
                <div className="retouch-title">
                  <span>제목</span>
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                </div>
                <div className="retouch-content">
                  <span>
                    내용<br></br>
                    <br></br>
                  </span>
                  <textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                  ></textarea>
                </div>
              </div>
            ) : (
              boardStatus === 'succeeded' && (
                <div className="content">
                  <h3>제목 : {boardData.title}</h3>
                  <p>내용 : {boardData.content}</p>
                  <div className="post-info">
                    <span>작성자: {boardData.displayName}</span>
                    <span>작성시간: {formatDate(boardData.createAt)}</span>
                    <span>조회수: {boardData.view}</span>
                  </div>
                </div>
              )
            )}
            {boardStatus === 'failed' && (
              <div>
                <p>Error: {boardError}</p>
              </div>
            )}
          </div>
        </div>

        <div className="down-box">
          <div className="comment-content">
            {boardStatus === 'succeeded' && (
              <div>
                {commentList.map((comment) => (
                  <div key={comment.commentId} className="comment">
                    <div className="comment-text">
                      <Author>{comment.displayName}</Author>
                      <CommentText>{comment.comment}</CommentText>
                    </div>
                    <div>
                      <Timestamp>{formatDate(comment.createAt)}</Timestamp>
                    </div>
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
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSubmitComment();
                  e.preventDefault();
                }
              }}
              placeholder="댓글을 입력하세요"
            />
            <button onClick={handleSubmitComment}>댓글달기</button>
          </div>
        </div>
      </CommunityBox>
    </Layout>
  );
};

export default Board;
