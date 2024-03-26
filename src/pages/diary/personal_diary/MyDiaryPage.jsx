import React, { useEffect, useState } from "react";
import * as S from "./MyDiaryPage.styled";
import Diarycard from "../../../components/DiaryCard";
import { useGetMyDiariesQuery } from "../../../features/diaries/diaryApiSlice";
import { getMyDiaries } from "../../../features/diaries/diarySlice";
import { useDispatch } from "react-redux";

const MyDiaryPage = () => {
  const dispatch = useDispatch();
  const [myDiaries, setMyDiaries] = useState("");
  const { data, isLoading } = useGetMyDiariesQuery();
  useEffect(() => {
    if (!isLoading && data) {
      dispatch(getMyDiaries({ ...data.content }));
      setMyDiaries(data.content);
      console.log(data);
    }
  }, [data, isLoading, dispatch]);
  return (
    <S.MyDiaryContainer>
      <S.MyDiary>나의 운동일지</S.MyDiary>
      <S.CalendarContainer>
        <S.CalendarBtn>지난달</S.CalendarBtn>
        <S.CalendarWrapper>달력</S.CalendarWrapper>
        <S.CalendarBtn>다음달</S.CalendarBtn>
      </S.CalendarContainer>
      <S.DiaryCardSortBtn>날짜순 ▼</S.DiaryCardSortBtn>
      <S.DiaryCardContainer>
        {myDiaries &&
          myDiaries.map((diary) => (
            <div key={diary.id}>
              <Diarycard diary={diary} />
            </div>
          ))}
      </S.DiaryCardContainer>
    </S.MyDiaryContainer>
  );
};

export default MyDiaryPage;
