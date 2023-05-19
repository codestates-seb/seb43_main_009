import { configureStore } from '@reduxjs/toolkit';
import boardSlice from './boardSlice';
import CommunitySlice from './CommuntiySlice';
import authReducer from './authSlice';
import SearchSlice from './SearchSlice';
import surveyReducer from './surveySlice';
import mypageReducer from './MypageSlice';

const store = configureStore({
  reducer: {
    board: boardSlice,
    commu: CommunitySlice,
    auth: authReducer,
    search: SearchSlice,
    survey: surveyReducer,
    mypage: mypageReducer,
  },
});

export default store;
