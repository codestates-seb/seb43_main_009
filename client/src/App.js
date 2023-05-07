import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./page/Home";
import CommunityWrite from "./page/CommunityWrite";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Community from "./page/Community";
import Survey from "./page/Survey";
import Search from "./page/Search";
import Board from "./page/Board";
import { AuthProvider } from "./common/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/commu/posts" element={<CommunityWrite />}></Route>
          <Route path="/commu/commuid" element={<Board />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/commu" element={<Community />}></Route>
          <Route path="/survey" element={<Survey />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
