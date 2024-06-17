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

const baseQueryWithReAuth = async (args, api) => {
  let result = await baseQuery(args, api);
  if (result?.error?.data !== null) {
    if (result?.error?.data.error === "EXPIRED_TOKEN") {
      const refreshResult = await baseQuery("/auth/refresh-token", api);
      const userResponse = api.getState().auth.userInfo;

      const tokenResponse = {
        accessToken: refreshResult.data?.accessToken,
        refreshToken: null,
      };

      api.dispatch(logIn({ tokenResponse, userResponse }));
      result = await baseQuery(args, api);
    } else if (
      [
        "WRONG_TYPE_TOKEN",
        "UNSUPPORTED_TOKEN",
        "UNKNOWN_ERROR",
        "ACCESS_DENIED",
      ].includes(result?.error?.data.error)
    ) {
      alert("오류로 인해 로그아웃됩니다.");
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
});
