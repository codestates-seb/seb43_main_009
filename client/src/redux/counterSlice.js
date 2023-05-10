import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//userid는 로그인할 때 받아오기
export const submitPost = createAsyncThunk(
  "counter/submitPost",
  async ({ title, content }) => {
    try {
      await axios.post(
        "http://ec2-3-34-134-67.ap-northeast-2.compute.amazonaws.com:8080/commu/posts",
        {
          title,
          content,
          userId: 1,
        },
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error(
        "http://ec2-3-34-134-67.ap-northeast-2.compute.amazonaws.com:8080/commu/posts",
        error
      );
    }
  }
);
//조회
export const fetchBoardData = createAsyncThunk(
  "counter/fetchBoardData",
  async (commuId) => {
    try {
      const response = await axios.get(
        `http://ec2-3-34-134-67.ap-northeast-2.compute.amazonaws.com:8080/commu/${commuId}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      console.error(
        `http://ec2-3-34-134-67.ap-northeast-2.compute.amazonaws.com:8080/commu/${commuId}`,
        error
      );
      throw error;
    }
  }
);
//수정
export const updatePost = createAsyncThunk(
  "counter/updatePost",
  async ({ commuId, title, content }) => {
    try {
      await axios.patch(
        `http://ec2-3-34-134-67.ap-northeast-2.compute.amazonaws.com:8080/commu/${commuId}`,
        {
          title,
          content,
        },
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error(
        `http://ec2-3-34-134-67.ap-northeast-2.compute.amazonaws.com:8080/commu/${commuId}`,
        error
      );
    }
  }
);
//삭제
export const deletePost = createAsyncThunk(
  "counter/deletePost",
  async (commuId, { rejectWithValue }) => {
    try {
      await axios.delete(
        `http://ec2-3-34-134-67.ap-northeast-2.compute.amazonaws.com:8080/commu/${commuId}`,
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const submitComment = createAsyncThunk(
  "counter/submitComment",
  async ({ commuId, comment }) => {
    try {
      await axios.post(
        `http://ec2-3-34-134-67.ap-northeast-2.compute.amazonaws.com:8080/commu/${commuId}`,
        { comment, userId: 1, commuId },
        {
          withCredentials: true,
        }
      );
      const response = await axios.get(
        `http://ec2-3-34-134-67.ap-northeast-2.compute.amazonaws.com:8080/commu/${commuId}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      console.error(
        `http://ec2-3-34-134-67.ap-northeast-2.compute.amazonaws.com:8080/commu/${commuId}`,
        error
      );
    }
  }
);
//쿠키에 토큰값이 저장되서
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    data: {
      title: "",
      content: "",
      createdAt: "",
      displayName: "",
      view: 0,
      commuId: 0,
      comments: [],
    },
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchBoardData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBoardData.fulfilled, (state, action) => {
        console.log("Payload:", action.payload);
        state.status = "succeeded";
        state.data.title = action.payload.title;
        state.data.content = action.payload.content;
        state.data.createdAt = action.payload.createdAt;
        state.data.displayName = action.payload.displayName;
        state.data.view = action.payload.view;
        state.data.commuId = action.payload.commuId;
        state.data.comments = action.payload.comments;
      })
      .addCase(fetchBoardData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(submitComment.fulfilled, (state, action) => {
        console.log("Payload:", action.payload);
        state.status = "succeeded";
        state.data.comments = action.payload.comments; // 받아온 댓글 목록을 state에 저장합니다.
      });
  },
});

export default counterSlice.reducer;
