import React from "react";
import * as S from "./MyDiaryRoutine.styled";
import { Outlet } from "react-router-dom";

const MyDiaryRoutine = () => {
  return (
    <>
      <S.MyDiaryContainer>
        <S.MyDaRContainer>
          <S.MyDiary to="/my/diaries">나의 운동일지</S.MyDiary>
          <S.MyDiary style={{ fontSize: "32px" }}>🏋️</S.MyDiary>
          <S.MyDiary to="/my/routine">나의 운동루틴</S.MyDiary>
        </S.MyDaRContainer>
        <Outlet />
      </S.MyDiaryContainer>
    </>
  );
};

export default MyDiaryRoutine;
