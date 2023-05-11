import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_SERVER = process.env.API_SERVER;
// API_SERVER

//commu 전체 조회하기
export const GetCommulist = createAsyncThunk('commu/GetCommulist', async () => {
  try {
    const response = await axios.get(
      'https://server.dowajoyak.shop/commu/all',
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    console.error('fail', error);
    throw error;
  }
});

export const CommunitySlice = createSlice({
  name: 'commu',
  initialState: {
    data: [],

    status: 'idle',
    error: null,
    reducers: {},
  },
  extraReducers: (builder) => {
    builder

      .addCase(GetCommulist.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(GetCommulist.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(GetCommulist.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default CommunitySlice.reducer;
