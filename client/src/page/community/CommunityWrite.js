import Layout from '../../common/Layout';
import { CommunityBox } from '../../style/CommunityStyle';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitPost } from '../../redux/boardSlice';
import { useNavigate } from 'react-router-dom';
import { GetCommulist } from '../../redux/CommuntiySlice';

const CommunityWrite = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const goHome = () => {
    navigate('/commu');
  };

  const handleSubmit = async () => {
    await dispatch(submitPost({ title, content, userId }));
    dispatch(GetCommulist());
    goHome();
  };

  return (
    <Layout>
      <CommunityBox>
        <div className="doctor-box"></div>
        <div className="title-box">
          <div className="title">제목{userId}</div>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="content-box">
          <div className="content">내용</div>
          <textarea
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="button-container">
            <button className="cancel-button" onClick={goHome}>
              취소
            </button>
            <button className="submit-button" onClick={handleSubmit}>
              글올리기
            </button>
          </div>
        </div>
      </CommunityBox>
    </Layout>
  );
};

export default CommunityWrite;
