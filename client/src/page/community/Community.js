import Layout from "../../common/Layout";
import styled from "styled-components";
import Commpost from "./Commpost";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CommunityDesign = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  background-color: #f9e6e6;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Noto Sans KR", sans-serif;

  .flexcontent {
    display: flex;
    justify-content: space-between;
    flex-direction: wrap;

    .community {
      text-align: left;
      font-size: 32px;
      margin-bottom: 15px;
      margin-top: 15px;
      margin-left: 15px;
      font-family: "MaplestoryOTFBold";
    }
    .writebutton {
      background-color: #f05858;
      border-radius: 3px;
      border: none;
      color: white;
      width: 60px;
      height: 40px;
      margin-bottom: 15px;
      margin-top: 15px;
      cursor: pointer;
      text-align: right;
      margin-right: 25px;
      font-family: "MaplestoryOTFBold";
      &:hover {
        background-color: #d32f2f;
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    margin-top: 2px;
    padding: 15px 10px;
    border-bottom: 1px solid #d6d6d6;
    font-weight: 500;

    .infoid {
      flex: 0.2;
    }
    .infoperson {
      flex: 0.4;
    }
    .infotitle {
      flex: 1;
    }
    .infoview {
      flex: 0.4;
    }
    .infocreat {
      flex: 0.3;
    }
  }

  .allcomm {
    justify-content: center;
    background-color: white;
    width: 70vw;
    height: 80vh;
  }

  .writepost {
    font-size: 18px;
  }
  .writeinfo {
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    justify-content: space-around;
  }
`;

const Community = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "http://ec2-3-34-134-67.ap-northeast-2.compute.amazonaws.com:8080/commu/all"
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isloading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const goWrite = () => {
    Navigate("/commu/posts");
  };

  return (
    <Layout>
      <CommunityDesign>
        <div className="allcomm">
          <div className="flexcontent">
            <span className="community">커뮤니티</span>
            <button className="writebutton">
              <span className="writepost" onClick={goWrite}>
                글쓰기
              </span>
            </button>
          </div>
          <ul className="writeinfo">
            <li className="infoid">No.</li>
            <li className="infoperson">작성자</li>
            <li className="infotitle">제목</li>
            <li className="infoview">조회수</li>
            <li className="infocreat">작성시간</li>
          </ul>
          <Commpost data={data} />
        </div>
      </CommunityDesign>
    </Layout>
  );
};

export default Community;
