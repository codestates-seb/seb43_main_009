import { configureStore } from '@reduxjs/toolkit';
import boardSlice from './boardSlice';
import CommunitySlice from './CommuntiySlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: { board: boardSlice, commu: CommunitySlice, auth: authReducer },
});

export default store;
