import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./page/Home";
import CommunityWrite from "./page/CommunityWrite";
import { createGlobalStyle } from "styled-components";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/commu" element={<CommunityWrite />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
