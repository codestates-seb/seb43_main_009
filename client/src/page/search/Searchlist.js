import styled from 'styled-components';
import Layout from '../../common/Layout';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { GetSearch } from '../../redux/SearchSlice';
import noimg from '../../../public/noimg.jpg';

const SearchlistDesign = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  width: 100vw;
  font-family: 'Noto Sans KR', sans-serif;
  vertical-align: baseline;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 50px;

  .search {
    width: 500px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #ffa1a1;
    border-radius: 4px;
  }

  .itemnumber {
    align-items: flex-start;
  }

  .searchbutton {
    width: 100px;
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
  }
  .result {
    font-size: 30px;
  }

  img {
    width: 110px;
    height: 100px;
    margin-right: 10px;
    margin-left: 10px;
  }

  .image {
    height: 30px;
    width: 130px;
  }
  .image,
  .name,
  .company {
    border-right: 1px solid white;
  }

  .table {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .sub {
    background-color: #fcb2b2;
    justify-content: center;
  }

  .list,
  .sub {
    display: flex;
    flex-direction: wrap;
    justify-content: center;
  }

  .name {
    width: 350px;
  }

  .image,
  .itemname,
  .name,
  .entpname,
  .company,
  .haveallergy,
  .allergy,
  .imgdiv {
    display: flex;
    align-items: center;
  }

  .image,
  .name,
  .company,
  .haveallergy,
  .entpname,
  .allergy {
    justify-content: center;
  }

  .itemname {
    padding-left: 20px;
    width: 330px;
  }

  .entpname,
  .company {
    width: 170px;
  }

  .haveallergy,
  .allergy {
    width: 160px;
  }

  .list {
    border-bottom: 1px dotted #999999;
    height: 120px;
  }
`;

const Searchlist = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { itemname } = useParams();

  const spa = '아스피린';
  const searchdata = useSelector((state) => state.search.data);
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const nothing = '이미지가 존재하지 않습니다.';

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
  console.log(searchdata.length);

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
      <SearchlistDesign>
        <div>
          <input
            className="search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
          <button className="searchbutton" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="result">찾으시는 {spa}에 대한 결과입니다.</div>
        <div className="itemnumber">
          검색결과 리스트 ({searchdata.length}개)
        </div>
        <div className="table">
          <div className="sub">
            <div className="image">식별/포장</div>
            <div className="name">제품명</div>
            <div className="company">회사명</div>
            <div className="haveallergy">알러지 여부</div>
          </div>

          {searchdata.length > 0 ? (
            searchdata.map((el) => (
              <div key={el.itemName} className="list">
                <div className="imgdiv">
                  <img
                    className="itemimage"
                    alt="itemimage"
                    src={el.itemImage === nothing ? noimg : el.itemImage}
                  ></img>
                </div>
                <div className="itemname">{el.itemName}</div>
                <div className="entpname">{el.entpName}</div>
                <div className="allergy">{el.allergy}</div>
              </div>
            ))
          ) : (
            <div>없다</div>
          )}
        </div>
      </SearchlistDesign>
    </Layout>
  );
};

export default Searchlist;
