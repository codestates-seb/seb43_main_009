import React from "react";
import FooterStyle from "../style/FooterStyle";
import { RxNotionLogo } from "react-icons/rx";
import { GoMarkGithub } from "react-icons/go";

function Footer() {
  return (
    <>
      <FooterStyle>
        <div className="content-template">
          <div className="content">
            <div className="frontTeam">
              <h4>Front-End</h4>
              <ul>
                <li>
                  <span>염도경 (TL)</span>
                  <a
                    href="https://github.com/yeomdogyeong"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="profile-icon"
                      src="https://user-images.githubusercontent.com/82639552/235307158-1cb6146d-53a1-4c06-9f8e-9ab3b6557199.jpg"
                      alt="Profile icon"
                    />
                  </a>
                </li>
                <li>
                  <span>김성수</span>
                  <a
                    href="https://github.com/ggggggggithub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="profile-icon"
                      src="https://user-images.githubusercontent.com/82639552/235307301-f1f52c06-781b-43ff-9493-d9e69c7ea118.jpg"
                      alt="Profile icon"
                    />
                  </a>
                </li>
                <li>
                  <span>노호준</span>
                  <a
                    href="https://github.com/nowaveosu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="profile-icon"
                      src="https://user-images.githubusercontent.com/82639552/235307316-087601a2-bf93-4bf3-a7b1-b128243ef242.jpg"
                      alt="Profile icon"
                    />
                  </a>
                </li>
                <li>
                  <span>이진하</span>
                  <a
                    href="https://github.com/wlsljh0516"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="profile-icon"
                      src="https://user-images.githubusercontent.com/82639552/235307329-5a37c265-ec9d-4a63-acd3-e3d5f69068b0.jpg"
                      alt="Profile icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="backTeam">
              <h4>Back-End</h4>
              <ul>
                <li>
                  <span>조만기 (DTL)</span>
                  <a
                    href="https://github.com/Sniij"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="profile-icon"
                      src="https://user-images.githubusercontent.com/82639552/235307385-877084c4-1a4d-4b61-9c2c-eec712e6bb3e.jpg"
                      alt="Profile icon"
                    />
                  </a>
                </li>
                <li>
                  <span>양인수</span>
                  <a
                    href="https://github.com/insooY"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="profile-icon"
                      src="https://user-images.githubusercontent.com/82639552/235307351-71145bf5-c902-434b-90e3-9563385b9c71.jpg"
                      alt="Profile icon"
                    />
                  </a>
                </li>
                <li>
                  <span>한동희</span>
                  <a
                    href="https://github.com/Gitdonghee"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="profile-icon"
                      src="https://user-images.githubusercontent.com/82639552/235307360-cd8e5f1d-ee0c-4295-bad2-278d072ccd5e.jpg"
                      alt="Profile icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="teamContent">
              <div className="teamLogo">
                <img
                  src="https://camo.githubusercontent.com/dc42bd7ca030fc716579172fe7e093a7e510bd149987a7f5b6ed50b116343a88/68747470733a2f2f63617073756c652d72656e6465722e76657263656c2e6170702f6170693f747970653d776176696e6726636f6c6f723d6175746f266865696768743d3330302673656374696f6e3d68656164657226746578743d25454225423025393825454225414625423825454325424425413925323026666f6e7453697a653d3735"
                  alt="teamLogo"
                  className="teamlogoItem"
                />
                <span>
                  Team. <strong>반미콩</strong>
                </span>
              </div>
              <div className="linkSNS">
                <a
                  href="https://www.notion.so/codestates/6a748265eba041fda45f2d6ddb4eb908"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RxNotionLogo size={25} />
                </a>
                <a
                  href="https://github.com/codestates-seb/seb42_main_020"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GoMarkGithub size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">ⓒ 2023 Company. All Rights Reserved.</div>
      </FooterStyle>
    </>
  );
}

export default Footer;
