import React, { useState } from "react";
import UserCard from "../../../components/follow/FollowUserCard";
import { useGetFollowingsQuery } from "../../../features/users/userApiSlice";
import { useParams } from "react-router-dom";
import * as GlobalSytle from "../UserProfile.style";
import FollowUserCard from "../../../components/follow/FollowUserCard";

const UProfilePageFollowing = () => {
  const userId = useParams().userId;
  const { data: userFollowingList, isLoading: followerloading } =
    useGetFollowingsQuery(userId);

  return (
    <GlobalSytle.Container>
      {userFollowingList &&
        userFollowingList?.map((user) => (
          <div key={user?.id}>
            <FollowUserCard nickname={user?.nickname} userId={user?.id} />
          </div>
        ))}
    </GlobalSytle.Container>
  );
};

export default UProfilePageFollowing;
