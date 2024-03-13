import { apiSlice } from "../../api/apiSlice";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  diaries: [],
  status: "idle",
  error: null,
};

// export const getAllDiariesP = createAsyncThunk(
//   "diaries/getallDiariesP",
//   async () => {
//     const res = await axios.get("diaries");
//     console.log(res);
//   }
// );

export const getAllDiaries = createAsyncThunk(
  "diaries/getallDiariesP",
  async () => {
    const res = await apiSlice.baseQuery.get("diaries");
    console.log(res);
  }
);

export const addNewDiary = createAsyncThunk(
  "diaries/addNewDiary",
  async (initialDiary) => {
    try {
      const res = await apiSlice.baseQuery.post("new", initialDiary);
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

// export const getDiaryP = createAsyncThunk(
//   "diaries/getDiaryP",
//   async (initialDiary) => {
//     const { diaryId } = initialDiary;
//     const res = await axios.get(`${diaryId}`);
//     console.log(res);
//   }
// );

export const deletePost = createAsyncThunk(
  "diaries/deleteDiary",
  async (initialDiary) => {
    const { diaryId } = initialDiary;
    try {
      const res = await apiSlice.baseQuery.delete(`${diaryId}`);
      if (res?.status === 200) {
        return initialDiary;
      }
      return `${res?.status}: ${res.statusText}`;
    } catch (err) {
      return err.message;
    }
  }
);

export const updateDiary = createAsyncThunk(
  "diaries/updateDiary",
  async (initialDiary) => {
    const { diaryId } = initialDiary;
    try {
      const res = await apiSlice.baseQuery.put(`${diaryId}`, initialDiary);
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

const diarySlice = createSlice({
  name: "diaries",
  initialState,
  reducers: {
    addDiary: {
      reducer(state, action) {
        state.diaries.push(action.payload);
      },
      prepare(diaryId, title, content, isPublic, nickname) {
        return {
          payload: {
            diaryId,
            title,
            content,
            isPublic,
            nickname,
          },
        };
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllDiaries.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllDiaries.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedPosts = action.payload.map((diary) => {
          return diary;
        });
        state.diaries = loadedPosts;
      });
  },
});

export const { addDiary } = diarySlice.actions;
export default diarySlice.reducer;
