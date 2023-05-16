import styled from 'styled-components';

export const CommunityBox = styled.div`
  box-sizing: border-box;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;

  .up-box {
    width: 100vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .button-box {
      width: 70%;
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
        padding: 4px 12px;
        transition-duration: 0.4s;
        background-color: white;
        color: #f06868;
        border: none;
        &:hover {
          background-color: #f06868;
          border: none;
          color: white;
        }
      }
    }

    .title-box {
      border: 1px solid #e0e0e0;
      border-radius: 20px;
      width: 70%;
      height: 70%;
      padding: 16px;
      box-sizing: border-box;
      background-color: #fafafa;
      position: relative;

      input {
        width: 80%;
        border-radius: 4px;
        padding: 4px;
      }

      textarea {
        width: 80%;
        border-radius: 4px;
        padding: 4px;
      }
      .post-info {
        display: flex;
        justify-content: space-between;
        width: 90%;
        font-size: 13px;
        position: absolute;
        bottom: 0;
      }
    }
  }

  .down-box {
    width: 100vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .comment-content {
      border: 1px solid #e0e0e0;
      width: 60%;
      height: 70%;
      font-size: 14px;
      padding: 16px;
      box-sizing: border-box;
      background-color: #f5f5f5;
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      max-height: 500px;
      border-radius: 10px;

      .comment {
        display: flex;
        flex-direction: column;
        padding: 8px 0;
      }

      .comment-text {
        display: flex;
        align-items: baseline;
      }
    }

    .write-box {
      display: flex;
      /* border: 1px solid black; */
      width: 60%;
      justify-content: space-between;
      align-items: center;
      margin-left: 1rem;

      input {
        width: 50vw;
        height: 70%;
        border: 1px solid #e0e0e0;
        border-radius: 10px;
        padding: 4px;
      }

      button {
        background-color: #e0e0e0;
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
