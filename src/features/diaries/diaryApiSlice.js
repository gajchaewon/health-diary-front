import { apiSlice } from "../../api/apiSlice";

export const diaryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllDiaries: builder.query({
      query: () => ({
        url: "/community",
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
    deleteDiary: builder.mutation({
      query: (diaryId) => ({
        url: `/diaries/${diaryId}`,
        method: "DELETE",
      }),
    }),
    editDiary: builder.mutation({
      query: ({ diaryId, ...data }) => ({
        url: `/diaries/${diaryId}`,
        method: "PUT",
        body: {
          title: data.title,
          content: data.content,
          isPublic: data.isPublic,
          hashtags: data.hashtags,
        },
      }),
    }),
    getADiary: builder.query({
      query: (diaryId) => ({
        url: `/diaries/${diaryId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllDiariesQuery } = diaryApiSlice;
export const { useLazyGetMyDiariesQuery } = diaryApiSlice;
export const { useGetMyDiariesQuery } = diaryApiSlice;
export const { useAddDiaryMutation } = diaryApiSlice;
export const { useDeleteDiaryMutation } = diaryApiSlice;
export const { useEditDiaryMutation } = diaryApiSlice;
export const { useGetADiaryQuery } = diaryApiSlice;
