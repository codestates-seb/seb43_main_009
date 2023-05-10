import styled from 'styled-components';

const CommunityBox = styled.div`
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

    .button-box {
      width: 70%;
      display: flex;
      justify-content: flex-end;

      button {
        background-color: #f06868;
        border: none;
        color: white;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 12px;
        padding: 8px 24px;
        transition-duration: 0.4s;

        &:hover {
          background-color: white;
          color: #f06868;
          border: 1px solid #f06868;
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

      input {
        width: 80%;
      }

      textarea {
        width: 80%;
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

    .comment-content {
      border: 1px solid #e0e0e0;
      width: 60%;
      height: 30%;
      font-size: 14px;
      padding: 16px;
      box-sizing: border-box;
      background-color: #f5f5f5;
      margin-bottom: 2rem;
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
