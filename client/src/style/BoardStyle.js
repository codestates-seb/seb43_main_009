import styled from 'styled-components';
import picture from '../../public/pencil.png';
import { keyframes } from 'styled-components';
import pastel from '../../public/acrylic.jpg';
const float = keyframes`
  0% {
    transform: translateX(0px) translateY(0px);
  }
  25% {
    transform: translateX(-3px) translateY(0px);
  }
  35% {
    transform: translateX(0px) translateY(0px);
  }
  50% {
    transform: translateX(5px) transla gteY(0px);
  }
  73% {
    transform: translateX(-5px) translateY(0px);
  }
  100% {
    transform: translateX(0px) translateY(0px);
  }
`;
const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.02);
  }
  50% {
    transform: scale(1.04);
  }
  75% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
`;
export const CommunityBox = styled.div`
  box-sizing: border-box;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  .up-box {
    width: 100vw;
    height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    /* margin-top: 3rem;
    margin-bottom: 2rem; */
    /* background-color: #ed8787; */
    background-image: url(${pastel});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;

    .button-box {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      button {
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 12px;
        padding: 5px 12px;
        transition-duration: 0.4s;
        /* background-color: white; */
        color: var(--bluish-gray-500);
        border: none;
        &:hover {
          border: none;
          color: var(--peach-500);
        }
      }
    }

    .title-box {
      /* border: 1px solid #e0e0e0; */
      display: flex;
      flex-direction: column;
      border-radius: 20px;
      width: 70%;
      min-height: 100%;
      padding: 16px;
      box-sizing: border-box;
      position: relative;
      margin-bottom: 20px;
      white-space: pre-wrap;
      height: 300px;
      /* background-color: white; */

      .retouch-box {
        overflow-y: auto;
        overflow-x: hidden;

        span {
          font-size: x-large;
          font-weight: 600;
          padding: 1rem;
        }
        .retouch-title {
          border-bottom: 1px solid #e0e0e0;
          margin-bottom: 1rem;
          input {
            background-color: #e0e0e0;
            :focus {
              outline: none;
              font-size: x-large;
              font-weight: 600;
              background-color: #e0e0e0;
            }
          }
        }
        .retouch-content {
          /* border: 1px solid #e0e0e0; */
          margin-top: 1rem;
          textarea {
            background-color: #e0e0e0;

            :focus {
              outline: none;
              background-color: #e0e0e0;
            }
          }
        }
      }

      .content {
        /* overflow: auto; */
        flex-grow: 1;
      }

      .content h3 {
        padding: 10px;
        font-size: 24px;
        font-weight: 800;
        color: #333;
        margin-bottom: 20px;
      }

      .content p {
        padding: 10px;
        font-size: 16px;
        color: #666;
        line-height: 1.6;
        word-break: break-all;
      }
      input {
        width: 80%;
        height: 10%;
        border-radius: 4px;
        padding: 10px;
        opacity: 0.8;
        font-size: large;
        border: none;
      }

      textarea {
        width: 100%;
        height: 30vh;
        border-radius: 4px;
        padding: 10px;
        font-size: large;
        opacity: 0.8;
        border: none;
        overflow-wrap: break-word;
        resize: vertical;
      }
      .post-info {
        display: flex;
        justify-content: space-between;
        width: 90%;
        font-size: 15px;
        position: absolute;
        bottom: 0;
        color: var(--bluish-gray-500);
        margin-bottom: 1rem;
      }
    }
  }

  .down-box {
    width: 100vw;
    /* height: 30vh; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .comment-content {
      /* border: 1px solid #e0e0e0; */
      width: 60%;
      /* height: 70%; */
      font-size: 14px;
      padding: 16px;
      box-sizing: border-box;
      background-color: #f5f5f5;
      margin: 50px 30px;
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      z-index: 2;
      .comment {
        display: flex;
        flex-direction: column;
        padding: 10px 0;
        border-bottom: 1px solid #e0e0e0;
      }

      .comment-text {
        display: flex;
        align-items: baseline;
      }
    }

    .write-box {
      display: flex;
      /* border: 1px solid black; */
      /* width: 70%; */
      justify-content: space-between;
      align-items: center;
      margin-left: 1rem;
      position: relative;
      margin-bottom: 80px;

      input {
        width: 50vw;
        height: 70%;
        border: 1px solid #e0e0e0;
        border-radius: 10px;
        padding: 4px;
        &:focus {
          border-color: #8c9cba;
          outline: none;
        }
      }

      button {
        background-color: #ed8787;
        border: none;
        color: white;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 12px;
        padding: 8px 24px;
        transition-duration: 0.4s;

        &:hover {
          background-color: #f06868;
          color: white;
        }
      }
    }
  }
`;

export const Author = styled.span`
  font-weight: bold;
  color: #f06868;
  font-size: 14px;
`;

export const CommentText = styled.span`
  font-size: 14px;
  color: #444;
  margin-left: 1rem;
  background-color: #f5f5f5;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Timestamp = styled.span`
  font-size: 12px;
  color: #999;
  display: inline-block;
  margin-top: 4px;
`;

export const ImgBox = styled.div`
  width: 15%;
  height: 200px;
  background-image: url(${picture});
  background-size: 200px;
  /* background-position: center; */
  background-repeat: no-repeat;
  animation: ${float} 5s ease-in infinite;
  position: fixed;
  bottom: 15;
  right: 0;
  z-index: 1;

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: transparent;
  text-align: calc();
  font-size: 0.9rem;
  margin-left: 100px;

  &:hover {
    color: var(--gray-600); // 텍스트 색상
    animation: ${hoverAnimation} 2s linear infinite;
  }

  &::after {
    content: '나도 글쓰러 가기!'; // hover시 표시될 텍스트
    display: block;
    width: 100%;
    margin-bottom: 200px;
    margin-left: 50px;
    font-family: 'MaplestoryOTFBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFBold.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;
