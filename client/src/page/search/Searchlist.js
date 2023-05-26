import Layout from '../../common/Layout';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { SetParams, GetSearch } from '../../redux/SearchSlice';
import noimg from '../../../public/noimg.jpg';
import nosearch from '../../../public/nosearch.png';
import {
  SearchlistDesign,
  SpinnerContainer,
  Spinner,
} from '../../style/SearchStyle';

const SearchList = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { itemname } = useParams();
  const searchKeyword = useSelector((state) => state.search.params);
  const searchResults = useSelector((state) => state.search.data);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const nothing = '이미지가 존재하지 않습니다.';
  const noresult = '찾으시는 데이터가 존재하지 않습니다.';

  const warn = ['O', 'X', `로그인 및 맞춤추천 후 확인 가능합니다.`];
  const allergylist = [
    '주의사항 있음.',
    '주의사항 없음.',
    '로그인 후 확인 가능',
  ];
  const checkwarn = (el) => {
    if (el === allergylist[0]) {
      return warn[0];
    } else if (el === allergylist[1]) {
      return warn[1];
    } else if (el === allergylist[2]) {
      return warn[2];
    }
  };

  const handleSearch = () => {
    if (searchTerm.length >= 2) {
      const url = `/search/list/${searchTerm}`;
      Navigate(url);
      dispatch(GetSearch(searchTerm));
      dispatch(SetParams(searchTerm));
    } else {
      window.alert('검색어는 최소 2글자 이상 입력해야 합니다.');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await dispatch(GetSearch(itemname));
        await dispatch(SetParams(itemname));
      } catch (error) {
        console.error('fail', error);
        // 에러 처리 로직을 추가할 수 있습니다.
      } finally {
        setIsLoading(false);
      }
      window.scrollTo(0, 0);
    };

    fetchData();
  }, [dispatch, itemname]);
  console.log(searchResults);

  return (
    <Layout>
      <SearchlistDesign>
        <div>
          <input
            className="search"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          ></input>
          <button className="searchbutton" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div>
          {isLoading ? (
            // 로딩 화면을 표시하는 컴포넌트 또는 로딩 상태에 따른 처리
            <SpinnerContainer>
              <Spinner></Spinner>
            </SpinnerContainer>
          ) : (
            <>
              <div className="result">
                {searchKeyword}(으)로 검색한 결과입니다.
              </div>
              {searchResults !== noresult && (
                <>
                  <div className="itemnumber">
                    검색결과 리스트 ({searchResults.length}개)
                  </div>
                  <div className="table">
                    <div className="sub">
                      <div className="image">식별/포장</div>
                      <div className="name">제품명</div>
                      <div className="company">회사명</div>
                      <div className="haveallergy">알러지 여부</div>
                    </div>
                    {searchResults.map((el, index) => (
                      <div
                        key={el.itemName}
                        className={`list ${
                          index === searchResults.length - 1 ? 'last-item' : ''
                        }`}
                        onClick={() => Navigate(`/search/${el.itemName}`)}
                      >
                        <div className="imgdiv">
                          <img
                            className="itemimage"
                            alt="itemimage"
                            src={
                              el.itemImage === nothing ? noimg : el.itemImage
                            }
                          ></img>
                        </div>
                        <div className="itemname">{el.itemName}</div>
                        <div className="entpname">{el.entpName}</div>
                        <div className="allergy">{checkwarn(el.allergy)}</div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {searchResults === noresult && (
                <img className="nosearch" alt="nosearch" src={nosearch}></img>
              )}
            </>
          )}
        </div>
      </SearchlistDesign>
    </Layout>
  );
};

export default SearchList;
