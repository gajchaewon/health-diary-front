import React from "react";
import * as S from "./MyProfile.styled";
import { Outlet } from "react-router-dom";

const MyProfile = () => {
  return (
    <S.MyProfileContainer>
      <S.ProfileMenuContainer>
        <S.ProfileMenu>마이 프로필</S.ProfileMenu>
        <S.ProfileMenuBtn to="/mprof/view">프로필 보기</S.ProfileMenuBtn>
        <S.ProfileMenuBtn to="/mprof/edit">프로필 수정</S.ProfileMenuBtn>
        <br></br>
        <S.ProfileMenu>커뮤니티</S.ProfileMenu>
        <S.ProfileMenuBtn to="/mprof/like">내가 좋아요한 일지</S.ProfileMenuBtn>
        <S.ProfileMenuBtn to="/mprof/comment">
          내 커뮤니티 댓글
        </S.ProfileMenuBtn>
      </S.ProfileMenuContainer>
      <S.ProfileComponenetWrapper>
        <Outlet />
      </S.ProfileComponenetWrapper>
    </S.MyProfileContainer>
  );
};

export default MyProfile;
