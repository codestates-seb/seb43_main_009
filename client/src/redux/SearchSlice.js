import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_SERVER = process.env.API_SERVER;
// API_SERVER

export const GetSearch = createAsyncThunk('search/result', async (params) => {
  try {
    const token = localStorage.getItem('accessToken');
    const config = {
      withCredentials: true,
    };
    if (token) {
      config.headers = {
        Authorization: `${token}`,
      };
    }
    const response = await axios.get(`${API_SERVER}/search?itemName=${params}`);
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
    params: '',
    status: 'idle',
    error: null,
  },
  reducers: {
    SetParams: (state, action) => {
      state.params = action.payload;
    },
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

export const { SetParams } = SearchSlice.actions;

export default SearchSlice.reducer;
