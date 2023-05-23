import { configureStore } from '@reduxjs/toolkit';
import boardSlice from './boardSlice';
import CommunitySlice from './CommuntiySlice';

const store = configureStore({
  reducer: { board: boardSlice, commu: CommunitySlice },
});

export default store;
