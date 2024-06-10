import React, { useEffect, useState } from "react";
import * as S from "./ProfilePage.styled";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";
import { useGetUserQuery } from "../../features/users/userApiSlice";

const ProfilePage = () => {
  const userInfo = useSelector(selectCurrentUser);
  const { data: fetchMyData, isloading: myDataLoading } = useGetUserQuery(
    userInfo.id
  );

  return (
    <div>
      {console.log(userInfo)}
      <S.MyProfile>마이 프로필</S.MyProfile>
      <S.MyProfileContainer>
        <S.ProfilePic>🐥</S.ProfilePic>
        <S.Nickname>{userInfo.nickname}</S.Nickname>
        "자기소개"
        <S.FollowContainer>
          <S.FollowWrapper>
            <S.FollowBtn to="/mprof/follow/follower">
              {fetchMyData?.followerCount}
            </S.FollowBtn>
            <div>팔로워</div>
          </S.FollowWrapper>
          <S.FollowWrapper>
            <S.FollowBtn to="/mprof/follow/following">
              {fetchMyData?.followingCount}
            </S.FollowBtn>
            <div>팔로잉</div>
          </S.FollowWrapper>
        </S.FollowContainer>
        <S.ExerciseInfoContainer>
          <S.ExerciseInfo>기록한 운동일지📒</S.ExerciseInfo>
          🌟{fetchMyData?.diaryCount}개🌟
        </S.ExerciseInfoContainer>
        <S.ExerciseInfoContainer>
          <S.ExerciseInfo>관심있는 운동❤️‍🔥</S.ExerciseInfo>
        </S.ExerciseInfoContainer>
      </S.MyProfileContainer>
    </div>
  );
};

export default ProfilePage;
