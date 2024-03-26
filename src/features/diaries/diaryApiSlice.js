import { apiSlice } from "../../api/apiSlice";

export const diaryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllDiaries: builder.query({
      query: () => ({
        url: "/diaries",
        method: "GET",
      }),
    }),
    getMyDiaries: builder.query({
      query: () => ({
        url: "/diaries/my",
        method: "GET",
      }),
    }),
    addDiary: builder.mutation({
      query: (data) => ({
        url: "/diaries",
        method: "POST",
        body: {
          title: data.title,
          content: data.content,
          isPublic: data.isPublic,
          hashtags: data.hashtags,
        },
      }),
    }),
  }),
});

export const { useGetAllDiariesQuery } = diaryApiSlice;
export const { useGetMyDiariesQuery } = diaryApiSlice;
export const { useAddDiaryMutation } = diaryApiSlice;
