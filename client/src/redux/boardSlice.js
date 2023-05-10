import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_SERVER = process.env.API_SERVER;
// API_SERVER

//userid는 로그인할 때 받아오기
export const submitPost = createAsyncThunk(
  'board/submitPost',
  async ({ title, content, userId }) => {
    try {
      await axios.post(
        `${API_SERVER}/commu/posts`,
        {
          title,
          content,
          userId: 2,
        },
        {
          withCredentials: true,
        },
      );
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
  async ({ commuId, title, content }) => {
    try {
      await axios.patch(
        `${API_SERVER}/commu/${commuId}`,
        {
          title,
          content,
        },
        {
          withCredentials: true,
        },
      );
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
      await axios.delete(`${API_SERVER}/commu/${commuId}`, {
        withCredentials: true,
      });
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const submitComment = createAsyncThunk(
  'board/submitComment',
  async ({ commuId, comment, userId }) => {
    try {
      await axios.post(
        `${API_SERVER}/commu/${commuId}`,
        { comment, userId, commuId },
        {
          withCredentials: true,
        },
      );
      const response = await axios.get(`${API_SERVER}/commu/${commuId}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error(`${API_SERVER}/commu/${commuId}`, error);
    }
  },
);
//쿠키에 토큰값이 저장되서
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
        state.data.createdAt = action.payload.createdAt;
        state.data.displayName = action.payload.displayName;
        state.data.view = action.payload.view;
        state.data.commuId = action.payload.commuId;
        state.data.comments = action.payload.comments;
      })
      .addCase(fetchBoardData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(submitComment.fulfilled, (state, action) => {
        console.log('Payload:', action.payload);
        state.status = 'succeeded';
        state.data.comments = action.payload.comments; // 받아온 댓글 목록을 state에 저장합니다.
      });
  },
});

export default boardSlice.reducer;
