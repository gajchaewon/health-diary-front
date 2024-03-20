import React from "react";
import * as S from "./CommDetailPage.styled";
import { TextField } from "@mui/material";

const CommDetailPage = () => {
  return (
    <div>
      <S.Container>
        <S.Title>제목</S.Title>
        <S.Nickname>닉네임</S.Nickname>
        <S.Picture />
        <S.Content>글</S.Content>
        <S.Divider></S.Divider>
        <S.CommentContainer>
          comment(3)
          <S.CommentTextarea>
            <TextField
              id="outlined-textarea"
              label="comment"
              placeholder="댓글을 적어주세요"
              multiline
              fullWidth
              color="grey"
            />
            <S.CommentTextareaBtn>작성</S.CommentTextareaBtn>
          </S.CommentTextarea>
          <S.Comments>
            <S.CommentsUser>유저</S.CommentsUser>
            댓글입니다
          </S.Comments>
          <S.Comments>
            <S.CommentsUser>유저</S.CommentsUser>
            댓글입니다
          </S.Comments>
        </S.CommentContainer>
      </S.Container>
    </div>
  );
};

export default CommDetailPage;
