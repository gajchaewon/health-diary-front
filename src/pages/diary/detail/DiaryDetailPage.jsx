import React, { useState, useEffect } from "react";
import * as S from "./DiaryDetailPage.styled";
import { useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectSingleDiary } from "../../../features/diaries/diarySlice";
import {
  useGetADiaryQuery,
  useLikeDiaryMutation,
} from "../../../features/diaries/diaryApiSlice";
import { getDiary, likeDiary } from "../../../features/diaries/diarySlice";
import SentimentNeutralRoundedIcon from "@mui/icons-material/SentimentNeutralRounded";
import SentimentVerySatisfiedRoundedIcon from "@mui/icons-material/SentimentVerySatisfiedRounded";
import Comments from "../../../components/comment/Comments";
import { selectCurrentUser } from "../../../features/auth/authSlice";

const DiaryDetailPage = () => {
  const dispatch = useDispatch();
  const diaryId = useParams().diaryId;
  const { data: fetchDiary, isLoading } = useGetADiaryQuery(diaryId);
  const singleDiary = useSelector(selectSingleDiary);
  const userId = useSelector(selectCurrentUser)?.id;
  const [like, { isLoading: isLikeLoading }] = useLikeDiaryMutation();

  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    if (fetchDiary && !isLoading) {
      dispatch(getDiary(fetchDiary));
      setIsLike(() => fetchDiary.likeInfo.userIds.includes(userId));
    }
  }, [fetchDiary, isLoading, userId, dispatch]);

  const onLikeClick = async () => {
    if (!isLikeLoading) {
      try {
        const response = await like(diaryId).unwrap();
        console.log(response);
        const likeCount = response.likeCount; // 응답에서 likeCount를 가져옵니다.
        dispatch(likeDiary({ diaryId, likeCount }));
        if (!isLike) {
          setIsLike(true);
        } else {
          setIsLike(false);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <S.Container>
        <S.Title>{singleDiary.title}</S.Title>
        <S.Nickname>{singleDiary.nickname}</S.Nickname>
        {singleDiary?.imageUrls && singleDiary?.imageUrls.length > 0 && (
          <S.Picture src={singleDiary?.imageUrls[0]} alt="pic" />
        )}
        <S.Content>{singleDiary.content}</S.Content>
        <button
          onClick={onLikeClick}
          style={{
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
        >
          {!isLike ? (
            <SentimentNeutralRoundedIcon sx={{ fontSize: 50 }} />
          ) : (
            <SentimentVerySatisfiedRoundedIcon sx={{ fontSize: 50 }} />
          )}
        </button>
        {singleDiary?.likeCount}
        <S.Divider></S.Divider>
        <Comments diaryId={diaryId} />
      </S.Container>
    </div>
  );
};

export default DiaryDetailPage;
