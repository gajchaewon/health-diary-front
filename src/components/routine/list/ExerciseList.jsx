import React from "react";
import ExerciseCard from "../card/ExerciseCard";
import * as S from "../card/ExerciseCard.style";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { newExercise } from "../../../features/routine/routineSlice";
import Button from "@mui/joy/Button";

const ExerciseList = ({ exercises, routineId }) => {
  const dispatch = useDispatch();

  const addNewExercise = () => {
    dispatch(newExercise({ routineId }));
  };

  return (
    <div>
      <Button
        variant="soft"
        color="neutral"
        sx={{ width: "500px" }}
        onClick={addNewExercise}
      >
        <AddIcon />
      </Button>
      {exercises && exercises?.length > 0 ? (
        exercises
          ?.slice(0)
          .reverse()
          .map((exercise, idx) => (
            <ExerciseCard key={idx} exercise={exercise} routineId={routineId} />
          ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ExerciseList;
