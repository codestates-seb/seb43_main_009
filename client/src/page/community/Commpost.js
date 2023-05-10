import styled from "styled-components";
import { useState, useEffect } from "react";
import React from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

const CommpostDesign = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: "Noto Sans KR", sans-serif;
  vertical-align: baseline;

  .list {
    display: flex;
    background-color: #ffa1a1;
    white-space: nowrap;
    align-items: center;
    height: 15px;
    line-height: 15px;
    cursor: pointer;
    &:hover {
      background-color: #fddcdc;
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
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    width: 70%;
    border: none;
    height: 7px;
    margin-left: 8vw;
    font-size: 30px;
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

const Commpost = ({ data }) => {
  const Navigate = useNavigate();
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setpageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setpageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  const goBoard = (el) => {
    Navigate(`/commu/${el.commuId}`);
  };

  return (
    <CommpostDesign>
      {currentItems &&
        currentItems.map((el) => (
          <ul
            className="list"
            onClick={() => {
              goBoard(el);
            }}
          >
            <li className="postid">{el.commuId}</li>
            <li className="postname">{el.displayName}</li>
            <li className="posttitle">{el.title}</li>
            <li className="postview">{el.view}</li>
            <li className="postcreat">{el.creatAt}</li>
          </ul>
        ))}

      <ReactPaginate
        className="pagestyle"
        nextLabel="다음 ▶︎"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="◀︎ 이전"
        renderOnZeroPageCount={null}
        previousClassName="previous"
        activeClassName="active"
        NextClassName="next"
        pageLinkClassName="pagelink"
      />
    </CommpostDesign>
  );
};

export default Commpost;
