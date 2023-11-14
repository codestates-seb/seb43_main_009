import styled from 'styled-components';
import '../variables.css';

const FooterStyle = styled.footer`
  position: relative;
  font-family: 'MaplestoryOTFBold';

  li {
    color: #000000;
    display: inline-block;
    text-align: center;
    margin: 5px 30px;
  }

  .Teamh4 {
    margin-left: 10px;
    font-size: 10px;
    margin-top: 10px;
  }
  li > span {
    display: block;
    text-align: center;
    font-size: 13px;
    color: gray;
    @media only screen and (max-width: 768px) {
      font-size: 10px;
    }
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
    border-top: 1px solid #e0e0e0;
    width: 100%;
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
  .Team {
    display: flex;
    flex-direction: column;
  }
  .Teamul {
    display: flex;
    /* padding-inline-start: 0; */
  }
  .Teamh4 {
    font-size: 15px;
    @media only screen and (max-width: 768px) {
      font-size: 10px;
    }
  }
  .Teamspan {
    font-size: 15px;
    @media only screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
  .profile-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    @media only screen and (max-width: 768px) {
      width: 50px;
      height: 50px;
    }
  }

  .github-icon {
    width: 30px;
    height: 30px;
    border-radius: 50px;
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
    @media only screen and (max-width: 768px) {
      width: 30%;
    }
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
    @media only screen and (max-width: 768px) {
      width: 100px;
    }
  }
  strong {
    font-weight: bold;
    font-size: 20px;
    @media only screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
  .linkSNS {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .linkSNS > a {
    padding: 5px;
    border-radius: 50%;
    color: var(--white);
    cursor: pointer;
  }
  .linkSNS > a:hover {
    color: var(--blackalpha-900);
    background: var(--white);
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;

export default FooterStyle;
