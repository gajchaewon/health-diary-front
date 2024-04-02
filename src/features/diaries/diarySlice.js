import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  diaries: [],
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
        state.diaries = action.payload;
      },
    },
    addDiary: {
      reducer(state, action) {
        //state.diaries = [...state, action.payload];
        state.diaries.push(action.payload);
      },
    },
    deleteDiary: {
      reducer(state, action) {
        const index = state.diaries.findIndex(
          (diary) => diary.id === action.payload
        );
        if (index !== -1) {
          state.diaries.splice(index, 1);
        }
      },
    },
    editDiary: {
      reducer(state, action) {
        const index = state.diaries.findIndex(
          (diary) => diary.id === action.payload.id
        );
        if (index !== -1) {
          state.diaries[index] = action.payload;
        }
      },
    },
  },
});

export const selectCurrentDiaries = (state) => state.diary.diaries;
export const selectMyDiaries = (state) => state.diary.myDiaries;
export const { getAllDiaries, getMyDiaries, addDiary, deleteDiary, editDiary } =
  diarySlice.actions;
export default diarySlice.reducer;
