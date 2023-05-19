import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './page/Home';
import CommunityWrite from './page/community/CommunityWrite';
import Login from './page/user/Login';
import Signup from './page/user/Signup';
import Community from './page/community/Community';
import Survey from './page/survey/Survey';
import SearchMain from './page/search/SearchMain';
import Searchlist from './page/search/Searchlist';
import SearchResult from './page/search/SearchResult';
import Board from './page/community/Board';
import SearchList from './page/search/Searchlist';

const App = () => {
  console.log(process.env.API_SERVER);

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
        <Route path="/searchmain" element={<SearchList />}></Route>
        <Route path="/search" element={<SearchMain />}></Route>
        <Route path="/search/list/:itemname" element={<SearchList />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
