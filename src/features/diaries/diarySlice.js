import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  diaries: [
    {
      comments: [],
    },
  ],
  myDiaries: [],
  singleDiary: [],
  error: null,
};

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    getAllDiaries: {
      reducer(state, action) {
        state.diaries = action.payload;
      },
    },
    getMyDiaries: {
      reducer(state, action) {
        state.myDiaries = action.payload;
      },
    },
    getDiary: {
      reducer(state, action) {
        state.singleDiary = action.payload;
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
        // console.log("좋아요 리듀서 : ", state.diaries);
        // console.log("좋아요 리듀서 action.payload : ", action.payload);
        state.diaries[0].likeCount = action.payload.likeCount;
      },
    },
    uploadImg: {
      reducer(state, action) {
        state.diaries = [...state, action.payload];
        console.log(state);
      },
    },
    addComment: {
      reducer(state, action) {
        state.singleDiary.comments.push(action.payload);
      },
    },
    deleteComment: {
      reducer(state, action) {
        const index = state.singleDiary.comments.findIndex(
          (comment) => comment.id === action.payload
        );
        if (index !== -1) {
          state.singleDiary.comments.splice(index, 1);
        }
      },
    },
    editComment: {
      reducer(state, action) {
        const index = state.singleDiary.comments.findIndex(
          (comment) => comment.id === action.payload
        );
        if (index !== -1) {
          state.singleDiary.comments[index] = action.payload;
        }
      },
    },
  },
});

export const selectCurrentDiaries = (state) => state.diary.diaries;
export const selectMyDiaries = (state) => state.diary.myDiaries;
export const selectSingleDiary = (state) => state.diary.singleDiary;
export const {
  getAllDiaries,
  getMyDiaries,
  addDiary,
  deleteDiary,
  editDiary,
  getDiary,
  likeDiary,
  uploadImg,
  addComment,
  deleteComment,
  editComment,
} = diarySlice.actions;
export default diarySlice.reducer;
