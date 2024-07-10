import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routines: [],
};

const routineSlice = createSlice({
  name: "routine",
  initialState,
  reducers: {
    getAllRoutines(state, action) {
      state.routines = action.payload;
    },
    newRoutine(state) {
      state.routines.push({
        routineName: "",
        memo: "",
        exercises: [],
      });
    },
    addRoutine(state, action) {
      state.routines.push(action.payload);
    },
    newExercise(state, action) {
      const { routineId } = action.payload;
      const routine = state.routines.find(
        (routine) => routine.id === routineId
      );
      if (routine) {
        routine.exercises.push({ exerciseName: "", description: "" });
      }
    },
    addExercise(state, action) {
      const { routineId, exercise } = action.payload;
      const routine = state.routines.find(
        (routine) => routine.id === routineId
      );
      if (routine) {
        routine.exercises.push(exercise);
      }
    },
    deleteRoutine(state, action) {
      const index = state.routines.findIndex(
        (routine) => routine.id === action.payload
      );
      if (index !== -1) {
        state.routines.splice(index, 1);
      }
    },
    deleteExercise(state, action) {
      const { routineId, exerciseId } = action.payload;
      const routine = state.routines.find(
        (routine) => routine.id === routineId
      );
      if (routine) {
        const index = routine.exercises.findIndex(
          (exercise) => exercise.id === exerciseId
        );
        if (index !== -1) {
          routine.exercises.splice(index, 1);
        }
      }
    },
    editRoutine(state, action) {
      const index = state.routines.findIndex(
        (routine) => routine.id === action.payload.id
      );
      if (index !== -1) {
        state.routines[index] = action.payload;
      }
    },
  },
});

export const selectRoutine = (state) => state.routine.routines;

export const {
  getAllRoutines,
  newRoutine,
  addRoutine,
  newExercise,
  addExercise,
  editRoutine,
  deleteRoutine,
  deleteExercise,
} = routineSlice.actions;

export default routineSlice.reducer;
