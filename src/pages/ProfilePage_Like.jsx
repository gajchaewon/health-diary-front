import React from "react";
import * as S from "./ProfilePage_Like.styled";
import SDiaryCard from "../components/DiaryCard.S";

const ProfilePageLike = () => {
  return (
    <div>
      <S.LikedDiary>내가 좋아요한 일지</S.LikedDiary>
      <S.CardContainer>
        <SDiaryCard />
        <SDiaryCard />
        <SDiaryCard />
      </S.CardContainer>
    </div>
  );
};

export default ProfilePageLike;
