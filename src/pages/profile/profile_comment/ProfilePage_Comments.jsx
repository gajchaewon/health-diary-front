import React from "react";
import * as S from "./ProfilePage_Comments.styled";
import DeleteIcon from "@mui/icons-material/Delete";

const ProfilePageComment = () => {
  return (
    <div>
      <S.Comments>내 커뮤니티 댓글</S.Comments>
      <S.CommentsContainer>
        <S.DeleteBtn>
          <DeleteIcon />
        </S.DeleteBtn>
        <S.Comment>"댓글내용"</S.Comment>
        <S.DiaryLinkWrapper>
          <S.DiaryLink to="/comm/diaryId">일지 제목</S.DiaryLink>에 남긴 댓글
        </S.DiaryLinkWrapper>
        <S.Date>2024.01.13</S.Date>
      </S.CommentsContainer>
      <S.CommentsContainer>
        <S.DeleteBtn>
          <DeleteIcon />
        </S.DeleteBtn>
        <S.Comment>"댓글내용"</S.Comment>
        <S.DiaryLinkWrapper>
          <S.DiaryLink to="/comm/diaryId">일지 제목</S.DiaryLink>에 남긴 댓글
        </S.DiaryLinkWrapper>
        <S.Date>2024.01.13</S.Date>
      </S.CommentsContainer>
      <S.CommentsContainer>
        <S.DeleteBtn>
          <DeleteIcon />
        </S.DeleteBtn>
        <S.Comment>"댓글내용"</S.Comment>
        <S.DiaryLinkWrapper>
          <S.DiaryLink to="/comm/diaryId">일지 제목</S.DiaryLink>에 남긴 댓글
        </S.DiaryLinkWrapper>
        <S.Date>2024.01.13</S.Date>
      </S.CommentsContainer>
    </div>
  );
};

export default ProfilePageComment;
