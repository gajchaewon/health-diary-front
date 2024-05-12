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
    logout: builder.query({
      query: () => ({
        url: "/auth/logout",
        method: "GET",
      }),
    }),
    emailCheck: builder.query({
      query: (email) => ({
        url: "/auth/check-email",
        method: "GET",
        params: { email },
      }),
    }),
    nicknameCheck: builder.query({
      query: (nickname) => ({
        url: "/auth/check-nickname",
        method: "GET",
        params: { nickname },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
export const { useLazyLogoutQuery } = authApiSlice;
export const { useSignupMutation } = authApiSlice;
export const { useLazyEmailCheckQuery } = authApiSlice;
export const { useLazyNicknameCheckQuery } = authApiSlice;
