import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GetCommulist } from './CommuntiySlice';
import { useSelector, useDispatch } from 'react-redux';
import { getUserInfo } from '../utils/UserInfo';

const API_SERVER = process.env.API_SERVER;
// API_SERVER

//userid는 로그인할 때 받아오기
export const submitPost = createAsyncThunk(
  'board/submitPost',
  async ({ title, content }, { dispatch }) => {
    try {
      const token = localStorage.getItem('accessToken');
      const userInfo = getUserInfo();
      const userId = userInfo && userInfo.userId;
      await axios.post(
        `${API_SERVER}/commu/posts`,
        {
          title,
          content,
          userId,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
          withCredentials: true,
        },
      );
      // const dispatch = useDispatch();
      dispatch(GetCommulist());
    } catch (error) {
      console.error(`${API_SERVER}/commu/posts`, error);
    }
  },
);
//조회
export const fetchBoardData = createAsyncThunk(
  'board/fetchBoardData',
  async (commuId) => {
    try {
      console.log(`${API_SERVER}/commu/${commuId}`);

      const response = await axios.get(`${API_SERVER}/commu/${commuId}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error(`${API_SERVER}/commu/${commuId}`, error);
      throw error;
    }
  },
);
//수정
export const updatePost = createAsyncThunk(
  'board/updatePost',
  async ({ commuId, title, content }, { dispatch }) => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.patch(
        `${API_SERVER}/commu/${commuId}`,
        { commuId, title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        },
      );
      // const dispatch = useDispatch();
      // dispatch(fetchBoardData());
      // return response.data;
      dispatch(fetchBoardData(commuId));
    } catch (error) {
      console.error(`${API_SERVER}/commu/${commuId}`, error);
    }
  },
);

//삭제
export const deletePost = createAsyncThunk(
  'board/deletePost',
  async (commuId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('accessToken');
      await axios.delete(`${API_SERVER}/commu/${commuId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const submitComment = createAsyncThunk(
  'board/submitComment',
  async ({ commuId, comment }, { dispatch }) => {
    try {
      const token = localStorage.getItem('accessToken');
      const userInfo = getUserInfo();
      const userId = userInfo && userInfo.userId;
      await axios.post(
        `${API_SERVER}/commu/${commuId}`,
        { comment, userId, commuId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        },
      );
      // dispatch(fetchBoardData(commuId));
      const response = await axios.get(`${API_SERVER}/commu/${commuId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error(`${API_SERVER}/commu/${commuId}`, error);
      throw error;
    }
  },
);
//쿠키에 토큰값이 저장돼서
export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    data: {
      title: '',
      content: '',
      createdAt: '',
      displayName: '',
      view: 0,
      commuId: 0,
      comments: [],
    },
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchBoardData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBoardData.fulfilled, (state, action) => {
        console.log('Payload:', action.payload);
        state.status = 'succeeded';
        state.data.title = action.payload.title;
        state.data.content = action.payload.content;
        state.data.createAt = action.payload.createAt;
        state.data.displayName = action.payload.displayName;
        state.data.view = action.payload.view;
        state.data.commuId = action.payload.commuId;
        // state.data.comments = action.payload.comments;
      })
      .addCase(fetchBoardData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(submitComment.fulfilled, (state, action) => {
        console.log('Payload:', action.payload);
        state.status = 'succeeded';
        state.data.comments = action.payload.comments; // 받아온 댓글 목록을 state에 저장합니다.
      })
      .addCase(submitComment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default boardSlice.reducer;
