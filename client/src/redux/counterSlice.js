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
    const response = await fetch("http://url/commu/commuid");
    const data = await response.json();
    return data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    data: [],
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
        state.data = action.payload;
      })
      .addCase(fetchBoardData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default counterSlice.reducer;
