import styled from "styled-components";
import "../variables.css";

const FooterStyle = styled.footer`
  position: relative;
  font-family: "Noto Sans KR", sans-serif;
  li {
    color: #000000;
    display: inline-block;
    text-align: center;
    margin: 0px 10px;
  }
  h3 {
    font-size: 25px;
    font-weight: bold;
    margin-left: 1em;
  }
  h4 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  li > span {
    display: block;
    text-align: center;
    font-size: 16px;
    margin-bottom: 20px;
  }
  .content-template {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--mint-400);
    background-color: var(--blackalpha-800);
  }
  .content {
    background-color: #d9d9d9;
    width: 100%;
    padding: 50px 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: var(--blackalpha-900);
    color: var(--gray-600);
  }
  .content > .frontTeam,
  .backteam {
    display: flex;
    flex-direction: column;
  }
  .frontTeam {
    display: flex;
    flex-direction: column;
  }
  .profile-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .footerLogo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo {
    padding: 15px;
    border-radius: 20px;
    background: var(--gray-200);
    box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.5),
      0px 0px 20px rgba(0, 0, 0, 0.2), 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
  .logoImg {
    width: 100px;
    height: 100px;
  }
  .teamContent {
    display: flex;
  }
  .teamLogo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .teamlogoItem {
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
    margin-bottom: 10px;
    width: 150px;
    border-radius: 10px;
  }
  strong {
    font-weight: bold;
    font-size: 23px;
  }
  .linkSNS {
    width: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .linkSNS > a {
    padding: 5px;
    border-radius: 50%;
    color: var(--white);
    border: 1px solid var(--gray-600);
    cursor: pointer;
  }
  .linkSNS > a:hover {
    color: var(--blackalpha-900);
    background: var(--white);
  }
`;

export default FooterStyle;
