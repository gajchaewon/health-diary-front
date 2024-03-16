import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  token: {},
};

// export const login = createAsyncThunk("auth/login", async (initialUser) => {
//   try {
//     const response = await apiSlice.post("auth/login", initialUser);
//     return response.data;
//   } catch (error) {
//     console.error("Login failed", error);
//   }
// });

// const setCookie = (token) => {
//   document.cookie = `refreshToken=${token}; path=/;`;
// };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: {
      reducer(state, action) {
        console.log(action.payload);
        // const { accessToken, refreshToken } = action.payload;
        // state.token = { accessToken, refreshToken };
        state.token = action.payload;
      },
    },
    // logIn: {
    //   reducer(state, action) {
    //     const { userResponse, tokenResponse } = action.payload;
    //     state.userInfo = userResponse;
    //     state.token = tokenResponse.accessToken; //accessToken

    //     setCookie(tokenResponse.refreshToken);
    //   },
    // },
    logOut: (state, action) => {
      state.userInfo = null;
      state.token = null;
    },
  },
});

export const { signUp, logOut } = authSlice.actions;
export default authSlice.reducer;
