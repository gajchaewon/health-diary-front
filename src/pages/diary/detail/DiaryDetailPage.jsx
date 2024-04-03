import React, { useState, useEffect } from "react";
import * as S from "./DiaryDetailPage.styled";
import { TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentDiaries } from "../../../features/diaries/diarySlice";
import { useGetADiaryQuery } from "../../../features/diaries/diaryApiSlice";
import { getDiary } from "../../../features/diaries/diarySlice";

const DiaryDetailPage = () => {
  const location = useLocation();
  const diaryId = location.state.diary.id;
  const dispatch = useDispatch();
  const { data: diary, isLoading } = useGetADiaryQuery(diaryId);
  const [diaryData, setDiaryData] = useState(useSelector(selectCurrentDiaries));

  useEffect(() => {
    if (diary && !isLoading) {
      dispatch(getDiary(diary));
      setDiaryData(diary);
      console.log(diaryData);
    }
  }, [diary, dispatch]);

  return (
    <div>
      <S.Container>
        <S.Title>{diaryData.title}</S.Title>
        <S.Nickname>{diaryData.nickname}</S.Nickname>
        <S.Picture />
        <S.Content>{diaryData.content}</S.Content>
        <S.Divider></S.Divider>
        <S.CommentContainer>
          comment({diaryData.comments && diaryData.comments.length})
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
          {diaryData.comments &&
            diaryData.comments.map((comment) => (
              <S.Comments>
                <S.CommentsUser>{comment.nickname}</S.CommentsUser>
                {comment.content}
              </S.Comments>
            ))}
        </S.CommentContainer>
      </S.Container>
    </div>
  );
};

export default DiaryDetailPage;
