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
    getMyDiaries: {
      reducer(state, action) {
        const content = action.payload;
        state.diaries = content;
      },
    },
    addDiary: {
      reducer(state, action) {
        state.diaries = action.payload;
        console.log(state.diaries);
      },
    },
  },
});

export const selectCurrentDiaries = (state) => state.diary.diaries;
export const selectMyDiaries = (state) => state.diary.myDiaries;
export const { getAllDiaries, getMyDiaries, addDiary } = diarySlice.actions;
export default diarySlice.reducer;
