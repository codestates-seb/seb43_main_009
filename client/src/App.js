import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './page/Home';
import CommunityWrite from './page/community/CommunityWrite';
import Login from './page/user/Login.tsx';
import Signup from './page/user/Signup.tsx';
import Community from './page/community/Community';
import Survey from './page/survey/Survey';
import SearchMain from './page/search/SearchMain';
import SearchResult from './page/search/SearchResult';
import Board from './page/community/Board';
import SearchList from './page/search/Searchlist';
import Mypage from './page/user/Mypage';
import { getCookie } from './utils/cookie';
const App = () => {
  console.log(process.env.API_SERVER);
  console.log(getCookie('refreshToken'));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/commu/posts" element={<CommunityWrite />}></Route>
        <Route path="/commu/:commuId" element={<Board />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/commu" element={<Community />}></Route>
        <Route path="/survey" element={<Survey />}></Route>
        <Route path="/search/:searchTerm" element={<SearchResult />}></Route>
        <Route path="/users/:userId" element={<Mypage />}></Route>
        <Route path="/search" element={<SearchMain />}></Route>
        <Route path="/search/list/:itemname" element={<SearchList />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
