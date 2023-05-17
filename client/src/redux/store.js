import { configureStore } from '@reduxjs/toolkit';
import boardSlice from './boardSlice';
import CommunitySlice from './CommuntiySlice';
import authReducer from './authSlice';
import SearchSlice from './SearchSlice';
import surveyReducer from './surveySlice';

const store = configureStore({
  reducer: {
    board: boardSlice,
    commu: CommunitySlice,
    auth: authReducer,
    search: SearchSlice,
    survey: surveyReducer,
  },
});

export default store;
