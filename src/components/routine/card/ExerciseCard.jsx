import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import * as S from "./ExerciseCard.style";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import {
  addExercise,
  deleteExercise,
} from "../../../features/routine/routineSlice";
import {
  useAddExerciseMutation,
  useDeleteExerciseMutation,
} from "../../../features/routine/routineApiSlice";
import { useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";

const ExerciseCard = ({ exercise, routineId }) => {
  const dispatch = useDispatch();
  const [exerciseName, setExerciseName] = useState(
    exercise?.exerciseName || ""
  );
  const [description, setDescription] = useState(exercise?.description || "");

  const [addingExercise, { isLoading: addExerciseLoading }] =
    useAddExerciseMutation();
  const [deletionRoutine, { isLoading: deleteExerciseLoding }] =
    useDeleteExerciseMutation();

  const [isEditing, setIsEditing] = useState(!exerciseName);

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      try {
        const exerciseData = await addingExercise({
          routineId,
          exerciseName,
          description,
        }).unwrap();
        dispatch(addExercise({ ...exerciseData }));
        setIsEditing(false);
      } catch (err) {
        setIsEditing(true);
        console.log(err);
      }
    }
  };

  const handleDelete = async () => {
    try {
      await deletionRoutine({
        routineId,
        exerciseId: exercise.id,
      }).unwrap();
      dispatch(deleteExercise({ routineId, exerciseId: exercise.id }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.ExerciseCardContainer>
      {isEditing ? (
        <>
          <S.ExerciseInput
            label="운동이름"
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <S.ExerciseInput
            label="운동설명"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </>
      ) : (
        <>
          <S.IconBtnWrapper>
            <IconButton onClick={handleDelete}>
              <ClearRoundedIcon />
            </IconButton>
          </S.IconBtnWrapper>
          <S.ExerciseName>{exerciseName}</S.ExerciseName>
          <S.ExerciseDesc>{description}</S.ExerciseDesc>
        </>
      )}
    </S.ExerciseCardContainer>
  );
};

export default ExerciseCard;
