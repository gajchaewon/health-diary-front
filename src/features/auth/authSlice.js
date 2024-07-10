import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  token: {},
};

const setCookie = (token) => {
  document.cookie = `refreshToken=${token}; path=/;`;
};

const deleteCookie = (name) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: {
      reducer(state, action) {
        const { accessToken, refreshToken } = action.payload;
        state.token = { accessToken, refreshToken };
      },
    },
    logIn: {
      reducer(state, action) {
        const { tokenResponse, userResponse } = action.payload;
        state.userInfo = userResponse;
        state.token = tokenResponse.accessToken; //accessToken
        if (tokenResponse.refreshToken !== null) {
          setCookie(tokenResponse.refreshToken);
        }
      },
    },
    logOut: {
      reducer(state, action) {
        console.log(state);
        //deleteCookie(state.token);
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
