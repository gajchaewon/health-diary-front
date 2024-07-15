import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logIn, logOut } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const accessToken = getState().auth.token;
    if (accessToken && typeof accessToken === "string") {
      headers.set("authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const errorConditions = {
  EXPIRED_TOKEN: "EXPIRED_TOKEN",
  WRONG_TYPE_TOKEN: "WRONG_TYPE_TOKEN",
  UNSUPPORTED_TOKEN: "UNSUPPORTED_TOKEN",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
  REFRESH_TOKEN_NULL: "AUTH_001",
  TOKEN_NOT_FOUND: "AUTH_002",
  TOKEN_EXTRACT_FAILED: "AUTH_003",
  TOKEN_NOT_VALID: "AUTH_004",
  REFRESH_LOGOUT: "AUTH_005",
  REFRESH_FAILED: "AUTH_006",
};

const baseQueryWithReAuth = async (args, api) => {
  let result = await baseQuery(args, api);
  if (result.error?.data.errorCode !== null) {
    const errorCode = result.error?.data.errorCode;
    // 기본적으로 만료되었을 때 리프레시
    if (errorCode === errorConditions.EXPIRED_TOKEN) {
      const refreshResult = await baseQuery("/auth/refresh-token", api);
      const userResponse = api.getState().auth.userInfo;
      if (refreshResult?.data) {
        const tokenResponse = {
          accessToken: refreshResult.data.accessToken,
          refreshToken: refreshResult.data.refreshToken,
        };
        api.dispatch(logIn({ tokenResponse, userResponse }));
        result = await baseQuery(args, api);
      } else {
        alert("로그인 정보가 만료되었습니다. 다시 로그인 해주세요.");
        api.dispatch(logOut());
        window.location = "/";
      }
    } else if (Object.values(errorConditions).includes(errorCode)) {
      alert("다시 로그인 해주세요.");
      api.dispatch(logOut());
      window.location = "/";
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
});
