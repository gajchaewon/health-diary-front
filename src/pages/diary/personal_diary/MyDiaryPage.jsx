import React from "react";
import * as S from "./MyDiaryPage.styled";
import Diarycard from "../../../components/DiaryCard";

const MyDiaryPage = () => {
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
        <Diarycard />
        <Diarycard />
        <Diarycard />
        <Diarycard />
        <Diarycard />
        <Diarycard />
      </S.DiaryCardContainer>
    </S.MyDiaryContainer>
  );
};

export default MyDiaryPage;
