import { apiSlice } from "../../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: {
          email: data.email,
          password: data.password,
          nickname: data.nickname,
        },
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: {
          email: data.email,
          password: data.password,
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
export const { useSignupMutation } = authApiSlice;
