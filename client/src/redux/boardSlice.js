import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Axios } from '../utils/api'; // Import your custom Axios instance
import { GetCommulist } from './CommuntiySlice';
import { getUserInfo } from '../utils/UserInfo';

//글쓰기
export const submitPost = createAsyncThunk(
  'board/submitPost',
  async ({ title, content }, { dispatch, rejectWithValue }) => {
    try {
      const userInfo = getUserInfo();
      const userId = userInfo && userInfo.userId;
      await Axios.post('/commu/posts', { title, content, userId });
      dispatch(GetCommulist());
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
//글 상세조회
export const fetchBoardData = createAsyncThunk(
  'board/fetchBoardData',
  async (commuId, { rejectWithValue }) => {
    try {
      const response = await Axios.get(`/commu/${commuId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
//글 수정
export const updatePost = createAsyncThunk(
  'board/updatePost',
  async ({ commuId, title, content }, { dispatch, rejectWithValue }) => {
    try {
      await Axios.patch(`/commu/${commuId}`, { commuId, title, content });
      dispatch(fetchBoardData(commuId));
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
//글 삭제
export const deletePost = createAsyncThunk(
  'board/deletePost',
  async (commuId, { rejectWithValue }) => {
    try {
      await Axios.delete(`/commu/${commuId}`);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
//댓글달기
export const submitComment = createAsyncThunk(
  'board/submitComment',
  async ({ commuId, comment }, { dispatch, rejectWithValue }) => {
    try {
      const userInfo = getUserInfo();
      const userId = userInfo && userInfo.userId;
      await Axios.post(`/commu/${commuId}`, { comment, userId, commuId });
      const response = await Axios.get(`/commu/${commuId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const checkToken = createAsyncThunk('board/checkToken', async () => {
  const token = localStorage.getItem('accessToken');
  return token;
});

//쿠키에 토큰값이 저장돼서
export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    data: {},
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchBoardData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBoardData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
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
      })
      .addCase(checkToken.fulfilled, (state, action) => {
        state.token = action.payload;
      });
  },
});

export default boardSlice.reducer;
