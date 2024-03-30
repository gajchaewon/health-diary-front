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
      query: ({ option, searchValue }) => ({
        url: `/diaries/my`,
        method: "GET",
        params: {
          searchType: option,
          searchValue: searchValue,
        },
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
export const { useLazyGetMyDiariesQuery } = diaryApiSlice;
export const { useGetMyDiariesQuery } = diaryApiSlice;
export const { useAddDiaryMutation } = diaryApiSlice;
