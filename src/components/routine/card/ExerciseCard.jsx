import React, { useEffect, useState } from "react";
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
import Input from "@mui/joy/Input";
import FormHelperText from "@mui/joy/FormHelperText";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import { render } from "@testing-library/react";

const ExerciseCard = ({ exercise, routineId }) => {
  const dispatch = useDispatch();

  const [exerciseName, setExerciseName] = useState("");
  const [description, setDescription] = useState("");

  const [addingExercise, { isLoading: addExerciseLoading }] =
    useAddExerciseMutation();
  const [deletionRoutineExercise, { isLoading: deleteExerciseLoding }] =
    useDeleteExerciseMutation();

  const [isEditing, setIsEditing] = useState(false);

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      try {
        const exerciseData = await addingExercise({
          routineId,
          exerciseName,
          description,
        }).unwrap();
        console.log(exerciseData);
        dispatch(addExercise({ ...exerciseData }));
      } catch (err) {
        setIsEditing(true);
        console.log(err);
      }
    }
  };

  const handleDelete = async () => {
    try {
      await deletionRoutineExercise({
        routineId,
        exerciseId: exercise.id,
      }).unwrap();
      dispatch(deleteExercise({ routineId, exerciseId: exercise.id }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (exercise.exerciseName === "") {
      setIsEditing(true);
      setExerciseName("");
      setDescription("");
    } else {
      setIsEditing(false);
      setExerciseName(exercise.exerciseName);
      setDescription(exercise.description);
    }
  }, [exercise]);

  return (
    <S.ExerciseCardContainer>
      {isEditing ? (
        <S.ExerciseInputContainer>
          <Input
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="운동이름"
            sx={{
              margin: "3px",
              "&::before": {
                display: "none",
              },
              "&:focus-within": {
                outline: "0.5px solid lightBlue",
              },
            }}
          />
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="운동설명"
            sx={{
              margin: "3px",
              "&::before": {
                display: "none",
              },
              "&:focus-within": {
                outline: "0.5px solid lightBlue",
              },
            }}
          />
          {!exerciseName ? (
            <>
              <FormHelperText>
                <InfoOutlined />
                운동이름을 적어주세요!
              </FormHelperText>
            </>
          ) : (
            <></>
          )}
        </S.ExerciseInputContainer>
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
