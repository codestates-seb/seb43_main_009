import styled from 'styled-components';
import Layout from '../../common/Layout';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import { GetSearch } from '../../redux/SearchSlice';

const SearchResultDesign = styled.div`
  margin: 0;
`;

const StyledInput = styled.input`
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ffa1a1;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  width: 20%;
  background-color: #f05858;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const SearchResult = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const spa = '아스피린';
  const searchdata = useSelector((state) => state.search.data);
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setpageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    {
      dispatch(GetSearch(spa));
    }
  }, [dispatch]);
  console.log(searchdata);
  console.log(spa);

  /* useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const reversedData = searchdata.slice().reverse(); // 데이터를 복사하고 역순으로 정렬
    setCurrentItems(reversedData.slice(itemOffset, endOffset));

    setpageCount(Math.ceil(searchdata.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, searchdata]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % searchdata.length;
    setItemOffset(newOffset);
  }; */

  const handleSearch = GetSearch(searchTerm);

  return (
    <Layout>
      <StyledInput
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></StyledInput>
      <StyledButton onClick={handleSearch}>Search</StyledButton>
      {searchdata.map((el) => (
        <ul key="1" className="list">
          <li className="postid">{el.itemImage}</li>
          <li className="postname">{el.itemName}</li>
          <li className="posttitle">{el.entpName}</li>
        </ul>
      ))}
    </Layout>
  );
};

export default SearchResult;
