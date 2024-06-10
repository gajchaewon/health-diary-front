import { apiSlice } from "../../api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  tagTypes: ["Follow", "FollowUser"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (userId) => ({
        url: "/users",
        method: "GET",
        params: { userId },
      }),
      providesTags: ["Follow"],
    }),
    getFollowers: builder.query({
      query: (userId) => ({
        url: `users/follow/${userId}/follower`,
        method: "GET",
      }),
      providesTags: ["Follow", "FollowUser"],
    }),
    getFollowings: builder.query({
      query: (userId) => ({
        url: `users/follow/${userId}/following`,
        method: "GET",
      }),
      providesTags: ["Follow", "FollowUser"],
    }),
    following: builder.mutation({
      query: (userId) => ({
        url: `/users/follow/${userId}`,
        method: "POST",
      }),
      invalidatesTags: ["Follow", "FollowUser"],
    }),
    unfollowing: builder.mutation({
      query: (userId) => ({
        url: `/users/follow/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Follow", "FollowUser"],
    }),
  }),
});

export const { useGetUserQuery } = userApiSlice;
export const { useGetFollowersQuery } = userApiSlice;
export const { useGetFollowingsQuery } = userApiSlice;
export const { useFollowingMutation } = userApiSlice;
export const { useUnfollowingMutation } = userApiSlice;
