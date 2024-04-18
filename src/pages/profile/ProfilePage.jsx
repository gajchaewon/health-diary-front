import React, { useEffect, useState } from "react";
import * as S from "./ProfilePage.styled";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";
import { selectMyDiaries } from "../../features/diaries/diarySlice";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const location = useLocation();
  const userInfo = useSelector(selectCurrentUser);
  const myDiary = useSelector(selectMyDiaries);
  const [diaryData, setDiaryData] = useState([]);

  const isMyProfile = location.pathname === "/mprof/view";
  useEffect(() => {
    const diary = location.state?.diary;
    setDiaryData(diary);
  }, [location.state?.diary]);

  return (
    <div>
      {isMyProfile ? (
        <>
          <S.MyProfile>마이 프로필</S.MyProfile>
          <S.ProfileContainer>
            <S.ProfilePic>🐥</S.ProfilePic>
            <S.Nickname>{userInfo.nickname}</S.Nickname>
            "자기소개"
            <S.FollowContainer>
              <S.FollowWrapper>
                <S.FollowBtn>1</S.FollowBtn>
                <div>팔로잉</div>
              </S.FollowWrapper>
              <S.FollowWrapper>
                <S.FollowBtn>1</S.FollowBtn>
                <div>팔로워</div>
              </S.FollowWrapper>
            </S.FollowContainer>
            <S.ExerciseInfoContainer>
              <S.ExerciseInfo>기록한 운동일지📒</S.ExerciseInfo>
              🌟{myDiary.length}개🌟
            </S.ExerciseInfoContainer>
            <S.ExerciseInfoContainer>
              <S.ExerciseInfo>관심있는 운동❤️‍🔥</S.ExerciseInfo>
            </S.ExerciseInfoContainer>
          </S.ProfileContainer>
        </>
      ) : (
        <>
          <S.MyProfile>{diaryData.nickname}님의 프로필</S.MyProfile>
          <S.ProfileContainer>
            <S.ProfilePic>🐥</S.ProfilePic>
            <S.Nickname>{diaryData.nickname}</S.Nickname>
            "자기소개"
            <S.FollowContainer>
              <S.FollowWrapper>
                <S.FollowBtn>1</S.FollowBtn>
                <div>팔로잉</div>
              </S.FollowWrapper>
              <S.FollowWrapper>
                <S.FollowBtn>1</S.FollowBtn>
                <div>팔로워</div>
              </S.FollowWrapper>
            </S.FollowContainer>
            <S.ExerciseInfoContainer>
              <S.ExerciseInfo>기록한 운동일지📒</S.ExerciseInfo>
              🌟개🌟
            </S.ExerciseInfoContainer>
            <S.ExerciseInfoContainer>
              <S.ExerciseInfo>관심있는 운동❤️‍🔥</S.ExerciseInfo>
            </S.ExerciseInfoContainer>
          </S.ProfileContainer>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
