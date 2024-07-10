import { createSlice } from "@reduxjs/toolkit";

const routineSlice = createSlice({
  name: "routine",
  initialState: [],
  reducers: {
    newRoutine: {
      reducer(state, action) {
        state.push({
          routineName: "",
          memo: "",
          exercises: [],
        });
      },
    },
    newExercise: {
      reducer(state, action) {
        const routineId = action.payload;
        const routine = state.find((r) => r.id === routineId);
        routine.exercises.push({
          exerciseName: "",
          description: "",
        });
      },
    },
  },
  deleteRoutine: {
    reducer(state, action) {
      const index = state.findIndex((routine) => routine.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
  deleteExercise: {
    reducer(state, action) {
      const { routineId, exerciseId } = action.payload;
      const routine = state.find((routine) => routine.id === routineId);
      if (routine) {
        const exerciseIndex = routine.findIndex(
          (exercise) => exercise.id === exerciseId
        );
        if (exerciseIndex !== -1) {
          routine.exercises.splice(exerciseIndex, 1);
        }
      }
    },
  },
  editRoutine: {
    reducer(state, action) {
      const index = state.find((routine) => routine.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const selectRoutines = (state) => state.routine.routines;

export const {
  getAllRoutines,
  addNewRoutine,
  addNewExercise,
  editRoutine,
  deleteRoutine,
  deleteExercise,
} = routineSlice.actions;
export default routineSlice.reducer;
