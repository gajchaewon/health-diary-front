import React, { useState } from "react";
import * as S from "./UserProfile.styled";
import { Outlet, NavLink, useParams } from "react-router-dom";
import { useGetUserQuery } from "../../features/users/userApiSlice";
import { Button } from "@mui/material";
import PersonPinRoundedIcon from "@mui/icons-material/PersonPinRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";

import { useDispatch } from "react-redux";
import FollowBtn from "../follow/FollowBtn";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { data: fetchUserData, isloading: userDataLoading } =
    useGetUserQuery(userId);

  return (
    <S.UserProfileContainer>
      <S.ProfilePic>🐥</S.ProfilePic>
      <S.Nickname>{fetchUserData?.nickname}</S.Nickname>
      <FollowBtn followStatus={fetchUserData?.followStatus} userId={userId} />
      "자기소개"
      <S.FollowContainer>
        <S.FollowWrapper>
          <S.FollowBtn to={`/user/${userId}/follow/follower`}>
            {fetchUserData?.followerCount}
          </S.FollowBtn>
          <div>팔로워</div>
        </S.FollowWrapper>
        <S.FollowWrapper>
          <S.FollowBtn to={`/user/${userId}/follow/following`}>
            {fetchUserData?.followingCount}
          </S.FollowBtn>
          <div>팔로잉</div>
        </S.FollowWrapper>
      </S.FollowContainer>
      <S.MenuContainer>
        <NavLink to={`/user/${userId}/view`}>
          <Button>
            <PersonPinRoundedIcon sx={{ fontSize: 40, color: "#212121" }} />
          </Button>
        </NavLink>
        <NavLink to={`/user/${userId}/diaries`}>
          <Button>
            <GridViewRoundedIcon sx={{ fontSize: 40, color: "#212121" }} />
          </Button>
        </NavLink>
        <NavLink to={`/user/${userId}/follow/follower`}>
          <Button>
            <Groups2RoundedIcon sx={{ fontSize: 50, color: "#212121" }} />
          </Button>
        </NavLink>
      </S.MenuContainer>
      <Outlet />
    </S.UserProfileContainer>
  );
};

export default UserProfile;
