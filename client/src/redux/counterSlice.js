import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const submitPost = createAsyncThunk(
  "counter/submitPost",
  async ({ title, content }, { dispatch }) => {
    try {
      await axios.post("http://url/commu/posts", {
        title,
        content,
      });
    } catch (error) {
      console.error("http://url/commu/posts", error);
    }
  }
);

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

export const deletePost = createAsyncThunk(
  "counter/deletePost",
  async (commuId, { rejectWithValue }) => {
    try {
      await axios.delete(`http://url/commu/posts/${commuId}`);
    } catch (error) {
      return rejectWithValue(error.response.data);
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
