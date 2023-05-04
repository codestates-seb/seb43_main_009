import Layout from "../common/Layout";
import styled from "styled-components";

import Commpost from "./Commpost";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const CommunityDesign = styled.div`
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
  font-family: "Noto Sans KR", sans-serif;

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
      font-family: "MaplestoryOTFBold";
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
      font-family: "MaplestoryOTFBold";
    }
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    margin-top: 2px;
    padding: 15px 10px;
    border-bottom: 1px solid #d6d6d6;
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
    width: 70vw;
    height: 70vh;
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

const Community = () => {
  const [items, setItems] = useState([...Array(10).keys()]); // 0 ~ 9의 배열
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 3;
  const pagesVisited = currentPage * itemsPerPage;

  const displayItems = items
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((item) => <li key={item}>{item}</li>);

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <Layout>
      <CommunityDesign>
        <div className="allcomm">
          <div className="flexcontent">
            <span className="community">커뮤니티</span>
            <button className="writebutton">
              <span className="writepost">글쓰기</span>
            </button>
          </div>
          <ul className="writeinfo">
            <li className="infoid">No.</li>
            <li className="infoperson">작성자</li>
            <li className="infotitle">제목</li>
            <li className="infoview">조회수</li>
            <li className="infocreat">작성시간</li>
          </ul>
          <Commpost />
          <Commpost />
        </div>
        <div>
          <ul>{displayItems}</ul>
          <ReactPaginate
            previousLabel={"이전"}
            nextLabel={"다음"}
            pageCount={pageCount}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            previousLinkClassName={"previous"}
            nextLinkClassName={"next"}
            disabledClassName={"disabled"}
            activeClassName={"active"}
          />
        </div>
      </CommunityDesign>
    </Layout>
  );
};

export default Community;
