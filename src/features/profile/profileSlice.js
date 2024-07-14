import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  diaries: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getLikedDiaries: {
      reducer(state, action) {
        state.diaries = action.payload;
      },
    },
  },
});

export const { getLikedDiaries } = profileSlice.actions;
export default profileSlice.reducer;
