import React from "react";
import * as S from "./FollowUserCard.styled";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";
import { Avatar } from "@mui/material";
import FollowBtn from "./FollowBtn";
import { useGetUserQuery } from "../../features/users/userApiSlice";
import { useLocation } from "react-router-dom";

const FollowUserCard = ({ nickname, userId }) => {
  const myId = useSelector(selectCurrentUser)?.id;
  const { data: fetchUserData, isloading: userDataLoading } =
    useGetUserQuery(userId);

  const location = useLocation();
  return (
    <div>
      <S.UserContainer>
        {myId === userId ? (
          <>
            <Avatar
              sx={{
                bgcolor: "#00aeff",
                margin: "0 15px",
                width: "60px",
                height: "60px",
                fontSize: "30px",
              }}
              title={nickname}
            >
              {nickname.charAt(0)}
            </Avatar>
            <S.Nickname to={`/mprof/view`}>{nickname}</S.Nickname>
          </>
        ) : (
          <>
            <Avatar
              sx={{
                bgcolor: "#00aeff",
                margin: "0 15px",
                width: "70px",
                height: "70px",
                fontSize: "30px",
              }}
              title={nickname}
            >
              {nickname.charAt(0)}
            </Avatar>
            <S.Nickname to={`/user/${userId}/view`}>{nickname}</S.Nickname>
            {location.pathname === "/mprof/follow/following" ? (
              <S.FollowBtnWrapper>
                <FollowBtn
                  userId={userId}
                  followStatus={fetchUserData?.followStatus}
                />
              </S.FollowBtnWrapper>
            ) : (
              <></>
            )}
          </>
        )}
      </S.UserContainer>
    </div>
  );
};

export default FollowUserCard;
