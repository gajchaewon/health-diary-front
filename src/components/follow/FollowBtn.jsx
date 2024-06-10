import React from "react";
import {
  useFollowingMutation,
  useUnfollowingMutation,
} from "../../features/users/userApiSlice";
import { FOLLOW_STATUS } from "../../features/constant/followStatusEnum";
import * as S from "./FollowBtn.style";

const FollowBtn = ({ userId, followStatus }) => {
  const [followUser] = useFollowingMutation();
  const [unfollowUser] = useUnfollowingMutation();

  const onFollowClick = async () => {
    await followUser(userId);
  };

  const onUnfollowClick = async () => {
    await unfollowUser(userId);
  };

  switch (followStatus) {
    case FOLLOW_STATUS.NONE:
      return <S.FollowUserBtn onClick={onFollowClick}>팔로우</S.FollowUserBtn>;
    case FOLLOW_STATUS.FOLLOW:
      return (
        <S.FollowUserBtn onClick={onUnfollowClick}>언팔로우</S.FollowUserBtn>
      );
    case FOLLOW_STATUS.SELF:
      return null; // 자신의 프로필인 경우 버튼을 표시하지 않음
    default:
      return null;
  }
};

export default FollowBtn;
