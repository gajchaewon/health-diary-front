import { apiSlice } from "../../api/apiSlice";

export const diaryApiSlice = apiSlice.injectEndpoints({
  tagTypes: ["Diary", "Comment"],
  endpoints: (builder) => ({
    getAllDiaries: builder.query({
      query: () => ({
        url: "/community",
        method: "GET",
      }),
      providesTags: ["Diary"],
    }),
    getMyDiaries: builder.query({
      query: ({ searchType, searchValue }) => ({
        url: `/diaries/my`,
        method: "GET",
        params: {
          searchType: searchType,
          searchValue: searchValue,
        },
      }),
      providesTags: ["Diary"],
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
      invalidatesTags: ["Diary"],
    }),
    deleteDiary: builder.mutation({
      query: (diaryId) => ({
        url: `/diaries/${diaryId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Diary"],
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
      invalidatesTags: ["Diary"],
    }),
    getADiary: builder.query({
      query: (diaryId) => ({
        url: `/diaries/${diaryId}`,
        method: "GET",
      }),
      providesTags: ["Diary", "Comment"],
    }),
    likeDiary: builder.mutation({
      query: (diaryId) => ({
        url: `/diaries/${diaryId}/like`,
        method: "POST",
      }),
      invalidatesTags: ["Diary"],
    }),
    uploadImage: builder.mutation({
      query: (file) => ({
        url: "/diaries/images/s3",
        method: "POST",
        body: file,
        formdata: true,
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
      }),
    }),
    addComment: builder.mutation({
      query: (data) => ({
        url: "/comment/new",
        method: "POST",
        body: {
          diaryId: data.diaryId,
          content: data.content,
        },
      }),
      invalidatesTags: ["Comment"],
    }),
    deleteComment: builder.mutation({
      query: (commentId) => ({
        url: `/comment/${commentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Comment"],
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
export const { useAddCommentMutation } = diaryApiSlice;
export const { useDeleteCommentMutation } = diaryApiSlice;
