import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./page/Home";
import Login from "./page/Login";
import Community from "./page/Community";
import Survey from "./page/Survey";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/commu" element={<Community />}></Route>
        <Route path="/survey" element={<Survey />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
