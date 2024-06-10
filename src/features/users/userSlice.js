import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserInfo: {
      reducer(state, action) {
        state.userInfo = action.payload;
      },
    },
  },
});

//export const selectUserInfo = (state) => state.user.userInfo;

export const { getUserInfo } = userSlice.actions;
export default userSlice.reducer;
