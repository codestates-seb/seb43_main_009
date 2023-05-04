import styled from "styled-components";
import React from "react";

const CommpostDesign = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: "Noto Sans KR", sans-serif;
  vertical-align: baseline;

  ul {
    display: flex;
    background-color: #ffa1a1;
    overflow: hidden;
    white-space: nowrap;
    align-items: center;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
    .postid {
      flex: 0.2;
    }
    .postname {
      flex: 0.4;
    }
    .posttitle {
      flex: 1;
    }
    .postview {
      flex: 0.4;
    }
    .postcreat {
      flex: 0.3;
    }
  }
`;

const Commpost = () => {
  return (
    <CommpostDesign>
      <ul className="list">
        <li className="postid">13</li>
        <li className="postname">조규현</li>
        <li className="posttitle">광화문 비타민 핫딜</li>
        <li className="postview">33</li>
        <li className="postcreat">2023.05.20</li>
      </ul>
    </CommpostDesign>
  );
};

export default Commpost;
