// import React, { useState, useEffect } from "react";
// import * as S from "./RoutinePage.styled";
// import RoutineCard from "../../components/routine/card/RoutineCard";
// import ExerciseCard from "../../components/routine/card/ExerciseCard";
// import Add from "@mui/icons-material/Add";
// import Button from "@mui/joy/Button";
// import { useGetRoutinesQuery } from "../../features/routine/routineApiSlice";
// import { useSelector } from "react-redux";
// import { selectCurrentUser } from "../../features/auth/authSlice";
// import RoutineList from "../../components/routine/list/RoutineList";

// const RoutinePage = () => {
//   const [routines, setRoutines] = useState([]);
//   const { data: fetchRoutines, isLoading: getRoutinesLoading } =
//     useGetRoutinesQuery();

//   useEffect(() => {
//     if (fetchRoutines) {
//       setRoutines(fetchRoutines);
//     }
//   }, [fetchRoutines]);

//   const addRoutine = () => {
//     setRoutines([...routines, { routineName: "", memo: "", exercises: [] }]);
//   };

//   const addExercise = (routineId) => {
//     const updatedRoutine = routines
//       .filter((routine) => routine.id === routineId)
//       .map((routine) =>
//         routine.id === routineId
//           ? {
//               ...routine,
//               exercises: [
//                 ...routine.exercises,
//                 { exerciseName: "", description: "" },
//               ],
//             }
//           : routine
//       );
//     setRoutines(updatedRoutine);
//   };

//   return (
//     <S.MyRoutineContainer>
//       <Button
//         variant="outlined"
//         color="neutral"
//         startDecorator={<Add />}
//         sx={{ height: "fit-content" }}
//         onClick={addRoutine}
//       >
//         루틴추가
//       </Button>
//       {routines.map((routine) => (
//         <div key={routine.id}>
//           <RoutineList
//             routine={routine}
//             addExercise={addExercise}
//             exNum={routine.exercises?.length}
//           />
//           {routine.exercises.map((exercise) => (
//             <ExerciseCard key={exercise.id} exercise={exercise} />
//           ))}
//         </div>
//       ))}
//     </S.MyRoutineContainer>
//   );
// };

// export default RoutinePage;

import React from "react";
import * as S from "./RoutinePage.styled";
import { useDispatch } from "react-redux";
import RoutineList from "../../components/routine/list/RoutineList";
import { addNewRoutine } from "../../features/routine/routineSlice";
import Add from "@mui/icons-material/Add";
import Button from "@mui/joy/Button";

const RoutinePage = () => {
  const dispatch = useDispatch();

  const newRoutine = () => {
    dispatch(newRoutine());
  };

  return (
    <S.MyRoutineContainer>
      <Button
        variant="outlined"
        color="neutral"
        startDecorator={<Add />}
        sx={{ height: "fit-content" }}
        onClick={newRoutine}
      >
        루틴추가
      </Button>
      <RoutineList />
    </S.MyRoutineContainer>
  );
};

export default RoutinePage;
