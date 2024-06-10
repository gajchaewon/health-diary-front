import React from "react";
import * as S from "./FollowUserCard.styled";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";

const FollowUserCard = ({ nickname, userId }) => {
  const myId = useSelector(selectCurrentUser).id;
  return (
    <div>
      <S.UserContainer>
        {myId === userId ? (
          <>
            <S.Userpic />
            <S.Nickname to={`/mprof/view`}>{nickname}</S.Nickname>
          </>
        ) : (
          <>
            <S.Userpic />
            <S.Nickname to={`/user/${userId}/view`}>{nickname}</S.Nickname>
          </>
        )}
      </S.UserContainer>
    </div>
  );
};

export default FollowUserCard;
