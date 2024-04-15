import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logIn, logOut } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const accessToken = getState().auth.token;
    if (accessToken) {
      headers.set("authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (args, api) => {
  let result = await baseQuery(args, api);
  // console.log(result.meta);
  // const isAuthenticated = result.meta.response.headers.get(
  //   "Authenticationfailed"
  // );
  // if (!isAuthenticated) {
  //   const refreshResult = await baseQuery("/auth/refresh-token", api);
  //   console.log(refreshResult);
  //   if (refreshResult?.data) {
  //     const userInfo = api.getState().auth.userInfo;
  //     api.dispatch(logIn({ ...refreshResult.data, userInfo }));
  //     result = await baseQuery(args, api);
  //   } else {
  //     api.dispatch(logOut());
  //   }
  // }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
});
