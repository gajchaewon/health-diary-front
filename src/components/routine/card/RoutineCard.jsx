import React, { useState, useEffect } from "react";
import * as S from "./RoutineCard.style";
import {
  useAddRoutineMutation,
  useDeleteRoutineMutation,
  useEditRoutineMutation,
} from "../../../features/routine/routineApiSlice";
import Badge from "@mui/material/Badge";
import RunCircleRoundedIcon from "@mui/icons-material/RunCircleRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { useDispatch } from "react-redux";
import {
  addRoutine,
  deleteRoutine,
  editRoutine,
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

  const saveCheck = [routineName].every(Boolean) === true;
  const [isDisabled, setIsDisabled] = useState(true);

  const onRoutineBtnClick = async () => {
    if (isEditing && !routine.id && saveCheck) {
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
    } else if (isEditing && routine.id && saveCheck) {
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
  };

  const handleEditButtonClick = () => {
    setIsEditing(true);
    dispatch(editRoutine(routine.id));
  };

  const handleDelete = () => {
    deletionRoutine(routine.id);
    dispatch(deleteRoutine(routine.id));
  };

  const exBtnClick = () => {
    if (!isExpand) {
      setIsExpand(true);
    } else if (isExpand) {
      setIsExpand(false);
    }
  };

  const preventLineBreaks = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    setRandomCard(randomNumber);
  }, []);

  const renderCardContent = (e) => (
    <div key={routine.id}>
      {isEditing ? (
        <>
          <S.RoutineNameInput
            value={routineName}
            onChange={onRoutineNameChange}
            placeholder="루틴이름"
            maxLength={15}
            rows={1}
            onKeyDown={preventLineBreaks}
          />
          <S.RoutineMemoInput
            value={memo}
            onChange={onMemoChange}
            placeholder="메모"
            maxLength={70}
            rows={2}
          />
          {saveCheck === false ? (
            <>
              <S.RoutineBtn disabled={isDisabled}>루틴추가</S.RoutineBtn>
            </>
          ) : (
            <>
              <S.RoutineBtn onClick={onRoutineBtnClick}>루틴추가</S.RoutineBtn>
            </>
          )}
        </>
      ) : (
        <div>
          <S.IconBtnWrapper>
            <S.IconBtn onClick={exBtnClick}>
              <Badge
                badgeContent={routine.exercises?.length}
                color="primary"
                title="운동"
              >
                <RunCircleRoundedIcon color="action" />
              </Badge>
            </S.IconBtn>

            <S.IconBtn title="수정" onClick={handleEditButtonClick}>
              <EditRoundedIcon />
            </S.IconBtn>
            <S.IconBtn title="삭제" onClick={handleDelete}>
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
    <S.MainContainer>
      {randomCard === 1 && <S.Card1>{renderCardContent()}</S.Card1>}
      {randomCard === 2 && <S.Card2>{renderCardContent()}</S.Card2>}
      {randomCard === 3 && <S.Card3>{renderCardContent()}</S.Card3>}
      {randomCard === 4 && <S.Card4>{renderCardContent()}</S.Card4>}
      {randomCard === 5 && <S.Card5>{renderCardContent()}</S.Card5>}
      {isExpand && (
        <ExerciseList exercises={routine.exercises} routineId={routine.id} />
      )}
    </S.MainContainer>
  );
};

export default RoutineCard;
