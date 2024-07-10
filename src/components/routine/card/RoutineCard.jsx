import React, { useState, useEffect } from "react";
import * as S from "./RoutineCard.style";
import {
  useAddRoutineMutation,
  useDeleteRoutineMutation,
  useEditRoutineMutation,
} from "../../../features/routine/routineApiSlice";
import Badge from "@mui/material/Badge";
import RunCircleRoundedIcon from "@mui/icons-material/RunCircleRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { useDispatch } from "react-redux";
import {
  addRoutine,
  deleteRoutine,
  editRoutine,
  newExercise,
} from "../../../features/routine/routineSlice";
import ExerciseList from "../list/ExerciseList";

const RoutineCard = ({ routine }) => {
  const dispatch = useDispatch();

  const [randomCard, setRandomCard] = useState(null);
  const [isEditing, setIsEditing] = useState(!routine.routineName);
  const [isExpand, setIsExpand] = useState(false);
  const [routineName, setRoutineName] = useState(routine.routineName || "");
  const [memo, setMemo] = useState(routine.memo || "");

  const [addingRoutine] = useAddRoutineMutation();
  const [deletionRoutine] = useDeleteRoutineMutation();
  const [editingRoutine] = useEditRoutineMutation();

  const onRoutineNameChange = (e) => setRoutineName(e.target.value);
  const onMemoChange = (e) => setMemo(e.target.value);

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      if (isEditing && !routine.id) {
        if (window.confirm("루틴을 등록하시겠습니까?")) {
          try {
            const routineData = await addingRoutine({
              routineName,
              memo,
            }).unwrap();
            dispatch(addRoutine({ ...routineData }));
            setIsEditing(false);
          } catch (err) {
            setIsEditing(true);
            console.log(err);
          }
        } else {
          setIsEditing(true);
        }
      } else if (isEditing && routine.id) {
        if (window.confirm("루틴을 수정하시겠습니까?")) {
          try {
            await editingRoutine({
              routineId: routine.id,
              routineName,
              memo,
            }).unwrap();
            dispatch(editRoutine({ routineId: routine.id, routineName, memo }));
            setIsEditing(false);
          } catch (err) {
            console.log(err);
            setIsEditing(true);
          }
        }
      }
    }
  };

  const handleEditButtonClick = () => {
    setIsEditing(true);
    dispatch(editRoutine(routine.id));
  };

  const handleDelete = () => {
    deletionRoutine(routine.id);
    dispatch(deleteRoutine(routine.id));
  };

  const addNewExercise = () => {
    if (isExpand === true) {
      dispatch(newExercise({ routineId: routine.id }));
    } else {
      setIsExpand(true);
      dispatch(newExercise({ routineId: routine.id }));
    }
  };

  const ExBtnClick = () => {
    if (!isExpand) {
      setIsExpand(true);
    } else if (isExpand) {
      setIsExpand(false);
    }
  };

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    setRandomCard(randomNumber);
  }, []);

  const renderCardContent = () => (
    <div key={routine.id}>
      {isEditing ? (
        <>
          <S.RoutineNameInput
            value={routineName}
            onChange={onRoutineNameChange}
            onKeyDown={handleKeyPress}
            placeholder="루틴이름"
            maxLength={20}
          />
          <S.RoutineInput
            value={memo}
            onChange={onMemoChange}
            onKeyDown={handleKeyPress}
            placeholder="메모"
            maxLength={70}
          />
        </>
      ) : (
        <div>
          <S.IconBtnWrapper>
            {routine.exercises?.length ? (
              <S.IconBtn onClick={ExBtnClick}>
                <Badge badgeContent={routine.exercises?.length} color="primary">
                  <RunCircleRoundedIcon color="action" />
                </Badge>
              </S.IconBtn>
            ) : null}
            <S.IconBtn onClick={addNewExercise}>
              <AddRoundedIcon />
            </S.IconBtn>
            <S.IconBtn onClick={handleEditButtonClick}>
              <EditRoundedIcon />
            </S.IconBtn>
            <S.IconBtn onClick={handleDelete}>
              <ClearRoundedIcon />
            </S.IconBtn>
          </S.IconBtnWrapper>
          <S.CardTitle>{routine.routineName}</S.CardTitle>
          <S.CardApply>{routine.memo}</S.CardApply>
        </div>
      )}
    </div>
  );

  return (
    <>
      {randomCard === 1 && <S.Card1>{renderCardContent()}</S.Card1>}
      {randomCard === 2 && <S.Card2>{renderCardContent()}</S.Card2>}
      {randomCard === 3 && <S.Card3>{renderCardContent()}</S.Card3>}
      {randomCard === 4 && <S.Card4>{renderCardContent()}</S.Card4>}
      {randomCard === 5 && <S.Card5>{renderCardContent()}</S.Card5>}
      {isExpand && (
        <div>
          <ExerciseList exercises={routine.exercises} routineId={routine.id} />
        </div>
      )}
    </>
  );
};

export default RoutineCard;
