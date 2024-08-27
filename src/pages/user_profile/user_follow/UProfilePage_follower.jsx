import React, { useState } from "react";
import UserCard from "../../../components/follow/FollowUserCard";
import { useGetFollowersQuery } from "../../../features/users/userApiSlice";
import { useParams } from "react-router-dom";
import * as GlobalSytle from "../UserProfile.style";
import FollowUserCard from "../../../components/follow/FollowUserCard";

const UProfilePageFollower = () => {
  const userId = useParams().userId;
  const { data: userFollowerList, isLoading: followerloading } =
    useGetFollowersQuery(userId);

  return (
    <GlobalSytle.Container>
      {userFollowerList &&
        userFollowerList?.map((user) => (
          <div key={user?.id}>
            <FollowUserCard nickname={user?.nickname} userId={user?.id} />
          </div>
        ))}
    </GlobalSytle.Container>
  );
};

export default UProfilePageFollower;
