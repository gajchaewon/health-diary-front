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
          imageIds: data.imageIds,
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
          imageIds: data.imageIds,
        },
      }),
    }),
    getADiary: builder.query({
      query: (diaryId) => ({
        url: `/diaries/${diaryId}`,
        method: "GET",
      }),
    }),
    likeDiary: builder.mutation({
      query: (diaryId) => ({
        url: `/diaries/${diaryId}/like`,
        method: "POST",
      }),
    }),
    uploadImage: builder.mutation({
      query: (file) => ({
        url: "/diaries/images",
        method: "POST",
        body: file,
        formdata: true,
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
      }),
    }),
    addComment: builder.mutation({
      qurey: () => ({
        url: "/comment/new",
      }),
    }),
    deleteComment: builder.mutation({
      qurey: () => ({
        url: "/comment/delete",
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
export const { useLikeDiaryMutation } = diaryApiSlice;
export const { useUploadImageMutation } = diaryApiSlice;
