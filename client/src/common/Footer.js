import React from 'react';
import FooterStyle from '../style/FooterStyle';
// import { RxNotionLogo } from 'react-icons/rx';
// import { GoMarkGithub } from 'react-icons/go';

function Footer() {
  return (
    <>
      <FooterStyle>
        <div className="content-template">
          <div className="content">
            <div className="Team">
              <div className="Teamh4">FE🧃</div>
              <ul className="Teamul">
                <li>
                  <a
                    href="https://github.com/yeomdogyeong"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="profile-icon"
                      src="https://github.com/yeomdogyeong.png"
                      alt="Profile icon"
                    />
                  </a>
                  <span>염도경</span>
                  <span>(TL)</span>
                </li>
                <li>
                  <a
                    href="https://github.com/ggggggggithub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="profile-icon"
                      src="https://github.com/ggggggggithub.png"
                      alt="Profile icon"
                    />
                  </a>
                  <span>김성수</span>
                </li>
                <li>
                  <a
                    href="https://github.com/nowaveosu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="profile-icon"
                      src="https://github.com/nowaveosu.png"
                      alt="Profile icon"
                    />
                  </a>
                  <span>노호준</span>
                </li>
                <li>
                  <a
                    href="https://github.com/wlsljh0516"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="profile-icon"
                      src="https://github.com/wlsljh0516.png"
                      alt="Profile icon"
                    />
                  </a>
                  <span>이진하</span>
                </li>
              </ul>
            </div>
            <div className="Team">
              <div className="Teamh4">BE🧃</div>
              <ul className="Teamul">
                <li>
                  <a
                    href="https://github.com/Sniij"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="profile-icon"
                      src="https://github.com/Sniij.png"
                      alt="Profile icon"
                    />
                  </a>
                  <span>조만기</span>
                  <span>(DTL)</span>
                </li>
                <li>
                  <a
                    href="https://github.com/insooY"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="profile-icon"
                      src="https://github.com/insooY.png"
                      alt="Profile icon"
                    />
                  </a>
                  <span>양인수</span>
                </li>
                <li>
                  <a
                    href="https://github.com/Gitdonghee"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="profile-icon"
                      src="https://github.com/Gitdonghee.png"
                      alt="Profile icon"
                    />
                  </a>
                  <span>한동희</span>
                </li>
              </ul>
            </div>
            <div className="teamContent">
              {/* <div className="teamLogo">
                <img
                  src="https://camo.githubusercontent.com/dc42bd7ca030fc716579172fe7e093a7e510bd149987a7f5b6ed50b116343a88/68747470733a2f2f63617073756c652d72656e6465722e76657263656c2e6170702f6170693f747970653d776176696e6726636f6c6f723d6175746f266865696768743d3330302673656374696f6e3d68656164657226746578743d25454225423025393825454225414625423825454325424425413925323026666f6e7453697a653d3735"
                  alt="teamLogo"
                  className="teamlogoItem"
                />
                <span className="Teamspan">
                  Team. <strong>반미콩</strong>
                </span>
              </div> */}
              <div className="linkSNS">
                {/* <a
                  href="https://www.notion.so/codestates/db25eab5a8684b1786324e6cd8724852"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RxNotionLogo size={33} />
                </a> */}
                <a
                  href="https://github.com/codestates-seb/seb43_main_009"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="github-icon"
                    src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
                    alt="Profile icon"
                  />

                  {/* <GoMarkGithub size={33} /> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </FooterStyle>
    </>
  );
}

export default Footer;
