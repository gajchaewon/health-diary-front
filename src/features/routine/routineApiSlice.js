import { apiSlice } from "../../api/apiSlice";

export const routineApiSlice = apiSlice.injectEndpoints({
  tagTypes: ["Routine"],
  endpoints: (builder) => ({
    getRoutines: builder.query({
      query: (userId) => ({
        url: "/routines",
        method: "GET",
        params: {
          userId,
        },
      }),
      providesTags: ["Routine"],
    }),
    addRoutine: builder.mutation({
      query: ({ routineName, memo }) => ({
        url: "/routines",
        method: "POST",
        body: {
          routineName: routineName,
          memo: memo,
        },
      }),
      invalidatesTags: ["Routine"],
    }),
    addExercise: builder.mutation({
      query: (routineId, exerciseName, description) => ({
        url: "/routines/exercise",
        method: "POST",
        body: {
          routineId: routineId,
          exerciseName: exerciseName,
          description: description,
        },
      }),
      invalidatesTags: ["Routine"],
    }),
    deleteRoutine: builder.mutation({
      query: (routineId) => ({
        url: `/routines/${routineId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Routine"],
    }),
    editRoutine: builder.mutation({
      query: ({ routineId, ...data }) => ({
        url: `/routines/${routineId}`,
        method: "PUT",
        body: {
          routineName: data.routineName,
          memo: data.memo,
        },
      }),
      invalidatesTags: ["Routine"],
    }),
    deleteExercise: builder.mutation({
      query: (routineId, exerciseId) => ({
        url: `/routines/${routineId}/exercise/${exerciseId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Routine"],
    }),
  }),
});

export const { useGetRoutinesQuery } = routineApiSlice;
export const { useAddRoutineMutation } = routineApiSlice;
export const { useAddExerciseMutation } = routineApiSlice;
export const { useDeleteRoutineMutation } = routineApiSlice;
export const { useDeleteExerciseMutation } = routineApiSlice;
export const { useEditRoutineMutation } = routineApiSlice;
