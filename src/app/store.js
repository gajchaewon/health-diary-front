import { configureStore } from "@reduxjs/toolkit";
import diaryReducer from "../features/diaries/diarySlice";
import signUpReducer from "../features/auth/signUpSlice";

export const store = configureStore({
  reducer: {
    diaries: diaryReducer,
    signup: signUpReducer,
  },
});
