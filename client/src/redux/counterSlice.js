import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const submitPost = createAsyncThunk(
  "counter/submitPost",
  async ({ title, content }, { dispatch }) => {
    try {
      await axios.post(
        "ec2-3-34-134-67.ap-northeast-2.compute.amazonaws.com:8080/posts",
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
        "ec2-3-34-134-67.ap-northeast-2.compute.amazonaws.com:8080/posts",
        error
      );
    }
  }
);
//조회
export const fetchBoardData = createAsyncThunk(
  "counter/fetchBoardData",
  async () => {
    try {
      const response = await axios.get("http://url/commu/commuid");
      return response.data;
    } catch (error) {
      console.error("http://url/commu/commuid", error);
      throw error;
    }
  }
);
//수정
export const updatePost = createAsyncThunk(
  "counter/updatePost",
  async ({ commuId, title, content }, { dispatch }) => {
    try {
      await axios.patch(`http://url/commu/${commuId}`, {
        title,
        content,
      });
    } catch (error) {
      console.error(`http://url/commu/${commuId}`, error);
    }
  }
);
//삭제
export const deletePost = createAsyncThunk(
  "counter/deletePost",
  async (commuId, { rejectWithValue }) => {
    try {
      await axios.delete(`http://url/commu/${commuId}`);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const submitComment = createAsyncThunk(
  "counter/submitComment",
  async ({ commuId, comment }, { dispatch }) => {
    try {
      await axios.post(`http://url/commu/${commuId}`, { comment });
    } catch (error) {
      console.error(`http://url/commu/${commuId}`, error);
    }
  }
);

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
      commentList: [],
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
        state.status = "succeeded";
        state.data.title = action.payload.title;
        state.data.content = action.payload.content;
        state.data.createdAt = action.payload.createdAt;
        state.data.displayName = action.payload.displayName;
        state.data.view = action.payload.view;
        state.data.commuId = action.payload.commuId;
        state.data.commentList = action.payload.commentList;
      })
      .addCase(fetchBoardData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default counterSlice.reducer;
