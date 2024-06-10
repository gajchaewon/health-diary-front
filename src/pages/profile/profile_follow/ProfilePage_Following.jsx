import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as S from "./ProfilePage_Follow.styled";
import UserCard from "../../../components/follow/FollowUserCard";
import { useGetFollowingsQuery } from "../../../features/users/userApiSlice";
import { selectCurrentUser } from "../../../features/auth/authSlice";

const ProfilePageFollowing = () => {
  const userId = useSelector(selectCurrentUser).id;
  const { data: userFollowingsList, isLoading } = useGetFollowingsQuery(userId);

  return (
    <div>
      {console.log(userFollowingsList)}
      {userFollowingsList &&
        userFollowingsList?.map((user) => (
          <div key={user?.id}>
            <UserCard nickname={user?.nickname} userId={user?.id} />
          </div>
        ))}
    </div>
  );
};

export default ProfilePageFollowing;
