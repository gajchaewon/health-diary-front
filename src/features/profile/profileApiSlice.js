import { apiSlice } from "../../api/apiSlice";

export const profileApiSlice = apiSlice.injectEndpoints({
  tagTypes: ["Like", "Comment"],
  endpoints: (builder) => ({
    getLikedDiary: builder.query({
      query: ({ page, size }) => ({
        url: "/diaries/liked",
        method: "GET",
        params: {
          page: page,
          size: size,
        },
      }),
      providesTags: ["Like"],
    }),
    getCommentedDiary: builder.query({
      query: () => ({
        url: `/comment/all`,
        method: "GET",
      }),
      providesTags: ["Comment"],
    }),
  }),
});

export const { useGetLikedDiaryQuery } = profileApiSlice;
export const { useGetCommentedDiaryQuery } = profileApiSlice;
