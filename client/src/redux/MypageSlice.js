import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Axios } from '../utils/api';
import { getUserInfo } from '../utils/UserInfo';

// const API_SERVER = process.env.API_SERVER;

export const fetchUserData = createAsyncThunk(
  'mypage/fetchUserData',
  async (userId, { rejectWithValue }) => {
    try {
      const userInfo = getUserInfo();
      const userId = userInfo && userInfo.userId;
      const response = await Axios.get(`/users/${userId}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const mypageSlice = createSlice({
  name: 'mypage',
  initialState: { data: {}, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add the fetched user to the state
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default mypageSlice.reducer;
