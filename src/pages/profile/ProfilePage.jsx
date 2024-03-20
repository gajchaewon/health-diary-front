import React from "react";
import * as S from "./ProfilePage.styled";

const ProfilePage = () => {
  return (
    <div>
      <S.MyProfile>마이 프로필</S.MyProfile>
      <S.ProfileContainer>
        <S.ProfilePic>🐥</S.ProfilePic>
        <S.Nickname>닉네임</S.Nickname>
        "자기소개"
        <S.ExerciseInfoContainer>
          <S.ExerciseInfo>기록한 운동일지📒</S.ExerciseInfo>
          🌟16개🌟
        </S.ExerciseInfoContainer>
        <S.ExerciseInfoContainer>
          <S.ExerciseInfo>기록한 운동시간🕒</S.ExerciseInfo>
          💦28시간💦
        </S.ExerciseInfoContainer>
        <S.ExerciseInfoContainer>
          <S.ExerciseInfo>관심있는 운동❤️‍🔥</S.ExerciseInfo>
        </S.ExerciseInfoContainer>
      </S.ProfileContainer>
    </div>
  );
};

export default ProfilePage;
