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
        state.diaries = action.payload;
      },
    },
    getDiary: {
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
    likeDiary: {
      reducer(state, action) {
        const index = state.diaries.findIndex(
          (diary) => diary.id === action.payload.id
        );
        if (index === -1) {
          state.diaries.push(action.payload); // 좋아요를 누르지 않은 경우, 다이어리 객체를 배열에 추가
        } else {
          state.diaries.splice(index, 1); // 이미 좋아요를 누른 경우, 다이어리 객체를 배열에서 제거
        }
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
