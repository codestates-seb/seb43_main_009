import { createSlice } from '@reduxjs/toolkit';

const surveySlice = createSlice({
  name: 'survey',
  initialState: {
    step: 1,
  },
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { setStep } = surveySlice.actions;
export default surveySlice.reducer;
