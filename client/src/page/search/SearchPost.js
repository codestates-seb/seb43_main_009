import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CommunitypostDesign } from '../../style/CommunityStyle';
import { GetCommulist } from '../../redux/CommuntiySlice';

const SearchPost = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.commu.data);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setpageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 11;

  useEffect(() => {
    {
      dispatch(GetCommulist());
    }
  }, [dispatch]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const reversedData = data.slice().reverse(); // 데이터를 복사하고 역순으로 정렬
    setCurrentItems(reversedData.slice(itemOffset, endOffset));

    setpageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  // 상세조회로 이동
  const goBoard = (el) => {
    Navigate(`/commu/${el.commuId}`);
  };

  // 오늘과 같은 작성날이면 월,일 표시
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 2자리 숫자로 표시
    const day = date.getDate().toString().padStart(2, '0');
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    if (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    ) {
      return `${hour}:${minute}`;
    } else {
      return `${month}/${day}`;
    }
  };

  return (
    <CommunitypostDesign>
      {currentItems &&
        currentItems.map((el) => (
          <ul
            key={el.commuId}
            className="list"
            onClick={() => {
              goBoard(el);
            }}
          >
            <li className="postid">{el.commuId}</li>
            <li className="postname">{el.displayName}</li>
            <li className="posttitle">{el.title}</li>
            <li className="postview">{el.view}</li>
            <li className="postcreat">{formatDate(el.createAt)}</li>
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
    </CommunitypostDesign>
  );
};

export default SearchPost;
