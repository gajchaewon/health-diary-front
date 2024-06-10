import React from "react";
import * as S from "./UProfilePage_view.styled";
import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../../../features/users/userApiSlice";

const UProfilePage_view = () => {
  const { userId } = useParams();
  const { data: fetchUserData, isloading: userDataLoading } =
    useGetUserQuery(userId);
  return (
    <div>
      <S.ExerciseInfoContainer>
        <S.ExerciseInfo>기록한 운동일지📒</S.ExerciseInfo>
        🌟{fetchUserData?.diaryCount}개🌟
      </S.ExerciseInfoContainer>
      <S.ExerciseInfoContainer>
        <S.ExerciseInfo>관심있는 운동❤️‍🔥</S.ExerciseInfo>
      </S.ExerciseInfoContainer>
    </div>
  );
};

export default UProfilePage_view;
