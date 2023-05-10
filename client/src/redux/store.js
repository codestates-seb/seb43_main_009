import { configureStore } from '@reduxjs/toolkit';
import boardSlice from './boardSlice';

const store = configureStore({
  reducer: { counter: boardSlice },
});

export default store;
