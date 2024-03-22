import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import diaryReducer from "../features/diaries/diarySlice";
import authReducer from "../features/auth/authSlice";
import { apiSlice } from "../api/apiSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

// Redux Persist 설정
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "diary"], // 지속할 리듀서 목록
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    diary: diaryReducer,
    auth: authReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
  devTools: true,
});

// Redux Persist를 설정된 store에 연결
export const persistor = persistStore(store);

setupListeners(store.dispatch);
