import axios from "../../api/apiSlice";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
};

export const setSignup = createAsyncThunk(
  "auth/signup",
  async (initialUser) => {
    try {
      const res = await axios.post("auth/sign-up", initialUser);
      console.log(res);
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const signUpSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    signUp: {
      reducer(state, action) {
        state.userInfo = action.payload;
      },
      prepare(email, nickname, password, profileImage) {
        return {
          payload: {
            email,
            nickname,
            password,
            profileImage,
          },
        };
      },
    },
  },
});

export const { signUp } = signUpSlice.actions;
export default signUpSlice.reducer;
