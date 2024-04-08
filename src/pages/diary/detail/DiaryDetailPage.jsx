import React, { useState, useEffect } from "react";
import * as S from "./DiaryDetailPage.styled";
import { TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentDiaries } from "../../../features/diaries/diarySlice";
import {
  useGetADiaryQuery,
  useLikeDiaryMutation,
} from "../../../features/diaries/diaryApiSlice";
import { getDiary, likeDiary } from "../../../features/diaries/diarySlice";
import SentimentNeutralRoundedIcon from "@mui/icons-material/SentimentNeutralRounded";
import SentimentVerySatisfiedRoundedIcon from "@mui/icons-material/SentimentVerySatisfiedRounded";

const DiaryDetailPage = () => {
  const location = useLocation();
  const diaryId = location.state.diary.id;
  const dispatch = useDispatch();
  const { data: diary, isLoading } = useGetADiaryQuery(diaryId);
  const [diaryData, setDiaryData] = useState(useSelector(selectCurrentDiaries));
  const [like, { isLoading: isLikeLoading }] = useLikeDiaryMutation();
  const [isLike, setIsLike] = useState(true);

  useEffect(() => {
    if (diary && !isLoading) {
      dispatch(getDiary(diary));
      setDiaryData(diary);
    }
  }, [diary, dispatch, isLoading, diaryData.likeCount]);

  const onLikeClick = async () => {
    if (!isLike && !isLikeLoading) {
      try {
        await like(diary.id).unwrap();
        dispatch(likeDiary(diary.id));
        setIsLike(true);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await like(diary.id).unwrap();
        dispatch(likeDiary(diary.id));
        setIsLike(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      {console.log(diaryData)}
      {diaryData && (
        <S.Container>
          <S.Title>{diaryData.title}</S.Title>
          <S.Nickname>{diaryData.nickname}</S.Nickname>
          {diaryData.imageUrls && diaryData.imageUrls.length > 0 && (
            <S.Picture src={diaryData.imageUrls[0]} alt="pic" />
          )}
          <S.Content>{diaryData.content}</S.Content>
          <button
            onClick={onLikeClick}
            style={{
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            {isLike ? (
              <SentimentNeutralRoundedIcon sx={{ fontSize: 50 }} />
            ) : (
              <SentimentVerySatisfiedRoundedIcon sx={{ fontSize: 50 }} />
            )}
          </button>
          {diaryData.likeCount}
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
      )}
    </div>
  );
};

export default DiaryDetailPage;
