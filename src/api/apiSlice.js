// //baseUrl 만들어서 api 만들어놓기~
// import Axios from "axios";

// export const axios = Axios.create({
//   baseURL: "http://localhost:8080/",
// });

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut } from "../features/auth/authSlice";

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
  if (result?.error?.originalStatus === 403) {
    const refreshResult = await baseQuery("/refresh", api);
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
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
});
