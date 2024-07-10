import React, { useState, useEffect } from "react";
import * as S from "./RoutineCard.style";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
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
  addNewExercise,
  addNewRoutine,
} from "../../../features/routine/routineSlice";

const RoutineCard = ({ routine }) => {
  const [randomCard, setRandomCard] = useState(null);
  const [isEditing, setIsEditing] = useState(!routine.routineName);
  const [anchorEl, setAnchorEl] = useState(null);
  const [routineName, setRoutineName] = useState(routine.routineName || "");
  const [memo, setMemo] = useState(routine.memo || "");
  const [addingRoutine, { isLoading: addRoutineLoading }] =
    useAddRoutineMutation();
  const [deletionRoutine, { isLoading: deleteRoutineLoding }] =
    useDeleteRoutineMutation();
  const [editingRoutine, { isLoading: editingRoutineLoading }] =
    useEditRoutineMutation();

  const dispatch = useDispatch();

  const onRoutineNameChange = (e) => setRoutineName(e.target.value);
  const onMemoChange = (e) => setMemo(e.target.value);

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      if (window.confirm("루틴을 등록하시겠습니까?") === false) {
        setIsEditing(true);
      } else {
        try {
          const routineData = await addingRoutine({
            routineName,
            memo,
          }).unwrap();
          dispatch(addNewRoutine({ ...routineData }));
          setIsEditing(false);
        } catch (err) {
          setIsEditing(true);
          console.log(err);
        }
      }
    }
  };

  const handleMoreClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMoreClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = async (e) => {
    setIsEditing(true);
    if (e.key === "Enter") {
      if (window.confirm("루틴을 수정하시겠습니까?") === false) {
        setIsEditing(true);
      } else {
        try {
          await addingRoutine({ routineName, memo }).unwrap();
          setIsEditing(false);
        } catch (err) {
          setIsEditing(true);
          console.log(err);
        }
      }
    }
    handleMoreClose();
  };

  const handleDelete = () => {
    deletionRoutine(routine.id);
    handleMoreClose();
  };

  const newExercise = (routineId) => {
    dispatch(
      addNewExercise({
        routineId,
        exercise: { exerciseName: "", description: "" },
      })
    );
  };

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    setRandomCard(randomNumber);
  }, []);

  const renderCardContent = () => (
    <>
      {isEditing ? (
        <>
          <S.RoutineInput
            value={routineName}
            onChange={onRoutineNameChange}
            onKeyPress={handleKeyPress}
            fullWidth
            placeholder="루틴이름"
          />
          <S.RoutineInput
            value={memo}
            onChange={onMemoChange}
            onKeyPress={handleKeyPress}
            fullWidth
            multiline
            placeholder="메모"
          />
        </>
      ) : (
        <>
          <S.IconBtnWrapper>
            {routine.exercises?.length ? (
              <S.IconBtn>
                <Badge badgeContent={routine.exercises?.length} color="primary">
                  <RunCircleRoundedIcon color="action" />
                </Badge>
              </S.IconBtn>
            ) : (
              <></>
            )}
            <S.IconBtn>
              <AddRoundedIcon onClick={newExercise} />
            </S.IconBtn>
            <S.IconBtn>
              <EditRoundedIcon />
            </S.IconBtn>
            <S.IconBtn>
              <ClearRoundedIcon onClick={deletionRoutine} />
            </S.IconBtn>
          </S.IconBtnWrapper>

          <S.CardTitle>{routine.routineName}</S.CardTitle>
          <S.CardApply>{routine.memo}</S.CardApply>
        </>
      )}
    </>
  );

  return (
    <>
      {randomCard === 1 && <S.Card1>{renderCardContent()}</S.Card1>}
      {randomCard === 2 && <S.Card2>{renderCardContent()}</S.Card2>}
      {randomCard === 3 && <S.Card3>{renderCardContent()}</S.Card3>}
      {randomCard === 4 && <S.Card4>{renderCardContent()}</S.Card4>}
      {randomCard === 5 && <S.Card5>{renderCardContent()}</S.Card5>}
    </>
  );
};

export default RoutineCard;
