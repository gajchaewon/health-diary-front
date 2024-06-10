import React from "react";
import { Outlet, useParams } from "react-router-dom";
import * as S from "./FollowNavigation.styled";

const FollowNavigation = () => {
  const { userId } = useParams();
  return (
    <div>
      {userId ? (
        <>
          <S.FollowContainer>
            <S.FollowMenuContainer>
              <S.FollowMenu to={`/user/${userId}/follow/follower`}>
                팔로워
              </S.FollowMenu>
              <S.FollowMenu to={`/user/${userId}/follow/following`}>
                팔로잉
              </S.FollowMenu>
            </S.FollowMenuContainer>
          </S.FollowContainer>
          <S.Divider />
          <S.CardContainer>
            <Outlet />
          </S.CardContainer>
        </>
      ) : (
        <>
          <S.FollowContainer>
            <S.FollowMenuContainer>
              <S.FollowMenu to="/mprof/follow/follower">팔로워</S.FollowMenu>
              <S.FollowMenu to="/mprof/follow/following">팔로잉</S.FollowMenu>
            </S.FollowMenuContainer>
          </S.FollowContainer>
          <S.Divider />
          <S.CardContainer>
            <Outlet />
          </S.CardContainer>
        </>
      )}
    </div>
  );
};

export default FollowNavigation;
