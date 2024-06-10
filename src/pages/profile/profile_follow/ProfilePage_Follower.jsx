import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as S from "./ProfilePage_Follow.styled";
import UserCard from "../../../components/follow/FollowUserCard";
import { useGetFollowersQuery } from "../../../features/users/userApiSlice";
import { selectCurrentUser } from "../../../features/auth/authSlice";

const ProfilePageFollower = () => {
  const userId = useSelector(selectCurrentUser).id;
  const { data: userFollowerList, isLoading: followerloading } =
    useGetFollowersQuery(userId);

  return (
    <div>
      {console.log(userFollowerList)}
      {userFollowerList &&
        userFollowerList?.map((user) => (
          <div key={user?.id}>
            <UserCard nickname={user?.nickname} userId={user?.id} />
          </div>
        ))}
    </div>
  );
};

export default ProfilePageFollower;
