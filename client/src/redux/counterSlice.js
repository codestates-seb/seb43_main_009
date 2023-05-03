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

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    plus: (state) => {
      state.value += 1;
    },
    minus: (state) => {
      state.value -= 1;
    },
  },
});

export const { plus, minus } = counterSlice.actions;
export default counterSlice.reducer;
