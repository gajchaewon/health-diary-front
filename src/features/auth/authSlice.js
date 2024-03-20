import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  token: {},
};

const setCookie = (token) => {
  document.cookie = `refreshToken=${token}; path=/;`;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: {
      reducer(state, action) {
        console.log(action.payload);
        const { accessToken, refreshToken } = action.payload;
        state.token = { accessToken, refreshToken };
        state.token = action.payload;
      },
    },
    logIn: {
      reducer(state, action) {
        const { tokenResponse, userResponse } = action.payload;
        state.userInfo = userResponse;
        state.token = tokenResponse.accessToken; //accessToken
        console.log(action.payload);
        setCookie(tokenResponse.refreshToken);
      },
    },
    logOut: {
      reducer(state, action) {
        state.userInfo = null;
        state.token = null;
      },
    },
  },
});

export const selectCurrentUser = (state) => state.auth.userInfo;
export const selectCurrentToken = (state) => state.auth.token;

export const { signUp, logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
