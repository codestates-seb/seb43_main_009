import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: counterSlice,
  middleware: [...middlewares],
});
