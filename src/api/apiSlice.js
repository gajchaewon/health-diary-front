import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const accessToken = getState().auth.token;
    if (accessToken.constructor !== Object && accessToken) {
      headers.set("authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (args, api) => {
  let result = await baseQuery(args, api);
  if (result?.error?.originalStatus === 403) {
    const refreshResult = await baseQuery("/refresh-token", api);
    if (refreshResult?.data) {
      //const userInfo = api.getState().auth.userInfo;
      //api.dispatch(logIn({ ...refreshResult.data, userInfo }));
      result = await baseQuery(args, api);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
});
