import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_SERVER = process.env.API_SERVER;
// API_SERVER

//commu 전체 조회하기
export const GetSearch = createAsyncThunk('search/result', async (params) => {
  try {
    const response = await axios.get(
      `${API_SERVER}/search?itemName=${params}`,
      {
        withCredentials: true,
      },
    );
    console.log(`${API_SERVER}/search?itemName=${params}`);
    return response.data;
  } catch (error) {
    console.error('fail', error);
    throw error;
  }
});

export const SearchSlice = createSlice({
  name: 'search',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
    reducers: {},
  },
  extraReducers: (builder) => {
    builder

      .addCase(GetSearch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(GetSearch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(GetSearch.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default SearchSlice.reducer;
