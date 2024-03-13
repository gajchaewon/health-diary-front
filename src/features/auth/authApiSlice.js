import { apiSlice } from "../../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: {
          email: data.email,
          userPassword: data.userPassword,
          nickname: data.nickname,
        },
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
export const { useSignupMutation } = authApiSlice;
