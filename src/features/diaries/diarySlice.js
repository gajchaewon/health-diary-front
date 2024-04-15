import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  diaries: [],
  myDiaries: [],
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
        state.myDiaries = action.payload;
      },
    },
    getDiary: {
      reducer(state, action) {
        const newDiary = action.payload;
        console.log(newDiary);
        state.diaries = state.diaries.filter(
          (diary) => diary.id === newDiary.id
        );
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

    likeDiary: {
      reducer(state, action) {
        console.log("좋아요 리듀서 : ", state.diaries);
        console.log("좋아요 리듀서 action.payload : ", action.payload);
        state.diaries[0].likeCount = action.payload.likeCount;
      },
    },

    uploadImg: {
      reducer(state, action) {
        state.diaries = [...state, action.payload];
        console.log(state);
      },
    },
  },
});

export const selectCurrentDiaries = (state) => state.diary.diaries;
export const selectMyDiaries = (state) => state.diary.myDiaries;
export const {
  getAllDiaries,
  getMyDiaries,
  addDiary,
  deleteDiary,
  editDiary,
  getDiary,
  likeDiary,
  uploadImg,
} = diarySlice.actions;
export default diarySlice.reducer;
