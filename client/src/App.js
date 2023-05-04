import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./page/Home";
import CommunityWrite from "./page/CommunityWrite";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Community from "./page/Community";
import Survey from "./page/Survey";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/commu/posts" element={<CommunityWrite />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/commu" element={<Community />}></Route>
        <Route path="/survey" element={<Survey />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
