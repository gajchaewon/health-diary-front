import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  diaries: {},
  error: null,
};

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    getAllDiaries: {
      reducer(state, action) {
        const content = action.payload;
        state.diaries = content;
        console.log(state.diaries);
      },
    },
  },
});

export const selectCurrentDiaries = (state) => state.diary.diaries;
export const { getAllDiaries } = diarySlice.actions;
export default diarySlice.reducer;
