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
  }),
});

export const { useGetAllDiariesQuery } = diaryApiSlice;
export const { useGetMyDiariesQuery } = diaryApiSlice;
