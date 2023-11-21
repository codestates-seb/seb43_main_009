import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Axios } from '../utils/api';
import { getUserInfo } from '../utils/UserInfo';

// const API_SERVER = process.env.API_SERVER;

export const fetchUserData = createAsyncThunk(
  'mypage/fetchUserData',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await Axios.get(`/users/${userId}`);
      const userData = response.data;
      console.log(userData);
      return userData;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const updateUserData = createAsyncThunk(
  'mypage/updateUserData',
  async (
    { displayName, email, profileImgUrl },
    { dispatch, rejectWithValue },
  ) => {
    try {
      const userInfo = getUserInfo();
      const userId = userInfo && userInfo.userId;
      await Axios.patch(`/users/${userId}`, {
        userId,
        displayName,
        email,
        profileImgUrl,
      });
      dispatch(fetchUserData(userId));
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
export const uploadUserImage = createAsyncThunk(
  'mypage/uploadUserImage',
  async (imageFile, { dispatch, getState, rejectWithValue }) => {
    try {
      const userInfo = getUserInfo();
      const userId = userInfo && userInfo.userId;

      const formData = new FormData();
      formData.append('image', imageFile);
      formData.append('userId', userId);

      const response = await Axios.post(`/postsToS3`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const imageUrl = response.data.imageUrl;

      if (imageUrl) {
        // Get current user data from the state
        const { displayName, email } = getState().mypage.data;
        // Dispatch updateUserData with all required fields
        dispatch(
          updateUserData({ displayName, email, profileImgUrl: imageUrl }),
        );
      }

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
      })
      .addCase(uploadUserImage.fulfilled, (state, action) => {
        // Assuming that the API returns the URL of the uploaded image
        state.data.profileImgUrl = action.payload.profileImgUrl;
      });
  },
});

export default mypageSlice.reducer;
