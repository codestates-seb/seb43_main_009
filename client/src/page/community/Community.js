import Layout from '../../common/Layout';
import { CommunityDesign } from '../../style/CommunityStyle';
import CommunityPost from './CommunityPost';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Community = () => {
  const Navigate = useNavigate();

  const goWrite = () => {
    const token = localStorage.getItem('accessToken');
    if (token === null) {
      alert('로그인 정보가 없습니다. 로그인 페이지로 이동합니다.');
      Navigate('/login');
    } else Navigate('/commu/posts');
  };

  return (
    <Layout>
      <CommunityDesign>
        <div className="allcomm">
          <div className="flexcontent">
            <span className="community">커뮤니티</span>
            <button className="writebutton">
              <span className="writepost" onClick={goWrite}>
                글쓰기
              </span>
            </button>
          </div>
          <ul className="writeinfo">
            <li className="infoid">No.</li>
            <li className="infoperson">작성자</li>
            <li className="infotitle">제목</li>
            <li className="infoview">조회수</li>
            <li className="infocreat">작성시간</li>
          </ul>
          <CommunityPost />
        </div>
      </CommunityDesign>
    </Layout>
  );
};

export default Community;
